"use client";

import { useActionState } from "react";
import { initialFormState } from "@tanstack/react-form/nextjs";
import { mergeForm, useForm, useTransform } from "@tanstack/react-form";
import { accountCreationFormOptions } from "../../lib/form-options";
import { createUserAction } from "../../server/actions";
import { UserTypeSchema } from "../../lib/schemas";
import { Button } from "@/components/ui/button/button";
import { RightArrowIcon } from "@/components/icons/right-arrow-icon";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group/radio-group";
import { NaturalPersonIcon } from "../icons/natural-person";
import { Label } from "@/components/ui/label";
import { LegalEntityIcon } from "../icons/legal-entity";
import type z from "zod";
import { Separator } from "@/components/ui/separator";

type Item = {
  value: z.infer<typeof UserTypeSchema>;
  title: string;
  description: string;
};
type Data = Record<"naturalPerson" | "enterprise", Item[]>;

const data: Data = {
  naturalPerson: [
    {
      value: "Natural person",
      title: "Personne physique",
      description: "Personne physique",
    } as const,
  ],
  enterprise: [
    {
      value: "Association",
      title: "Association",
      description: "Personne morale",
    } as const,
    {
      value: "Enterprise",
      title: "Entreprise",
      description: "Personne morale",
    } as const,
    {
      value: "Micro-enterprise",
      title: "Micro entreprise",
      description: "Personne morale",
    } as const,
  ],
};

export const AccountCreationForm = () => {
  const [state, action] = useActionState(createUserAction, initialFormState);

  const form = useForm({
    ...accountCreationFormOptions,
    transform: useTransform((baseForm) => mergeForm(baseForm, state!), [state]),
  });

  return (
    <form
      action={action}
      onSubmit={() => form.handleSubmit()}
      className="flex flex-col gap-8"
    >
      <form.Field
        name="userType"
        validators={{
          onChange: ({ value }) => {
            try {
              UserTypeSchema.parse(value);
              return undefined;
            } catch (error) {
              console.error("Validation error:", error);
              return "Validation client: Type d’utilisateur invalide";
            }
          },
        }}
      >
        {(field) => {
          return (
            <div>
              <RadioGroup
                name="userType"
                value={field.state.value}
                onValueChange={field.handleChange}
                className="flex flex-col gap-8"
              >
                <div>
                  {data.naturalPerson.map((item) => (
                    <div key={item.value} className="flex">
                      <RadioGroupItem
                        value={item.value}
                        id={item.value}
                        className="flex-1 gap-12"
                      >
                        <div className="flex gap-6">
                          <NaturalPersonIcon className="fill-dark-grey" />
                          <Label
                            htmlFor={item.value}
                            className="flex cursor-pointer flex-col items-start"
                          >
                            <span className="font-semibold text-black">
                              {item.title}
                            </span>
                            <span className="text-black">
                              {item.description}
                            </span>
                          </Label>
                        </div>
                      </RadioGroupItem>
                    </div>
                  ))}
                </div>
                <div className="relative flex h-6 items-center">
                  <Separator />
                  <span className="absolute top-0 left-1/2 h-fit -translate-x-1/2 transform bg-white px-8">
                    ou
                  </span>
                </div>
                <div className="flex flex-row gap-5">
                  {data.enterprise.map((item) => (
                    <div key={item.value} className="flex flex-1">
                      <RadioGroupItem
                        value={item.value}
                        id={item.value}
                        className="flex-1 flex-col gap-6"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <LegalEntityIcon className="fill-dark-grey" />
                          <Label
                            htmlFor={item.value}
                            className="flex cursor-pointer flex-col items-center"
                          >
                            <span className="font-semibold text-black">
                              {item.title}
                            </span>
                            <span className="text-black">
                              {item.description}
                            </span>
                          </Label>
                        </div>
                      </RadioGroupItem>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          );
        }}
      </form.Field>
      <form.Subscribe selector={(formState) => [formState.isDirty]}>
        {([isDirty]) => {
          return (
            <Button type="button" disabled={!isDirty}>
              <span>Suivant</span>
              <span>
                <RightArrowIcon />
              </span>
            </Button>
          );
        }}
      </form.Subscribe>
    </form>
  );
};
