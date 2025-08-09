import z from "zod";
import { phoneRegex } from "./regex";

export const getAuthSchema = (t: (key: string) => string) => ({
    name: z
        .string()
        .trim()
        .min(2, t("errors.nameMin"))
        .max(50, t("errors.nameMax")),

    emailOrPhone: z
        .string()
        .trim()
        .min(5, t("errors.emailOrPhoneMin"))
        .max(100, t("errors.emailOrPhoneMax"))
        .refine(
            (val) => z.string().email().safeParse(val).success || phoneRegex.test(val),
            t("errors.emailOrPhoneInvalid")
        ),

    password: z
        .string()
        .min(8, t("errors.passwordMin"))
        .max(128, t("errors.passwordMax"))
        .regex(/[a-z]/, t("errors.passwordLower"))
        .regex(/\d/, t("errors.passwordNumber")),

    confirmPassword: z.string()
});

export const getSignupFormSchema = (t: (key: string) => string) => (
    z.object(getAuthSchema(t)).refine(
        (data) => data.password === data.confirmPassword,
        {
            message: t("errors.confirmNotMatch"),
            path: ["confirmPassword"]
        }
    )
)

export const getLoginFormSchema = (t: (key: string) => string) => (
    z.object({
        emailOrPhone:getAuthSchema(t).emailOrPhone,
        password: getAuthSchema(t).password
    })
)


export const userSchema = z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    fullName: z.string(),
    email: z.string().optional(),
    password: z.string(),
    role: z.enum(["customer", "admin", "vendor"]),
    phone: z.string().optional(),
    avatar: z.string().refine(
        val => /^https?:\/\//.test(val) || val.startsWith('/'),
        "Invalid avatar path or URL"
    ),
    createdAt: z.string(),
    address: z.object({
        street: z.string(),
        city: z.string(),
        postalCode: z.string(),
        country: z.string(),
    }),
    billingDetails: z.object({
        fullName: z.string(),
        company: z.string(),
        vatNumber: z.string(),
        address: z.object({
            street: z.string(),
            city: z.string(),
            postalCode: z.string(),
            country: z.string(),
            apartment: z.string(),
            floor: z.string(),
            landmark: z.string(),
        }),
    }),
    payment: z.object({
        methods: z.array(z.string()),
        lastUsed: z.string(),
    }),
});

export type User = z.infer<typeof userSchema>;
