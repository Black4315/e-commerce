import { z } from "zod";

// Address schema
export const addressSchema = z.object({
    street: z.string(),
    city: z.string(),
    postalCode: z.string(),
    country: z.string(),
    apartment: z.string().optional(),
    floor: z.string().optional(),
    landmark: z.string().optional()
});

// BillingDetails schema
export const billingDetailsSchema = z.object({
    fullName: z.string(),
    company: z.string().optional(),
    vatNumber: z.string().optional(),
    address: addressSchema
});

// PaymentMethod schema
export const paymentMethodSchema = z.object({
    type: z.enum(["credit_card", "paypal"]),
    isDefault: z.boolean(),
    details: z.object({
        cardNumber: z.string().optional(),
        expiry: z.string().optional(),
        cardHolder: z.string().optional(),
        billingAddress: addressSchema.optional(),
        email: z.string().email().optional()
    })
});

// User schema
export const userSchema = z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    fullName: z.string(),
    email: z.string().email(),
    password: z.string(),
    role: z.enum(["customer", "admin"]),
    phone: z.string(),
    avatar: z.string(), //.url(),
    createdAt: z.string(),
    address: addressSchema,
    billingDetails: billingDetailsSchema,
    payment: z.object({
        methods: z.array(paymentMethodSchema),
        lastUsed: z.string()
    })
});


// types
export type Address = z.infer<typeof addressSchema>;
export type BillingDetails = z.infer<typeof billingDetailsSchema>;
export type PaymentMethod = z.infer<typeof paymentMethodSchema>;
export type User = z.infer<typeof userSchema>;
