'use client'

const Features = () => {
  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Features
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to succeed
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Feature 1</h3>
            <p className="mt-2 text-gray-600">
              Description of your amazing feature goes here.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Feature 2</h3>
            <p className="mt-2 text-gray-600">
              Description of your amazing feature goes here.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Feature 3</h3>
            <p className="mt-2 text-gray-600">
              Description of your amazing feature goes here.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
