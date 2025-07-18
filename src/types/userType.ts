export interface Address {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    apartment?: string;
    floor?: string;
    landmark?: string;
}

export interface BillingDetails {
    fullName: string;
    company?: string;
    vatNumber?: string;
    address: Address;
}

export interface PaymentMethod {
    type: 'credit_card' | 'paypal';
    isDefault: boolean;
    details: {
        cardNumber?: string;
        expiry?: string;
        cardHolder?: string;
        billingAddress?: Address;
        email?: string;
    };
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    password:string;
    role: 'customer' | 'admin';
    phone: string;
    avatar: string;
    createdAt: string;
    address: Address;
    billingDetails: BillingDetails;
    payment: {
        methods: PaymentMethod[];
        lastUsed: string;
    };
}
