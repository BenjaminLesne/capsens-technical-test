import { AccountCreationForm } from "@/features/account-creation/components/forms/account-creation";
import { FormLayout } from "@/features/account-creation/components/layouts/form-layout";

export default function HomePage() {
  return (
    <main className="flex justify-center pt-12">
      <FormLayout>
        <AccountCreationForm />
      </FormLayout>
    </main>
  );
}
