export default function CardItem({ text }: { text: string }) {
  return (
    <div className="relative">
      <div className="relative overflow-hidden bg-[#0D0D0D] hover:bg-[#0D0D0D]/50 transition-all duration-150 px-4 w-full text-center py-6 rounded-lg ">
        {/* Top Center Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />

        {/* Bottom Left Gradient */}
        <div className="absolute w-[109.34px] h-[99px] top-[48px] left-[-6px] bg-white/10 blur-3xl" />

        <div className="absolute inset-0">
          <div className="rounded-lg border border-gray-700/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
          <div className="rounded-lg border absolute inset-0 border-gray-600/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
          <div className="rounded-lg absolute inset-0 shadow-[0_0_10px_rgba(128,128,128,0.3)_inset]"></div>
        </div>

        <span className="text-white w-full">{text}</span>
      </div>

      {/* dot */}
      <div className="absolute z-10 -bottom-1.5 left-1/2 -translate-x-1/2 size-[12px] bg-[#1A1A1D] rounded-full border-[0.5px] border-[#46484B]" />
      {/* line */}
      <div className="absolute -bottom-[25px] left-1/2 -translate-x-1/2 w-[1px] h-[24px] bg-gradient-to-b from-[#46484B] to-white" />
    </div>
  )
}
