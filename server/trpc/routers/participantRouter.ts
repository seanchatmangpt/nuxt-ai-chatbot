// server/trpc/routers/participantRouter.ts
import { t } from "../index";
import { prisma } from "../../../utils/prismaClient";
import { z } from "zod";

const ParticipantInput = z.object({
  firstName: z.string(),
  lastName: z.string(),
  title: z.string(),
  company: z.string(),
  companyPhone: z.string(),
  cellPhone: z.string(),
  email: z.string().email(),
  webPage: z.string().optional(),
  assessments: z.record(z.number()), // Adapt based on your exact structure
});

export const participantRouter = t.router({
  createParticipant: t.procedure
    .input(ParticipantInput)
    .mutation(async ({ input }) => {
      return await prisma.participant.create({ data: input });
    }),

  getParticipants: t.procedure.query(async () => {
    return await prisma.participant.findMany();
  }),

  updateParticipant: t.procedure
    .input(ParticipantInput.extend({ id: z.number() }))
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      return await prisma.participant.update({
        where: { id },
        data,
      });
    }),

  deleteParticipant: t.procedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      return await prisma.participant.delete({
        where: { id: input.id },
      });
    }),
});
