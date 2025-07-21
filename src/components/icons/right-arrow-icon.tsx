import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};
export const RightArrowIcon = ({ className }: Props) => {
  return (
    <svg
      width="21"
      height="14"
      viewBox="0 0 21 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 7H19.5M19.5 7L13.5 1M19.5 7L13.5 13"
        strokeWidth="1.5"
        className="stroke-white"
      />
    </svg>
  );
};
