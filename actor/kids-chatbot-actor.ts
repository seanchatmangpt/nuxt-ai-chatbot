import { ActorSystem, BaseActor, BaseMessage } from "dpgjs";
import OpenAI from "openai";

class PoemMessage extends BaseMessage {
  constructor(data: Partial<BaseMessage>) {
    super({ ...data, attributes: { messageType: "Poem" } });
  }
}

class HomeworkReminderMessage extends BaseMessage {
  constructor(data: Partial<BaseMessage>) {
    super({ ...data, attributes: { messageType: "HomeworkReminder" } });
  }
}

class DinosaurFactMessage extends BaseMessage {
  constructor(data: Partial<BaseMessage>) {
    super({ ...data, attributes: { messageType: "DinosaurFact" } });
  }
}

class JokeMessage extends BaseMessage {
  constructor(data: Partial<BaseMessage>) {
    super({ ...data, attributes: { messageType: "Joke" } });
  }
}

class KidsChatbotEventMessage extends BaseMessage {
  constructor(data: Partial<BaseMessage>) {
    super({ ...data, attributes: { messageType: "KidsChatbotEvent" } });
  }
}

class RandomMessage extends BaseMessage {
  constructor(data: Partial<BaseMessage>) {
    super({ ...data, attributes: { messageType: "Random" } });
  }
}

class KidsChatbotActor extends BaseActor {
  private openai: any;
  private poem: string = "";
  private homeworkReminders: string[] = [];

  constructor(actorSystem: ActorSystem, actorId: string) {
    super(actorSystem, actorId);
    // Initialize the OpenAI client here. For example:
    // @ts-ignore
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  // Utility function to interact with OpenAI API
  async getOpenAIResponse(
    content: string,
    role: string = "assistant",
  ): Promise<string> {
    console.log("Calling OpenAI API with content:", content, "and role:", role);
    try {
      const response = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role, content }],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      return response.choices[0].message.content;
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
      return "Oops! I couldn't fetch a response. Let's try something else.";
    }
  }

  async handleRandomMessage(message: BaseMessage): Promise<void> {
    // Dispatch a random message to the child
    const messageTypes = [
      PoemMessage,
      HomeworkReminderMessage,
      PoemMessage,
      DinosaurFactMessage,
      JokeMessage,
    ];

    const randomIndex = Math.floor(Math.random() * messageTypes.length);
    const randomMessageType = messageTypes[randomIndex];

    console.log(
      "Random message type:",
      randomMessageType.name,
      message.content,
    );

    this.publish(new randomMessageType({ content: message.content }));
  }

  async handlePoemMessage(message: PoemMessage): Promise<void> {
    if (!this.poem) {
      this.poem = await this.getOpenAIResponse(
        "The user said: " +
          message.content +
          "\n\nGive the child a related poem",
      );
    }
    this.publish(
      new KidsChatbotEventMessage({
        content: this.poem,
      }),
    );
  }

  async handleHomeworkReminderMessage(
    message: HomeworkReminderMessage,
  ): Promise<void> {
    const reminder = await this.getOpenAIResponse(
      "The user said: " +
        message.content +
        "\n\nRemind the child to do related homework",
    );
    this.homeworkReminders.push(reminder);
    this.publish(
      new KidsChatbotEventMessage({
        content: reminder,
      }),
    );
  }

  // Example usage of the utility function in a message handler
  async handleDinosaurFactMessage(message: DinosaurFactMessage): Promise<void> {
    const fact = await this.getOpenAIResponse(
      "The user said: " +
        message.content +
        "\n\nGive the child a related dinosaur fact",
    );
    this.publish(
      new KidsChatbotEventMessage({
        content: fact,
      }),
    );
  }

  async handleJokeMessage(message: JokeMessage): Promise<void> {
    const joke = await this.getOpenAIResponse(
      "The user said: " + message.content + "\n\nTell the child a related joke",
    );
    this.publish(new KidsChatbotEventMessage({ content: joke }));
  }
}

export {
  KidsChatbotActor,
  PoemMessage,
  HomeworkReminderMessage,
  DinosaurFactMessage,
  JokeMessage,
  KidsChatbotEventMessage,
  RandomMessage,
};
