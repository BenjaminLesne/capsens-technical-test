type FormLayoutProps = {
  children: React.ReactNode;
};
export const FormLayout = ({ children }: FormLayoutProps) => {
  return (
    <div className="border-primary-blue flex w-full max-w-[1200px] flex-col gap-[46px] rounded-lg border bg-white p-6 sm:p-12">
      <div className="flex flex-col gap-[17px]">
        <h1 className="text-2xl leading-[3.375rem] font-semibold -tracking-[2px] sm:text-[39px]">
          Je crée mon compte{" "}
          <span className="text-primary-blue text-nowrap">en tant que ...</span>
        </h1>
        <p>
          Choisissez dès maintenant si vous souhaitez investir en tant que
          particulier ou en tant que personne morale.
        </p>
      </div>
      {children}
    </div>
  );
};
