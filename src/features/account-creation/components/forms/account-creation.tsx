"use client";

import { Fragment, useActionState } from "react";
import { initialFormState } from "@tanstack/react-form/nextjs";
import { mergeForm, useForm, useTransform } from "@tanstack/react-form";
import { accountCreationFormOptions } from "../../lib/form-options";
import { createUserAction } from "../../server/actions";
import { UserTypeSchema } from "../../lib/schemas";
import { Button } from "@/components/ui/button/button";
import { RightArrowIcon } from "@/components/icons/right-arrow-icon";
import { RadioGroup } from "@/components/ui/radio-group/radio-group";
import { NaturalPersonIcon } from "../icons/natural-person";
import { LegalEntityIcon } from "../icons/legal-entity";
import type z from "zod";
import { Separator } from "@/components/ui/separator";
import { RadioItemLegalEntity } from "@/components/ui/radio-group/radio-item-legal-entity";

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
      description: "Vous créez ce compte pour vous-même en tant qu’individu",
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
      title: "Micro Entreprise",
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
                    <Fragment key={item.value}>
                      <div className="hidden sm:flex">
                        <RadioItemLegalEntity
                          Icon={NaturalPersonIcon}
                          description={item.description}
                          value={item.value}
                          title={item.title}
                          state={
                            form.getFieldValue("userType") === item.value
                              ? "checked"
                              : "unchecked"
                          }
                        />
                      </div>
                      <div className="flex sm:hidden">
                        <RadioItemLegalEntity
                          Icon={NaturalPersonIcon}
                          description={item.description}
                          value={item.value}
                          title={item.title}
                          variant="vertical"
                          state={
                            form.getFieldValue("userType") === item.value
                              ? "checked"
                              : "unchecked"
                          }
                        />
                      </div>
                    </Fragment>
                  ))}
                </div>
                <div className="relative flex h-6 items-center">
                  <Separator />
                  <span className="absolute top-0 left-1/2 h-fit -translate-x-1/2 transform bg-white px-8">
                    ou
                  </span>
                </div>
                <div className="flex flex-row flex-wrap gap-5">
                  {data.enterprise.map((item) => (
                    <div key={item.value} className="flex flex-1">
                      <RadioItemLegalEntity
                        Icon={LegalEntityIcon}
                        description={item.description}
                        value={item.value}
                        title={item.title}
                        variant="vertical"
                        state={
                          form.getFieldValue("userType") === item.value
                            ? "checked"
                            : "unchecked"
                        }
                      />
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
