import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <header className="p-4 relative z-10">
        <nav className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gray-300">Our Focus</Link>
            <Link href="#" className="hover:text-gray-300">Why Us</Link>
            <Link href="#" className="hover:text-gray-300">Our Approach</Link>
            <Link href="#" className="hover:text-gray-300">Our Team</Link>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded">Join the Revolution</button>
        </nav>
      </header>

      <main className="container mx-auto px-4 relative">
        {/* Gray circle with box shadow */}
        <div className="absolute top-[5%] z-[1] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#040404] rounded-full shadow-[0_0_200px_rgba(255,255,255,0.1)]"></div>

        <section className="text-center py-20 relative z-10">
          <h1 className="text-[64px] font-[500] leading-[79.36px] tracking-[-0.03em] text-center mb-4 font-geist">Where Wall Street<br />Meets the Blockchain</h1>
          <p className="mb-8">Pioneering the Future of Finance Through Strategic SPACs and Mergers</p>
          <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
            Explore Our Vision
          </button>
        </section>

        <section className="py-20 relative z-10">
          <h2 className="text-3xl font-bold mb-2">NEXT LAYER ADVANTAGE</h2>
          <h3 className="text-4xl font-bold mb-8">Uniquely Positioned for Success</h3>
          <p className="mb-12">Leveraging Our Expertise in Both Traditional and Crypto Markets</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#040404] p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Expert execution of SPACs and Mergers</h3>
              <div className="space-y-2">
                <div className="border border-gray-700 p-2 rounded">SPAC</div>
                <div className="border border-gray-700 p-2 rounded">MERGERS</div>
                <div className="border border-gray-700 p-2 rounded">BLOCKCHAIN</div>
              </div>
            </div>
            <div className="bg-[#040404] p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Tech-forward approach to financial operations</h3>
              <div className="bg-black p-4 rounded-lg">
                <pre className="text-green-400 text-sm">
                  {`function example() {
  // Placeholder for code
  return result;
}`}
                </pre>
              </div>
            </div>
            <div className="bg-[#040404] p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Deep understanding of both traditional and crypto markets</h3>
              <div className="flex justify-center items-center h-32">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black text-2xl font-bold">$</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
