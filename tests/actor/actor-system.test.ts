// Assuming BaseMessage and IActor are defined and exported from their respective modules.

// TestMessage.ts
import { ActorSystem, BaseActor, BaseMessage } from "dpgjs";

class TestMessage extends BaseMessage {
  constructor(content: string) {
    super({ attributes: { messageType: "TestMessage" }, content });
  }
}

// TestActor.ts
class TestActor extends BaseActor {
  handleTestMessage(message: TestMessage) {
    console.log(`Actor ${this.actorId} received message: ${message.content}`);
  }
}

describe("ActorSystem", () => {
  let actorSystem: ActorSystem;

  beforeEach(() => {
    actorSystem = new ActorSystem();
  });

  it("throws error when sending a message to an unregistered actor", async () => {
    const message = new TestMessage("Hello, world!");
    expect(() => actorSystem.send("999", message)).toThrowError(
      "Actor with ID 999 does not exist",
    );
  });

  it("publishes a message to all registered actor", async () => {
    const actor1 = actorSystem.actorOf(TestActor);
    const actor2 = actorSystem.actorOf(TestActor);

    const spy1 = vi.spyOn(actor1, "handleMessage");
    const spy2 = vi.spyOn(actor2, "handleMessage");

    const message = new TestMessage("Broadcast message");
    actorSystem.publish(message);

    await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for async message handling

    expect(spy1).toHaveBeenCalledWith(message);
    expect(spy2).toHaveBeenCalledWith(message);
  });

  it("ensures waitForMessage resolves with correct message type", async () => {
    const message = new TestMessage("Hello, future!");
    setTimeout(() => actorSystem.publish(message), 0); // Simulate async message publish

    const receivedMessage = await actorSystem.waitForMessage(TestMessage);
    expect(receivedMessage).toBeInstanceOf(TestMessage);
    expect(receivedMessage.content).toBe(message.content);
  });

  // Test cleanup and other necessary actions.
  afterEach(async () => {
    await actorSystem.shutdown();
  });
});
