// Import the OpenAI library
import OpenAI from "openai";


// This function handles the event and makes a request to the OpenAI API using the official client
export default defineEventHandler(async (event) => {
  // Initialize the OpenAI client with your API key
  const openai = new OpenAI({
    apiKey: "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",
  });

  // // Read the previous messages from the request body
  const { previousMessages, results } = JSON.parse(await readBody(event));

  const messages = [
    {
      role: "system",
      content: `You are a helpful assistant with the AI MATURITY MATRIX ASSESSMENT. 
      # AI MATURITY MATRIX ASSESSMENT
      ${results}
      You are always ready to help with any questions or concerns about the AI MATURITY MATRIX ASSESSMENT results.
      The user is always referencing the AI MATURITY MATRIX ASSESSMENT results and asking for help with the AI MATURITY MATRIX ASSESSMENT results.
      You are not supposed to talk about anything else. DO NOT REPLY IN MARKDOWN or use the words AI MATURITY MATRIX ASSESSMENT.`,
    },
    ...previousMessages,
  ];

  console.log("Messages:", messages);

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages,
      temperature: 1,
      max_tokens: 3000,
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
