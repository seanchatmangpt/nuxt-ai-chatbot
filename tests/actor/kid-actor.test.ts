import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { ActorSystem } from "dpgjs";
import {
  KidsChatbotActor,
  PoemMessage,
  HomeworkReminderMessage,
  DinosaurFactMessage,
  JokeMessage,
  KidsChatbotEventMessage,
} from "../../actor/kids-chatbot-actor.js";
import { TestKidActor } from "../../actor/test-kid-actor.js";

describe("KidsChatbotActor and TestKidActor integration", () => {
  let actorSystem: ActorSystem;
  let kidsChatbotActor: KidsChatbotActor;
  let testKidActor: TestKidActor;

  beforeEach(() => {
    vi.useFakeTimers();
    actorSystem = new ActorSystem();
    kidsChatbotActor = actorSystem.actorOf(
      KidsChatbotActor,
      "kidsChatbot",
    ) as KidsChatbotActor;
    testKidActor = actorSystem.actorOf(TestKidActor, "testKid") as TestKidActor;
  });

  afterEach(async () => {
    await actorSystem.shutdown();
    vi.restoreAllMocks();
  });

  it("should handle PoemMessage and publish KidsChatbotEventMessage with the updated poem", async () => {
    const poemLines = [
      "Roses are red,",
      "Violets are blue,",
      "Sugar is sweet,",
      "And so are you!",
    ];
    const expectedPoem = poemLines.join("\n") + "\n";

    const eventMessagePromise = actorSystem.waitForMessage(
      KidsChatbotEventMessage,
    );

    poemLines.forEach((line) => {
      actorSystem.publish(new PoemMessage({ content: line }));
    });

    await vi.runAllTimers();

    const eventMessage = await eventMessagePromise;

    expect(eventMessage).toBeInstanceOf(KidsChatbotEventMessage);
    expect(eventMessage.content).toBe(expectedPoem);
  });

  it("should handle HomeworkReminderMessage and publish KidsChatbotEventMessage with the added reminder", async () => {
    const reminders = [
      "Math homework due tomorrow",
      "Science project due next week",
    ];

    reminders.forEach((reminder) => {
      const eventMessagePromise = actorSystem.waitForMessage(
        KidsChatbotEventMessage,
      );

      actorSystem.publish(new HomeworkReminderMessage({ content: reminder }));

      vi.runAllTimers();

      return expect(eventMessagePromise).resolves.toEqual(
        expect.objectContaining({
          content: `Homework reminder added: ${reminder}`,
        }),
      );
    });
  });

  it("should handle DinosaurFactMessage and publish KidsChatbotEventMessage with a dinosaur fact", async () => {
    const eventMessagePromise = actorSystem.waitForMessage(
      KidsChatbotEventMessage,
    );

    actorSystem.publish(new DinosaurFactMessage({}));

    await vi.runAllTimers();

    const eventMessage = await eventMessagePromise;

    expect(eventMessage).toBeInstanceOf(KidsChatbotEventMessage);
    expect(eventMessage.content).toBeTruthy();
  });

  it("should handle JokeMessage and publish KidsChatbotEventMessage with a kid-friendly joke", async () => {
    const eventMessagePromise = actorSystem.waitForMessage(
      KidsChatbotEventMessage,
    );

    actorSystem.publish(new JokeMessage({}));

    await vi.runAllTimers();

    const eventMessage = await eventMessagePromise;

    expect(eventMessage).toBeInstanceOf(KidsChatbotEventMessage);
    expect(eventMessage.content).toBeTruthy();
  });
});
