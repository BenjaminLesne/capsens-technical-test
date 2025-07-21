import z from "zod";

export const UserTypeSchema = z.enum([
  "Natural person",
  "Association",
  "Enterprise",
  "Micro-enterprise",
]);
