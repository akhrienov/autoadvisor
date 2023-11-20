import FeaturesListItem, { IFeaturesListItem } from '../features-list-item'
import featuresData from '../../data/features.data.json'

const FeaturesList = () => {
  return (
    <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
      <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
        {featuresData.map((feature: IFeaturesListItem, idx: number) => (
          <FeaturesListItem key={idx} icon={feature.icon} title={feature.title} description={feature.description} />
        ))}
      </dl>
    </div>
  )
}

export default FeaturesList
