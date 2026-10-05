import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockUsers, defaultUser } from '../data/mockUsers';

const AuthContext = createContext(null);

const STORAGE_KEY = 'resqconnect_auth_user';

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error reading auth state from localStorage', e);
    }
    return defaultUser; // Start with Citizen for smooth demo
  });

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {
      console.error('Error writing auth state to localStorage', e);
    }
  }, [currentUser]);

  // Demo login function: sets user based on selected role or finds in mockUsers
  const login = (role = 'citizen', email = '', password = '') => {
    const matched = mockUsers.find(
      u => u.role.toLowerCase() === role.toLowerCase() || (email && u.email.toLowerCase() === email.toLowerCase())
    );

    const userToSet = matched || {
      id: `user-${Date.now()}`,
      name: email ? email.split('@')[0] : 'Demo User',
      email: email || 'demo@resqconnect.org',
      role: role.toLowerCase(),
      location: 'Panvel, Maharashtra',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80',
    };

    setCurrentUser(userToSet);
    return userToSet;
  };

  const register = ({ name, email, phone, role = 'citizen', location }) => {
    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      phone,
      role: role.toLowerCase(),
      location: location || 'Navi Mumbai, Maharashtra',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80',
      joinedDate: 'October 2026',
      ...(role.toLowerCase() === 'ngo' ? { verified: false, pendingVerification: true } : {})
    };

    setCurrentUser(newUser);
    return newUser;
  };

  const logout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
  };

  const switchRole = (newRole) => {
    const found = mockUsers.find(u => u.role.toLowerCase() === newRole.toLowerCase());
    if (found) {
      setCurrentUser(found);
    } else {
      setCurrentUser(prev => ({
        ...(prev || defaultUser),
        role: newRole.toLowerCase()
      }));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: !!currentUser,
        role: currentUser?.role || 'citizen',
        login,
        register,
        logout,
        switchRole
      }}
    >
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
