type NaturalPersonIconProps = { className?: string };
export const NaturalPersonIcon = ({ className }: NaturalPersonIconProps) => {
  return (
    <svg
      width="30"
      height="36"
      viewBox="0 0 30 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.8744 20.0796C20.2375 20.0796 24.5852 15.7703 24.5852 10.4546C24.5852 5.13885 20.2375 0.82959 14.8744 0.82959C9.51126 0.82959 5.16358 5.13885 5.16358 10.4546C5.16358 15.7703 9.51126 20.0796 14.8744 20.0796ZM0.415928 31.4513C2.37258 26.9122 6.69817 21.8296 14.8652 21.8296C22.9837 21.8296 27.4405 26.8521 29.5341 31.3706C30.5691 33.6041 28.7121 35.8296 26.2505 35.8296H3.73133C1.31185 35.8296 -0.541817 33.6732 0.415928 31.4513Z"
        className={className}
      />
    </svg>
  );
};
