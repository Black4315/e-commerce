'use client'

import { useRef } from 'react'
import AuthForm from './AuthForm'
import TextInput from '@/components/ui/TextInput'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { getSignupFormSchema, userSchema } from '../utils/authSchema'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { pages } from '@/constants/pages'
import IconGoogleIcon from '@/assets/icons/IconGoogle'
import { createEmptyUser } from '../utils/emptyUser'
import z from 'zod'
import { phoneRegex } from '../utils/regex'
import ProgLink from '@/utils/ProgLink'

export type SignupFormValues = z.infer<ReturnType<typeof getSignupFormSchema>>;

const SignupForm = () => {
  const t = useTranslations('auth')
  const formRef = useRef(null)
  const signupFormSchema = getSignupFormSchema(t);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupFormSchema)
  })

  async function onSubmit(data: SignupFormValues) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const formValues = signupFormSchema.parse(data);

      let email = "";
      let phone = "";

      if (phoneRegex.test(formValues.emailOrPhone)) {
        phone = formValues.emailOrPhone;
      } else {
        email = formValues.emailOrPhone;
      }

      const newUser = createEmptyUser(formValues.name, formValues.password, email, phone);
      userSchema.parse(newUser); // ensure the final object matches expected structure
    } catch (error) {
      console.error(error)
      setError('root', {
        message: 'This email is already taken.'
      })
    }
  }

  return (
    <AuthForm
      ref={formRef}
      heading={t("createAccFormHead")}
      subheading={t("createAccFormSubHead")}
      onSubmit={handleSubmit(onSubmit)}
      control={control}
    >
      {/* TODO: adjust the services and use axois and send to server */}
      {/* TODO: Email is invalid or already taken */}
      <TextInput
        control={control}
        name="name"
        autoComplete="name"
        placeholder={t("name")}
      />
      <TextInput
        control={control}
        name="emailOrPhone"
        autoComplete="username"
        placeholder={t("emailOrPhone")}
      />
      <TextInput
        control={control}
        name="password"
        type="password"
        autoComplete="new-password"
        placeholder={t("password")}
      />
      <TextInput
        control={control}
        name="confirmPassword"
        placeholder={t("confirmPassword")}
        type="password"
        autoComplete="new-password"
      />

      <div className="space-y-4">
        <button className="auth-btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <LoadingSpinner className="w-4 -my-4" />
          ) : (
            t("createAcc")
          )}
        </button>

        <button className="auth-btn bg-white border border-[#999999] text-black space-x-2 sm:space-x-4">
          <IconGoogleIcon className="max-sm:w-5 max-sm:h-5" />
          <span>{t("signWithGoogle")}</span>
        </button>

        <div className="text-text-2 flex-center gap-4 !mt-8">
          <span className="reg-text font-poppins">{t("haveAcc")}</span>
          <ProgLink
            href={pages.login}
            className="med-text border-b hover:border-black transition-all hover:text-black"
          >
            {t("login")}
          </ProgLink>
        </div>
      </div>
    </AuthForm>
  );
}

export default SignupForm