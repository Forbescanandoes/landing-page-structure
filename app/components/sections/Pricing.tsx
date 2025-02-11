'use client'

const Pricing = () => {
  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold">$9</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <span className="text-green-500">✓</span>
                <span className="ml-2">Feature 1</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500">✓</span>
                <span className="ml-2">Feature 2</span>
              </li>
            </ul>
            <button className="mt-8 w-full py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-blue-500">
            <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <span className="text-green-500">✓</span>
                <span className="ml-2">Everything in Basic</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500">✓</span>
                <span className="ml-2">Pro Feature 1</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500">✓</span>
                <span className="ml-2">Pro Feature 2</span>
              </li>
            </ul>
            <button className="mt-8 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <span className="text-green-500">✓</span>
                <span className="ml-2">Everything in Pro</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500">✓</span>
                <span className="ml-2">Enterprise Feature 1</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500">✓</span>
                <span className="ml-2">Enterprise Feature 2</span>
              </li>
            </ul>
            <button className="mt-8 w-full py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
