// server/api/blog.post.js

import { defineEventHandler, readBody, sendError, createError } from "h3";
import { exec } from "child_process";

export default defineEventHandler(async (event) => {
  if (event.req.method !== "POST") {
    return sendError(
      event,
      createError({ statusCode: 405, statusMessage: "Method Not Allowed" }),
    );
  }

  const body = await readBody(event);
  const subject = body.subject || "Gettysburg Address";

  const command = `dspygen module text_summarizer call "${subject}"`;

  try {
    const result = await new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else if (stderr) {
          reject(new Error(stderr));
        } else {
          resolve(stdout);
        }
      });
    });

    return { summary: result };
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: error.message }),
    );
  }
});
