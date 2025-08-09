import AuthPageLayout from '@/features/Auth/components/AuthPageLayout'
import LoginForm from '@/features/Auth/components/loginForm'
import React from 'react'

const login = () => {
  return (
      <AuthPageLayout >
          <LoginForm />
      </AuthPageLayout>  )
}

export default login