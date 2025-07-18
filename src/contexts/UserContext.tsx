// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import { User } from "@/types/user";

// interface UserContextType {
//     user: User | null;
//     isLoggedIn: boolean;
//     login: (userData: User) => void;
//     logout: () => void;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UserProvider = ({ children }: { children: React.ReactNode }) => {
//     const [user, setUser] = useState<User | null>(null);
//     const isLoggedIn = !!user;

//     const login = (userData: User) => {
//         setUser(userData);
//         sessionStorage.setItem(`user-${userData.id}`, JSON.stringify(userData));
//         sessionStorage.setItem("currentUserId", String(userData.id)); // track which user is logged in
//     };

//     const logout = () => {
//         const currentId = sessionStorage.getItem("currentUserId");
//         if (currentId) {
//             sessionStorage.removeItem(`user-${currentId}`);
//             sessionStorage.removeItem(`cart-${currentId}`);
//             sessionStorage.removeItem("currentUserId");
//         }
//         setUser(null);
//     };

//     useEffect(() => {
//         const currentId = sessionStorage.getItem("currentUserId");
//         if (currentId) {
//             const storedUser = sessionStorage.getItem(`user-${currentId}`);
//             if (storedUser) {
//                 setUser(JSON.parse(storedUser));
//             }
//         }
//     }, []);

//     return (
//         <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export const useUserContext = () => {
//     const context = useContext(UserContext);
//     if (context === undefined) {
//         throw new Error("useUserContext must be used within a UserProvider");
//     }
//     return context;
// };

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { User } from "@/types/userType";
import { fetchUser } from "@/hooks/useFetchUser";

interface UserContextType {
    user: User | null;
    isLoggedIn: boolean;
    login: () => Promise<void>;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const isLoggedIn = !!user;

    const login = async () => {
        try {
            const userData = await fetchUser(); // reuse your shared function
            setUser(userData);
            sessionStorage.setItem('user', JSON.stringify(userData));
        } catch (error) {
            console.error('Failed to fetch user:', error);
        }
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem('user');
    };

    useEffect(() => {
        const stored = sessionStorage.getItem('user');
        if (stored) {
            setUser(JSON.parse(stored));
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const ctx = useContext(UserContext);
    if (!ctx) throw new Error('useUser must be used inside UserProvider');
    return ctx;
};