'use client'

const SocialProof = () => {
  return (
    <section className="w-full px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Trusted By Text */}
        <p className="text-center text-gray-600 text-sm sm:text-base mb-8">
          Trusted by leading companies worldwide
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {/* Replace these divs with actual company logos */}
          <div className="h-12 w-24 bg-gray-200 rounded"></div>
          <div className="h-12 w-24 bg-gray-200 rounded"></div>
          <div className="h-12 w-24 bg-gray-200 rounded"></div>
          <div className="h-12 w-24 bg-gray-200 rounded"></div>
          <div className="h-12 w-24 bg-gray-200 rounded hidden sm:block"></div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">1M+</p>
            <p className="mt-2 text-sm sm:text-base text-gray-600">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">50K+</p>
            <p className="mt-2 text-sm sm:text-base text-gray-600">Downloads</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">99%</p>
            <p className="mt-2 text-sm sm:text-base text-gray-600">Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-gray-900">24/7</p>
            <p className="mt-2 text-sm sm:text-base text-gray-600">Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof