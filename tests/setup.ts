// test/setup.ts
import { beforeEach, vi } from "vitest";
import { prisma } from "../utils/prismaClient"; // Adjust the import path as necessary
import { server } from "./mocks/handlers";

vi.mock("../utils/prismaClient", () => ({
  prisma: {
    participant: {
      create: vi.fn(),
      findMany: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
  },
}));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

beforeEach(() => {
  vi.clearAllMocks();
});
