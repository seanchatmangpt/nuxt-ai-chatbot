import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { ActorSystem } from "dpgjs";
import {
  OpenAIActor,
  OpenAICommandMessage,
  OpenAIEventMessage,
} from "~/actor/openai-actor";
import OpenAI from "openai";

describe("OpenAIActor integration with ActorSystem", () => {
  let actorSystem: ActorSystem;
  let openAIActor: OpenAIActor;

  beforeEach(() => {
    vi.useFakeTimers();

    actorSystem = new ActorSystem();
    openAIActor = actorSystem.actorOf(OpenAIActor) as OpenAIActor;
  });

  it("should process OpenAICommandMessage and publish OpenAIEventMessage", async () => {
    // Mock the publish method to intercept the OpenAIEventMessage
    const publishSpy = vi.spyOn(actorSystem, "publish");

    // Create a command message and send it to the OpenAIActor
    const commandMessage = new OpenAICommandMessage({
      content: JSON.stringify(["Hello, world!"]), // Assuming the message content is expected to be a stringified array
    });
    actorSystem.publish(commandMessage);

    // Wait for the async operation
    await vi.runAllTimers(); // Ensure you have called vi.useFakeTimers() if your actor does async work
  });

  // Test example with increased timeout and async handling
  it("should process OpenAICommandMessage and publish OpenAIEventMessage", async () => {
    const eventMessagePromise = actorSystem.waitForMessage(OpenAIEventMessage);

    actorSystem.publish(
      new OpenAICommandMessage({
        content: JSON.stringify(["Hello, world!"]),
        attributes: { messageType: "OpenAICommand" },
      }),
    );

    await vi.runAllTimers();

    const eventMessage = await eventMessagePromise;

    expect(eventMessage).toBeInstanceOf(OpenAIEventMessage);
    expect(eventMessage.content).toBeTruthy();
  }); // Increased timeout

  afterEach(async () => {
    await actorSystem.shutdown();
    vi.restoreAllMocks();
  });
});
