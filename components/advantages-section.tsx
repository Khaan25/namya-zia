'use client'

import Image from 'next/image'
import Card from './card'
import CardItem from './card/card-item'
import { SVGLine } from './svg-line'
import Heading from './ui/heading'
import Description from './ui/description'

export default function AdvantageSection() {
  return (
    <section className="py-20 mt-32 relative z-10">
      <Heading level={3} className="uppercase">
        Next Layer Advantage
      </Heading>
      <Heading level={4} className="mb-3">
        Uniquely Positioned for Success
      </Heading>
      <Description className="mb-12 text-white/65">Leveraging Our Expertise in Both Traditional and Crypto Markets</Description>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Card title="Expert execution of SPACs and Mergers">
          <div className="flex z-20 flex-col gap-4 mt-[4.5rem] space-y-2">
            {['SPAC', 'MERGERS', 'BLOCKCHAIN'].map(item => (
              <CardItem key={item} text={item} />
            ))}
          </div>
        </Card>

        <Card title="Tech-forward approach to financial operations" className="group">
          <div className="absolute top-[180px] left-[10px]">
            <Image src="/logo.png" alt="logo" width={32} height={32} />
          </div>
          <div className="bg-[#D9D9D914] group-hover:bg-[#D9D9D924] transition-all duration-150 absolute top-[158px] left-[55px] border border-dashed border-[#FFFFFF54] w-[296px] h-[72px] rounded-[5px]" />

          <Image quality={100} className="w-[320px] -translate-y-6 h-auto ml-16" src="/code.png" alt="Tech-forward approach to financial operations" width={1000} height={1000} />
        </Card>

        <Card title="Deep understanding of both traditional and crypto markets" className="group">
          <div
            className="absolute flex items-center z-20 justify-center size-[130px] top-[115px] left-1/2 -translate-x-1/2 rounded-full bg-[#181D21] border border-white/30"
            style={{
              boxShadow: `
                  rgb(128, 128, 128) 0px 0px 20px,
                  rgb(0, 0, 0) 0px 0px 62px,
                  rgb(0, 0, 0) 0px 0px 58px,
                  rgb(0, 0, 0) 0px 1px 52px
                `,
            }}>
            <div className="absolute inset-0">
              <div className="rounded-full border absolute inset-0 border-[#B0B9C0] [mask-image:linear-gradient(101.15% 101.15% at 68.46% 3.46%, #B0B9C0 0%, #53575A 100%)]" />
              <div className="rounded-full absolute inset-0 shadow-[0_0_10px_rgba(51,51,51,0.3)_inset]" />
            </div>

            <Image className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/icon-grey.png" alt="logo" width={87} height={87} />
            <Image
              className="z-10 mt-4"
              src="/icon-white.png"
              alt="logo"
              width={64}
              height={64}
              style={{
                filter: `drop-shadow(0px 1.51px 1.51px #0000001A) drop-shadow(0px 3.03px 3.03px #00000017) drop-shadow(0px 7.56px 4.54px #0000000D) drop-shadow(0px 13.62px 4.54px #00000003) drop-shadow(0px 21.18px 6.05px #00000000)`,
              }}
            />
          </div>

          {/* Bottom Lines */}
          <SVGLine className="absolute bottom-[-100px] left-1/2 -translate-x-1/2" />

          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 h-px w-full bg-gray-700 rounded-full" />

          {/* Left Dot */}
          <div className="absolute top-1/2 left-12 -translate-y-1/2 size-[10px] bg-white rounded-full" />

          {/* Left White Line */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-[100px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />

          {/* Right Dot */}
          <div className="absolute top-1/2 left-auto right-12 transform -translate-y-1/2 size-[10px] bg-white rounded-full" />

          {/* Right White Line */}
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-[100px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        </Card>
      </div>
    </section>
  )
}
