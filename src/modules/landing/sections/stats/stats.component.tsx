const StatsSection = () => {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
        <h2 className="text-base font-semibold leading-8 text-indigo-400">Our track record</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Trusted by thousands of developers&nbsp;worldwide
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
          dolor cupiditate blanditiis ratione.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <div className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
          <dt className="text-sm leading-6">Developers on the platform</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight">8,000+</dd>
        </div>
        <div className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
          <dt className="text-sm leading-6">Daily requests</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight">900m+</dd>
        </div>
        <div className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
          <dt className="text-sm leading-6">Uptime guarantee</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight">99.9%</dd>
        </div>
        <div className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
          <dt className="text-sm leading-6">Projects deployed</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight">12m</dd>
        </div>
      </dl>
    </div>
  )
}

export default StatsSection
