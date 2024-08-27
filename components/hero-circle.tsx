export default function HeroCircle() {
  return (
    <>
      {/* Top spotlight */}
      <div className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 z-20 blur-xl w-[584px] h-[103px] mix-blend-plus-lighter bg-secondary/45 rounded-full shadow-[0_0_200px_rgba(255,255,255,0.1)]" />

      {/* Gray circle with box shadow */}
      <div className="absolute top-0 z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-[1071px] bg-[#040404] rounded-full shadow-[0_0_200px_rgba(255,255,255,0.1)]"></div>
    </>
  )
}
