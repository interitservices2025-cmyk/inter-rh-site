export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-md transition-opacity duration-300">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner ring */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-navy-100/50" />
          <div className="absolute inset-0 rounded-full border-4 border-primary-500 border-t-transparent animate-spin" />
        </div>
        {/* Text */}
        <p className="text-navy-500 font-bold text-sm tracking-widest uppercase animate-pulse">
          INTER-RH
        </p>
      </div>
    </div>
  );
}
