import React, { createContext, useContext, useState, ReactNode } from 'react';

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
  userType: 'teacher' | 'student' | null;
  user: Teacher | User | null;
  loginAsTeacher: (username: string) => void;
  loginAsStudent: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userType, setUserType] = useState<'teacher' | 'student' | null>(null);
  const [user, setUser] = useState<Teacher | User | null>(null);

    const serverURL = "http://104.248.193.0:3000"

  const loginAsTeacher = async (username: string) => {
    try {
      const response = await fetch(serverURL + '/teacher/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });
      
      if (response.ok) {
        const userId = await response.text();
        // Fetch the teacher data using the userId
        const teacherResponse = await fetch(serverURL +`/teachers/${userId}`);
        const teacher: Teacher = await teacherResponse.json();
        setIsLoggedIn(true);
        setUserType('teacher');
        setUser(teacher);
      } else {
        console.error('Teacher not found');
      }
    } catch (error) {
      console.error('Error logging in as teacher', error);
    }
  };

  const loginAsStudent = async (username: string) => {
    try {
      const response = await fetch(serverURL +'/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });
      
      if (response.ok) {
        const userId = await response.text();
        // Fetch the user data using the userId
        const userResponse = await fetch(`/users/${userId}`);
        const user: User = await userResponse.json();
        setIsLoggedIn(true);
        setUserType('student');
        setUser(user);
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error logging in as student', error);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userType, user, loginAsTeacher, loginAsStudent, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

