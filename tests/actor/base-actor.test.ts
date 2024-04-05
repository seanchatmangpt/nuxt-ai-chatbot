// Mock classes and interfaces
import { ActorSystem, BaseActor, BaseMessage } from "dpgjs";

class TestMessage extends BaseMessage {
  constructor(content: string = "Test message") {
    super({ messageType: "TestMessage", content });
  }
}

class MockActorSystem extends ActorSystem {
  actorOf(
    actorClass: { new (...args: any[]): BaseActor },
    ...rest: undefined[]
  ): BaseActor {
    return super.actorOf(actorClass, ...rest);
  }

  publishMessage = vi.fn();
  sendMessage = vi.fn();
}

class TestActor extends BaseActor {
  handleTestMessage(message: TestMessage) {
    console.log(`Actor ${this.actorId} received message: ${message.content}`);
  }
}

describe("TestActor", () => {
  let mockActorSystem: ActorSystem;
  let testActor: TestActor;

  beforeEach(() => {
    mockActorSystem = new MockActorSystem();
    testActor = mockActorSystem.actorOf(TestActor) as TestActor;
  });

  it("correctly handles a message when a matching handler exists", async () => {
    // Extend TestActor to add a custom message handler for testing
    const testMessage = new TestMessage();

    const spy = vi.spyOn(testActor, "handleTestMessage");
    await testActor.handleMessage(testMessage);

    expect(spy).toHaveBeenCalled();
  });

  it("does nothing if a handler for the message does not exist", async () => {
    const spy = vi.spyOn(console, "log");
    const testMessage = new TestMessage();
    const testActor = mockActorSystem.actorOf(TestActor);

    await testActor.handleMessage(testMessage);

    expect(spy).toHaveBeenCalledWith(
      expect.stringContaining("Received message: TestMessage"),
    );
  });

  it("publishes a message using the actor system", () => {
    const testMessage = new TestMessage();

    testActor.publish(testMessage);

    expect(mockActorSystem.publishMessage).toHaveBeenCalledWith(testMessage);
  });

  it("sends a message directly to another actor in the system", () => {
    const targetActorId = 2;
    const testMessage = new TestMessage();

    testActor.sendMessage(targetActorId, testMessage);

    expect(mockActorSystem.sendMessage).toHaveBeenCalledWith(
      targetActorId,
      testMessage,
    );
  });

  it("logs termination", () => {
    const spy = vi.spyOn(console, "log");
    testActor.terminate();

    expect(spy).toHaveBeenCalledWith(
      expect.stringContaining(`Terminating actor ${testActor.actorId}`),
    );
  });

  // Here you can add more tests to cover any utility methods or edge cases.

  afterEach(() => {
    vi.restoreAllMocks();
  });
});
