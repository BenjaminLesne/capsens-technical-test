import { formOptions } from "@tanstack/react-form/nextjs";

export const accountCreationFormOptions = formOptions({
  defaultValues: {
    userType: "",
  },
});
