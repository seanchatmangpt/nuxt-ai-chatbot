// tests/register.test.ts
import { beforeEach, describe, expect, it, vi } from "vitest";
import handler from "../server/api/register"; // Adjust the import path according to your project structure

// Mock fs to prevent actual file operations
vi.mock("fs/promises", () => ({
  readFile: vi.fn().mockResolvedValue(JSON.stringify([])), // Simulate an empty registrations file
  writeFile: vi.fn().mockResolvedValue(undefined), // Simulate successful write operation
}));

// Helper function to create mock request and response objects
function createMockReqRes({ method = "POST", body = {} } = {}) {
  let sentData, statusCode, headers;
  const req = {
    method,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  };
  const res = {
    statusCode: 200,
    setHeader: (name, value) => {
      headers = { ...headers, [name]: value };
    },
    write: (data) => {
      sentData = data;
    },
    end: () => {},
    getSentData: () => JSON.parse(sentData),
    getStatus: () => statusCode,
    getHeaders: () => headers,
  };
  return { req, res };
}

describe("Registration API", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should register a user successfully", async () => {
    const { req, res } = createMockReqRes({
      body: {
        firstName: "Test",
        lastName: "User",
        email: "test@example.com",
        // Add other fields as necessary
      },
    });

    await handler(req, res);

    expect(res.getSentData()).toEqual({ message: "Registration successful" });
    expect(vi.mocked(res.end).called).toBeTruthy();
    expect(res.getStatus()).toBe(200);
    // Ensure writeFile was called to simulate saving registration
    expect(vi.mocked(require("fs/promises").writeFile).called).toBeTruthy();
  });

  // You can add more tests here to cover different scenarios
});
