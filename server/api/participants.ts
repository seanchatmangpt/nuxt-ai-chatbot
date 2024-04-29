// server/api/participants.ts

import * as path from "path";
import { BaseRepository } from "dpgjs";
import { defineEventHandler } from "h3";
import { Participant } from "../participant";

const participantsRepository = new BaseRepository<Participant>(
  Participant,
  path.resolve("path_to_your_storage_file.json"),
);

export default defineEventHandler(async (event) => {
  try {
    return participantsRepository.listAll();
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      success: false,
      message: "An error occurred while fetching participants.",
    };
  }
});
