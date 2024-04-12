// server/api/chat.post.ts
import { ActorSystem } from "dpgjs";
import { readBody } from "h3";
import {
  KidsChatbotActor,
  RandomMessage,
  KidsChatbotEventMessage,
} from "@/actor/kids-chatbot-actor";

export default defineEventHandler(async (event) => {
  // Assuming there's a global or shared ActorSystem instance you can access
  const actorSystem = new ActorSystem();
  const openAIActor = actorSystem.actorOf(KidsChatbotActor);

  const previousMessages = JSON.parse(await readBody(event));

  // Create a command message with the previous messages serialized as a JSON string
  const commandMessage = new RandomMessage({
    content: JSON.stringify(previousMessages),
  });

  console.log(commandMessage.content);

  // Send the command message to the OpenAIActor
  actorSystem.publish(commandMessage);

  // Here we assume an enhanced ActorSystem with the ability to wait for a specific message type
  // This might require custom implementation within your ActorSystem class
  try {
    const eventMessage = await actorSystem.waitForMessage(
      KidsChatbotEventMessage,
    );
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
