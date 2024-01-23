'use client'
import AuthForm, { AuthFormTypes } from '@/components/forms/auth-form/auth-form.component'

const AuthPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center px-6">
      <AuthForm defaultForm={AuthFormTypes.SIGNING} allowToggle={true} />
    </div>
  )
}

export default AuthPage
