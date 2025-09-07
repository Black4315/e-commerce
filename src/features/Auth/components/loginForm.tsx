'use client'

import { useRef } from 'react'
import AuthForm from './AuthForm'
import TextInput from '@/components/ui/TextInput'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { getLoginFormSchema } from '../utils/authSchema'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import Link from 'next/link'
import { pages } from '@/constants/pages'
import z from 'zod'
import IconGoogleIcon from '@/assets/icons/IconGoogle'
import ProgLink from '@/utils/ProgLink'

export type LoginFormValues = z.infer<ReturnType<typeof getLoginFormSchema>>;

const LoginForm = () => {
  const t = useTranslations('auth')
  const formRef = useRef(null)
  const LoginFormSchema = getLoginFormSchema(t);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema)
  })

  async function onSubmit(data: LoginFormValues) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

    } catch (error) {

      setError('root', {
        message: 'This email is already taken.'
      })
    }
  }

  return (
    <AuthForm
      ref={formRef}
      heading={t('loginFormHead')}
      subheading={t('createAccFormSubHead')}
      onSubmit={handleSubmit(onSubmit)}
      control={control}
    >
      {/* TODO: adjust the services and use axois and send to server */}
      <TextInput
        control={control}
        name='emailOrPhone'
        autoComplete="username"
        placeholder={t('emailOrPhone')}
      />
      <TextInput
        control={control}
        name='password'
        type='password'
        autoComplete='new-password'
        placeholder={t('password')}
      />

      <div className='space-y-4'>

        {/* login btn */}
        <div className='grid grid-cols-2 items-center justify-between'>
          <button className='auth-btn' type='submit' disabled={isSubmitting}>
            {isSubmitting ? <LoadingSpinner className='w-4 -my-4' /> : t('login')}
          </button>
          <Link href={pages.forgetPass} className='reg-text font-poppins text-secondary-3 text-end'>{t('forgetPass')}</Link>
        </div>

        {/* login with goole */}
        <button className='auth-btn bg-white border border-[#999999] text-black space-x-2 sm:space-x-4'>
          <IconGoogleIcon className='max-sm:w-5 max-sm:h-5' />
          <span>{t('loginWithGoogle')}</span>
        </button>

        {/* create acc */}
        <div className='text-text-2 flex-center gap-2 !mt-8 flex-wrap'>
          <span className='reg-text font-poppins'>{t('newTo')}</span>
          <ProgLink href={pages.signup} className='med-text border-b hover:border-black transition-all hover:text-black'>

            {t('createAccFormHead')}
          </ProgLink>
        </div>

      </div>

    </AuthForm>
  )
}

export default LoginForm