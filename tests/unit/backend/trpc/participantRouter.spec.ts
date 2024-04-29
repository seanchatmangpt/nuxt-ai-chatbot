import { describe, it, expect, vi } from "vitest";

const testContext = createTestContext({
  router: appRouter,
  createContext: () => ({}), // Adapt based on your actual createContext
});

describe("participantRouter", () => {
  it("creates a new participant successfully", async () => {
    const participantData = {
      firstName: "John",
      lastName: "Doe",
      title: "Engineer",
      company: "Tech Corp",
      companyPhone: "123456789",
      cellPhone: "987654321",
      email: "john.doe@techcorp.com",
      webPage: "https://john.techcorp.com",
      assessments: JSON.stringify({ 1: 5, 2: 4 }), // Example assessment results
    };

    // Mocking Prisma create method
    vi.mocked(prisma.participant.create).mockResolvedValueOnce(
      participantData as any,
    );

    const result = await testContext.client.mutation(
      "participant.createParticipant",
      participantData,
    );

    expect(result).toEqual(participantData);
    expect(prisma.participant.create).toHaveBeenCalledWith({
      data: participantData,
    });
  });

  // Similar tests for getParticipants, updateParticipant, and deleteParticipant
});
