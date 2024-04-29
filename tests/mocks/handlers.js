// This setup is theoretical and showcases the concept. Actual implementation details may vary.
import { rest } from "msw";
import { setupServer } from "msw/node";
import { factory, primaryKey } from "@mswjs/data";

// Define a mock database model for participants
const db = factory({
  participant: {
    id: primaryKey(Number),
    firstName: String,
    lastName: String,
    title: String,
    company: String,
    companyPhone: String,
    cellPhone: String,
    email: String,
    webPage: String,
    assessments: Object,
  },
});

// Create handlers to respond to tRPC operations
export const handlers = [
  // Mock the createParticipant procedure
  rest.post("/trpc/participant.createParticipant", (req, res, ctx) => {
    const participant = db.participant.create(req.body);
    return res(ctx.json(participant));
  }),

  // Add handlers for getParticipants, updateParticipant, and deleteParticipant
];

// Set up the MSW server
export const server = setupServer(...handlers);
