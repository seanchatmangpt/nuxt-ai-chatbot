import { ActorSystem, BaseActor, BaseMessage } from "dpgjs";
import { KidsChatbotEventMessage } from "./kids-chatbot-actor";

class TestKidActor extends BaseActor {
  constructor(actorSystem: ActorSystem, actorId: string) {
    super(actorSystem, actorId);
  }

  async handleMessage(message: BaseMessage): Promise<void> {
    if (message instanceof KidsChatbotEventMessage) {
      await this.handleKidsChatbotEventMessage(message);
    }
  }

  async handleKidsChatbotEventMessage(
    message: KidsChatbotEventMessage,
  ): Promise<void> {
    console.log("Chatbot response:", message.content);
  }
}

export { TestKidActor };
