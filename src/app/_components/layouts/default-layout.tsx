import { WaveIcon } from "../icons/wave-icon";
import { BigDiamondIcon } from "../icons/big-diamond-icon";
import { UserIcon } from "../icons/user-icon";
import { CapsensIcon } from "../icons/capsens-icon";
import { SmallDiamondIcon } from "../icons/small-diamond-icon";
type DefaultLayoutProps = { children: React.ReactNode };

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <header className="border-grey border-b bg-white p-6">
        <div className="max-w-8xl mx-auto flex flex-col items-center justify-between gap-5 sm:h-12 sm:flex-row">
          <div className="flex items-center">
            <CapsensIcon className="h-[34px] w-[167px]" />
          </div>
          <div className="flex items-center">
            <div className="flex gap-4">
              <div className="flex items-center">
                <UserIcon className="size-[31px]" />
              </div>
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
      <div className="mt-[67px]"></div>
      <footer className="relative mt-auto flex flex-col">
        <div className="max-w-8xl relative mx-auto w-full">
          <BigDiamondIcon className="absolute -top-[32px] left-[9px] z-20 w-1/4 max-w-[138px]" />
          <SmallDiamondIcon className="absolute -top-[59px] right-3.5 z-0 w-1/4 max-w-[90px]" />
        </div>
        <WaveIcon className="z-10 w-full" />
      </footer>
    </>
  );
}
