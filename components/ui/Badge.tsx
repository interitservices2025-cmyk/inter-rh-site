import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "google";
  size?: "sm" | "md";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  className,
}: BadgeProps) {
  const variants = {
    primary: "bg-primary-50 text-primary-600 border border-primary-200",
    secondary: "bg-navy-50 text-navy-600 border border-navy-200",
    outline:
      "bg-white text-gray-600 border border-gray-200 shadow-sm",
    google:
      "bg-white text-gray-700 border border-gray-200 shadow-sm flex items-center gap-2",
  };

  const sizes = {
    sm: "text-xs px-2.5 py-1",
    md: "text-sm px-4 py-1.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-semibold rounded-full",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
