import { ActorSystem, BaseActor, BaseMessage } from "dpgjs";
import OpenAI from "openai";

class OpenAICommandMessage extends BaseMessage {
  constructor(data: Partial<BaseMessage>) {
    super({ ...data, messageType: "OpenAICommand" });
  }
}

class OpenAIEventMessage extends BaseMessage {
  constructor(data: Partial<BaseMessage>) {
    super({ ...data, messageType: "OpenAIEvent" });
  }
}

class OpenAIActor extends BaseActor {
  private openai: any; // Assuming the OpenAI SDK or equivalent client is initialized here.

  constructor(actorId: number, actorSystem: ActorSystem) {
    super(actorId, actorSystem);
    this.openai = new OpenAI();
  }

  async handleOpenAICommandMessage(
    message: OpenAICommandMessage,
  ): Promise<void> {
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message.content }],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      const resultContent = response.choices[0].message.content;

      // Publishing the event with the response
      this.publish(
        new OpenAIEventMessage({
          actorId: this.actorId,
          content: resultContent,
        }),
      );
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      // Handle error accordingly
    }
  }
}

export { OpenAIActor, OpenAICommandMessage, OpenAIEventMessage };
