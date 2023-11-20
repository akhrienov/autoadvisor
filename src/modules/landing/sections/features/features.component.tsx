import Image from 'next/image'

import FeaturesList from './components/features-list'

const FeaturesSection = () => {
  return (
    <div className="mt-32 sm:mt-56">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Expert Auto Care, Anytime, Anywhere</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Mechanical advice, now just a tap away.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Welcome to AutoAdvisor – where your car troubles find instant solutions. No more queues, no more guesswork.
            Just direct access to professional mechanics who are ready to guide you through any issue, all via your
            mobile device or computer.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src="/images/landing/dark-project-app-screenshot.png"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
            width={2432}
            height={1442}
            priority
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
          </div>
        </div>
      </div>
      <FeaturesList />
    </div>
  )
}

export default FeaturesSection
