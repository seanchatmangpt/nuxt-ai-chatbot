// server/api/chat.post.ts
import { ActorSystem } from "dpgjs";
import {
  OpenAIActor,
  OpenAICommandMessage,
  OpenAIEventMessage,
} from "@/actor/openai-actor";
import { readBody } from "h3"; // Assuming you're using h3 for HTTP utilities in Nuxt 3

export default defineEventHandler(async (event) => {
  // Assuming there's a global or shared ActorSystem instance you can access
  const actorSystem = new ActorSystem();
  const openAIActor = actorSystem.actorOf(OpenAIActor);

  const previousMessages = JSON.parse(await readBody(event));

  // Create a command message with the previous messages serialized as a JSON string
  const commandMessage = new OpenAICommandMessage({
    content: JSON.stringify(previousMessages),
  });

  // Send the command message to the OpenAIActor
  actorSystem.publishMessage(commandMessage);

  // Here we assume an enhanced ActorSystem with the ability to wait for a specific message type
  // This might require custom implementation within your ActorSystem class
  try {
    const eventMessage = await actorSystem.waitForMessage(OpenAIEventMessage);
    return {
      role: "assistant",
      content: eventMessage.content,
    };
  } catch (error) {
    console.error("Error waiting for OpenAI response:", error);
    return {
      role: "assistant",
      content: "An error occurred while waiting for the response.",
    };
  }
});
