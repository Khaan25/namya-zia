import { cn } from '@/lib/utils'

export default function Card({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('bg-[#0E1014] p-6 rounded-2xl transition-colors h-[400px] relative isolate overflow-hidden group', className)}>
      <div className="absolute inset-0">
        <div className="rounded-2xl border opacity-0 group-hover:opacity-100 transition-all duration-300 absolute inset-0 border-white/70 [mask-image:linear-gradient(200deg,black_10%,transparent_20%,transparent_70%)]" />
        <div className="rounded-2xl absolute inset-0 shadow-[0_0_10px_rgba(51,51,51,0.3)_inset]" />

        {/* Border Effect */}
        <span className="backdrop absolute inset-[1px] rounded-2xl bg-[#0E1014] transition-colors duration-200 z-[1]" />
        <span className="spark z-[-2] mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-2xl [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
      </div>

      <div className="absolute z-[-1] w-[268.37px] h-[243px] top-[255px] left-[-140px] bg-white/10 blur-3xl" />
      <div className="absolute z-[-1] w-[268.37px] h-[243px] top-[-74px] right-[-125px] bg-white/10 blur-3xl" />

      <div className="relative h-full w-full z-10">
        <h3 className="font-geist text-[16px] font-medium leading-[19.84px] text-left mb-4">{title}</h3>

        {children}
      </div>
    </div>
  )
}
