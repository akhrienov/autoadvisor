import { FC } from 'react'

import HeroIcon, { HeroIconTypes } from '@/components/heroicon'

export interface IFeaturesListItem {
  icon: string
  title: string
  description: string
}

const FeaturesListItem: FC<IFeaturesListItem> = ({ icon, title, description }) => {
  return (
    <div className="relative pl-9">
      <dt className="inline font-semibold text-white">
        <HeroIcon icon={icon} type={HeroIconTypes.SOLID} className="absolute left-1 top-1 h-5 w-5 text-primary" />
        {`${title} `}
      </dt>
      <dd className="inline">{description}</dd>
    </div>
  )
}

export default FeaturesListItem
