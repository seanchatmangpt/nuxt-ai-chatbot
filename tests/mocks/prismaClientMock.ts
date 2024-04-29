// tests/mocks/prismaClientMock.ts
import { vi } from "vitest";

export const prismaMock = {
  participant: {
    create: vi.fn(),
    findMany: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  },
};
