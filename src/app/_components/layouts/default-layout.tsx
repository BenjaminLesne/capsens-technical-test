import Image from "next/image";
type DefaultLayoutProps = { children: React.ReactNode };

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <header className="border-grey border-b p-6">
        <div className="max-w-8xl mx-auto flex flex-col items-center justify-between gap-5 sm:h-12 sm:flex-row">
          <Image
            src="/icons/capsens.svg"
            width={167}
            height={32.22}
            alt="logo capsens"
          />
          <div className="flex items-center">
            <div className="flex gap-4">
              <Image
                src="/icons/user.svg"
                alt="icône utilisateur"
                width={30}
                height={30.14}
              />

              <div className="flex flex-col justify-center">
                <span className="align-middle font-medium text-black">
                  Jean Dupont
                </span>
                <span className="text-dark-grey leading-sm align-middle text-sm">
                  1 000 €
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
      <footer>my footer</footer>
    </>
  );
}
