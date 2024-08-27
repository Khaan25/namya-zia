import HeroCircle from './hero-circle'
import ButtonAnimated from './ui/button-animated'
import Description from './ui/description'
import Heading from './ui/heading'

export default function Hero() {
  return (
    <>
      <HeroCircle />

      <section className="text-center py-20 relative z-10 flex flex-col items-center">
        <Heading level={1} className="mb-4 max-w-3xl">
          Where Wall Street
          <br />
          Meets the Blockchain
        </Heading>
        <Description className="mb-8 max-w-2xl">Pioneering the Future of Finance Through Strategic SPACs and Mergers</Description>
        <ButtonAnimated>Explore Our Vision</ButtonAnimated>
      </section>
    </>
  )
}
