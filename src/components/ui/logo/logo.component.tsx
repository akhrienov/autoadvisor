import Image from 'next/image'

import Badge from '@/components/ui/badge'

import { ThemeColors } from '@/types'

const Logo = () => (
  <div className="flex items-center gap-3">
    <Image src="/images/logo.png" alt="AutoAdvisor" width={40} height={40} />
    <Badge themeColor={ThemeColors.ACCENT}>alpha</Badge>
  </div>
)

export default Logo
