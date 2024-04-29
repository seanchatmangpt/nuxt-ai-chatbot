import { Participant } from "../participant";
import * as path from "path";
import { BaseRepository } from "dpgjs";
import { readBody } from "h3";

const participantsRepository = new BaseRepository<Participant>(
  Participant,
  path.resolve("path_to_your_storage_file.json"), // Update the path as necessary
);

export default defineEventHandler(async (event) => {
  try {
    const body = JSON.parse(await readBody(event));
    const participant = new Participant();
    Object.assign(participant, body);
    participantsRepository.save(participant);
    return { success: true, message: "Registration successful" };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      success: false,
      message: "An error occurred during registration.",
    };
  }
});
