type Props = {
  children: React.ReactNode;
  className?: string;
  width?: "default" | "narrow";
};

export function Container({ children, className = "", width = "default" }: Props) {
  const max = width === "narrow" ? "max-w-3xl" : "max-w-site";
  return <div className={`mx-auto w-full ${max} px-5 sm:px-8 ${className}`}>{children}</div>;
}
