import { ArrowLongRightIcon } from '@heroicons/react/24/outline'

import Button, { ButtonColorScheme } from '@/components/ui/button'
import { FacebookIcon, GoogleIcon } from '@/assets/media/icons'

const AuthForm = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Email" className="input input-bordered mb-2 w-full" />
        <Button colorScheme={ButtonColorScheme.SLATE_200} block>
          <span className="font-bold text-button-dark">Sign up - it&apos;s free</span>
          <ArrowLongRightIcon className="ml-2 h-5 w-5 text-button-dark" />
        </Button>
      </div>
      <div className="divider text-sm">Or sign up with</div>
      <div className="flex flex-col">
        <Button colorScheme={ButtonColorScheme.SLATE_800} block>
          <GoogleIcon className="h-5 w-5" />
          <span className="font-bold text-button-light">Google</span>
        </Button>
        <Button colorScheme={ButtonColorScheme.SLATE_800} block>
          <FacebookIcon className="h-5 w-5" />
          <span className="font-bold text-button-light">Facebook</span>
        </Button>
      </div>
    </>
  )
}

export default AuthForm