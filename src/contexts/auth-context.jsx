"use client"

import { createContext, useContext, useState, useEffect } from "react"

// Create the auth context
const AuthContext = createContext(null)

// Auth provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [loading, setLoading] = useState(true)

  // Check for existing auth on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("auth_token")

        if (token) {
          // In a real app, you would validate the token with your API
          // For now, we'll simulate a valid user
          const userData = {
            id: "1",
            name: "John Doe",
            email: "john.doe@example.com",
            role: "user",
          }

          setUser(userData)
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error("Auth check failed:", error)
        logout()
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  // Login function
  const login = async (email, password) => {
    try {
      setLoading(true)

      // In a real app, you would call your API
      // For now, we'll simulate a successful login
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Check credentials (this is just for demo purposes)
      if (email === "demo@example.com" && password === "password") {
        const userData = {
          id: "1",
          name: "John Doe",
          email: "demo@example.com",
          role: "user",
        }

        // Store token
        const fakeToken = "fake-jwt-token-" + Math.random().toString(36).substring(2)
        localStorage.setItem("auth_token", fakeToken)

        setUser(userData)
        setIsAuthenticated(true)
        return { success: true }
      } else {
        throw new Error("Invalid credentials")
      }
    } catch (error) {
      console.error("Login failed:", error)
      return {
        success: false,
        error: error.message || "Login failed. Please try again.",
      }
    } finally {
      setLoading(false)
    }
  }

  // Register function
  const register = async (userData) => {
    try {
      setLoading(true)

      // In a real app, you would call your API
      // For now, we'll simulate a successful registration
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Store token
      const fakeToken = "fake-jwt-token-" + Math.random().toString(36).substring(2)
      localStorage.setItem("auth_token", fakeToken)

      const newUser = {
        id: "1",
        name: userData.name,
        email: userData.email,
        role: "user",
      }

      setUser(newUser)
      setIsAuthenticated(true)
      return { success: true }
    } catch (error) {
      console.error("Registration failed:", error)
      return {
        success: false,
        error: error.message || "Registration failed. Please try again.",
      }
    } finally {
      setLoading(false)
    }
  }

  // Logout function
  const logout = () => {
    localStorage.removeItem("auth_token")
    setUser(null)
    setIsAuthenticated(false)
  }

  // Update user profile
  const updateProfile = async (profileData) => {
    try {
      setLoading(true)

      // In a real app, you would call your API
      // For now, we'll simulate a successful update
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setUser({
        ...user,
        ...profileData,
      })

      return { success: true }
    } catch (error) {
      console.error("Profile update failed:", error)
      return {
        success: false,
        error: error.message || "Profile update failed. Please try again.",
      }
    } finally {
      setLoading(false)
    }
  }

  // Context value
  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
    updateProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}

