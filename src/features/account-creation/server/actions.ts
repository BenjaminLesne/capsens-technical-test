"use server";

import {
  ServerValidateError,
  createServerValidate,
} from "@tanstack/react-form/nextjs";
import { accountCreationFormOptions } from "../lib/form-options";
import { UserTypeSchema } from "../lib/schemas";

const serverValidate = createServerValidate({
  ...accountCreationFormOptions,
  onServerValidate: ({ value }) => {
    return UserTypeSchema.parse(value.userType);
  },
});

export async function createUserAction(prev: unknown, formData: FormData) {
  try {
    const validatedData = await serverValidate(formData);
    console.log("validatedData", validatedData);
  } catch (e) {
    if (e instanceof ServerValidateError) {
      return e.formState;
    }
    throw e;
  }
}
