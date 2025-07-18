export const createEmptyUser = (fullName: string, email: string, password: string) => {
    return {
        id: Date.now(),
        firstName: fullName.split(" ")[0] || "",
        lastName: fullName.split(" ")[1] || "",
        fullName,
        email,
        password, // <- Add password here
        role: "customer",
        phone: "",
        avatar: "/assets/users/default.png",
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
