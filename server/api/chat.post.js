// Import the OpenAI library
import OpenAI from "openai";

// This function handles the event and makes a request to the OpenAI API using the official client
export default defineEventHandler(async (event) => {
  // Initialize the OpenAI client with your API key
  const openai = new OpenAI({
    apiKey: "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",
  });

  // // Read the previous messages from the request body
  const previousMessages = JSON.parse(await readBody(event));

  // Convert the previous messages to the format expected by the OpenAI API
  // previousMessages does not have a map function
  for (const previousMessage of previousMessages) {
    console.log("Previous Message:", previousMessage);
  }

  // try {
  //   // Make a request to the OpenAI Chat API
  //   const response = await openai.chat.completions.create({
  //     model: "gpt-3.5-turbo",
  //     messages: previousMessages,
  //     temperature: 0.9,
  //     max_tokens: 512,
  //     top_p: 1.0,
  //     frequency_penalty: 0,
  //     presence_penalty: 0.6,
  //     stop: [" User:", " AI:"],
  //   });
  //
  //   // Extract the response text from the first choice
  //   const result = response.choices[0].message.content;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: previousMessages,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    const result = response.choices[0].message.content;

    console.log("Result:", result);

    // Return the result
    return {
      role: "assistant",
      content: result,
    };
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error calling OpenAI API:", error);
    return {
      role: "assistant",
      content: "An error occurred while processing your request.",
    };
  }
});
