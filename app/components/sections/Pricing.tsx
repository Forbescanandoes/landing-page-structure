'use client'

import { siteConfig } from '../../config/site.config'

const Pricing = () => {
  const { headline, subheadline, plans } = siteConfig.pricing
  const [basicPlan, proPlan, enterprisePlan] = plans

  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {headline}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900">{basicPlan.name}</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold">{basicPlan.price}</span>
              <span className="text-gray-600">{basicPlan.period}</span>
            </div>
            <ul className="mt-6 space-y-4">
              {basicPlan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500">✓</span>
                  <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              {basicPlan.ctaText}
            </button>
          </div>

          {/* Pro Plan */}
          <div className="p-6 bg-white rounded-lg shadow-sm border border-blue-500">
            <h3 className="text-xl font-semibold text-gray-900">{proPlan.name}</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold">{proPlan.price}</span>
              <span className="text-gray-600">{proPlan.period}</span>
            </div>
            <ul className="mt-6 space-y-4">
              {proPlan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500">✓</span>
                  <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              {proPlan.ctaText}
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900">{enterprisePlan.name}</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold">{enterprisePlan.price}</span>
              <span className="text-gray-600">{enterprisePlan.period}</span>
            </div>
            <ul className="mt-6 space-y-4">
              {enterprisePlan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500">✓</span>
                  <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full py-2 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              {enterprisePlan.ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing