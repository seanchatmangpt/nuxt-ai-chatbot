// models/participant.ts

import { BaseModel } from "dpgjs";

class Participant extends BaseModel {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
  companyPhone: string;
  cellPhone: string;
  email: string;
  webPage?: string;
  assessments: any; // JSON type can be replaced with a more specific interface
  createdAt: Date;

  constructor() {
    super();
    // Initialize with defaults
    this.firstName = "";
    this.lastName = "";
    this.title = "";
    this.company = "";
    this.companyPhone = "";
    this.cellPhone = "";
    this.email = "";
    this.webPage = "";
    this.assessments = {};
    this.createdAt = new Date();
  }
}

export { Participant };
