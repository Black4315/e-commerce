export const createEmptyUser = (fullName: string, password: string, email: string = "", phone: string = "",) => {
    return {
        id: Date.now(),
        firstName: fullName.split(" ")[0] || "",
        lastName: fullName.split(" ")[1] || "",
        fullName,
        email,
        password, // <- Add password here
        role: "customer",
        phone: phone,
        avatar: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/assets/users/default.png`,
        createdAt: new Date().toISOString(),
        address: {
            street: "",
            city: "",
            postalCode: "",
            country: ""
        },
        billingDetails: {
            fullName: fullName,
            company: "",
            vatNumber: "",
            address: {
                street: "",
                city: "",
                postalCode: "",
                country: "",
                apartment: "",
                floor: "",
                landmark: ""
            }
        },
        payment: {
            methods: [],
            lastUsed: ""
        }
    };
};
