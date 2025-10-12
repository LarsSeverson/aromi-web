import z from 'zod'

export const ValidEmail = z
  .string()
  .nonempty('Email is required')
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address')

export const ValidPassword = z
  .string()
  .nonempty('Password is required')
  .min(8, 'Password must be at least 8 characters long')

export const LogInSchema = z
  .object({
    email: ValidEmail,
    password: ValidPassword
  })

export const SignUpSchema = z
  .object({
    email: ValidEmail,
    password: ValidPassword
  })
