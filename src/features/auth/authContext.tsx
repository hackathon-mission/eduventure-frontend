// src/authContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Teacher, User } from "../../data/interfaces";


interface AuthContextType {
  isLoggedIn: boolean;
  userType: 'teacher' | 'student' | null;
  user: Teacher | User | null;
  loginAsTeacher: (userData: Teacher) => void;
  loginAsStudent: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userType, setUserType] = useState<"teacher" | "student" | null>(null);
    const [user, setUser] = useState<Teacher | User | null>(null);

    const loginAsTeacher = (userData: Teacher) => {
        setIsLoggedIn(true);
        setUserType("teacher");
        setUser(userData);

    };

    const loginAsStudent = (userData: User) => {
        setIsLoggedIn(true);
        setUserType("student");
        setUser(userData);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserType(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                userType,
                user,
                loginAsTeacher,
                loginAsStudent,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
