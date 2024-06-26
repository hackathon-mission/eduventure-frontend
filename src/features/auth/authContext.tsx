import React, { createContext, useContext, useState, ReactNode } from "react";
import { redirect } from "react-router";
import { useNavigate } from "react-router";

interface Teacher {
    _id?: string;
    username: string;
    realname: string;
    pronouns: string;
    avatar: string | null;
    adventures: string[];
}

interface User {
    _id?: string;
    username: string;
    pronouns: string;
    xp: number;
    avatar: string | null;
    presented_items: string[];
    user_adventures: string[];
}

interface AuthContextType {
    isLoggedIn: boolean;
    userType: "teacher" | "student" | null;
    user: Teacher | User | null;
    loginAsTeacher: (username: string) => void;
    loginAsStudent: (username: string) => void;
    logout: () => void;
}

function saveUser(user: Teacher | User | null) {
    localStorage.setItem("user", JSON.stringify(user));
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userType, setUserType] = useState<"teacher" | "student" | null>(null);
    const [user, setUser] = useState<Teacher | User | null>(null);
    const navigate = useNavigate();

    const serverURL = "http://104.248.193.0:3000";

    const loginAsTeacher = async (username: string) => {
        try {
            const response = await fetch(serverURL + "/teacher/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username }),
            });

            if (response.ok) {
                // Fetch the teacher data using the userId
                const teacher: Teacher = await response.json();
                setIsLoggedIn(true);
                setUserType("teacher");
                setUser(teacher);
                saveUser(teacher);
                navigate("/");
            } else {
                console.error("Teacher not found");
            }
        } catch (error) {
            console.error("Error logging in as teacher", error);
        }
    };

    const loginAsStudent = async (username: string) => {
        try {
            const response = await fetch(serverURL + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username }),
            });

            if (response.ok) {
                const user: User = await response.json();
                setIsLoggedIn(true);
                setUserType("student");
                saveUser(user);
                setUser(user);
                navigate("/");
            } else {
                console.error("User not found");
            }
        } catch (error) {
            console.error("Error logging in as student", error);
        }
    };

    const logout = () => {
        console.log("trying to log out");
        setIsLoggedIn(false);
        setUserType(null);
        saveUser(null);
        setUser(null);
        navigate("/logout");
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
