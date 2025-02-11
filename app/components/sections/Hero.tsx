'use client'

const Hero = () => {
  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
            Your Headline Here
          </h1>
          
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            A clear and compelling description of your product or service. Make it count.
          </p>
          
          <div className="mt-8 sm:mt-10">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero