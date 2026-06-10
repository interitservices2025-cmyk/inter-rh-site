import { cn } from "@/lib/utils";

interface StepCardProps {
  number: string | number;
  title: string;
  description: string;
  className?: string;
}

export default function StepCard({
  number,
  title,
  description,
  className,
}: StepCardProps) {
  return (
    <div
      className={cn(
        "card-bordered relative p-6 hover:-translate-y-1 transition-all duration-300 group",
        className
      )}
    >
      {/* Step number — top right */}
      <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 font-bold text-sm group-hover:bg-primary-100 transition-colors">
        {String(number).padStart(2, "0")}
      </span>

      <div className="pr-10">
        <h3 className="font-bold text-navy-500 text-base mb-2 group-hover:text-primary-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
