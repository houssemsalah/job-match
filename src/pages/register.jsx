"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Checkbox } from "../components/ui/checkbox"
import { useAuth } from "../contexts/auth-context"

export default function RegisterPage() {
  const { register } = useAuth()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
    rememberPassword: false,
    notifications: true,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await register(formData)
      // Redirect will be handled by the auth context
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Registration form</h1>
        <p className="text-gray-600 mb-8">Register to apply for jobs of your choice all over the world</p>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && <div className="bg-red-50 text-red-700 p-3 rounded-md">{error}</div>}

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-base font-medium mb-2">
                Full name<span className="text-red-500">*</span>
              </label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full"
                required
              />
            </div>

            {/* Email ID */}
            <div>
              <label htmlFor="email" className="block text-base font-medium mb-2">
                Email ID<span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email id"
                className="w-full"
                required
              />
              <p className="text-sm text-gray-500 mt-1">Job notifications will be sent to this email id</p>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-base font-medium mb-2">
                Password<span className="text-red-500">*</span>
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="(Minimum 6 characters)"
                className="w-full"
                required
                minLength={6}
              />
              <div className="flex items-center mt-2">
                <Checkbox
                  id="rememberPassword"
                  name="rememberPassword"
                  checked={formData.rememberPassword}
                  onCheckedChange={(checked) => setFormData({ ...formData, rememberPassword: checked })}
                  className="text-purple-700 border-gray-300"
                />
                <label htmlFor="rememberPassword" className="ml-2 text-sm text-gray-600">
                  Remember your password
                </label>
              </div>
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobile" className="block text-base font-medium mb-2">
                Mobile number<span className="text-red-500">*</span>
              </label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="w-full"
                required
              />
              <p className="text-sm text-gray-500 mt-1">Recruiters will contact you on this number</p>
            </div>

            {/* Notifications Consent */}
            <div className="flex items-start space-x-3 pt-2">
              <Checkbox
                id="notifications"
                name="notifications"
                checked={formData.notifications}
                onCheckedChange={(checked) => setFormData({ ...formData, notifications: checked })}
                className="text-purple-700 border-gray-300 mt-1"
              />
              <div>
                <label htmlFor="notifications" className="text-sm text-gray-600">
                  Send me important updates & promotions via SMS, email, and
                </label>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#25D366"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <path d="M17.6 6.8A7.8 7.8 0 0 0 12 4.5a8 8 0 0 0-8 8 7.9 7.9 0 0 0 1.2 4.2L4 22l5.5-1.4a8 8 0 0 0 12.5-6.4 8 8 0 0 0-4.4-7.4" />
                    <path d="M14 12.3c.7-.4 1.3 0 1.6.7.2.5.2 1.2 0 1.7-.3.7-1.3 1.3-2.3 1.3-1 .1-2-.5-2.7-1.2a8.7 8.7 0 0 1-2.1-4.2c0-.8.3-1.6 1-2 .3-.3.7-.3 1-.3h.7c.3 0 .6 0 .8.5.3.7.7 1.7.7 1.8l.2.4c0 .4-.6.8-.9 1-.3.3-.3.4-.1.7a5 5 0 0 0 1 1.2c.5.4 1 .8 1.7 1l.4.2c.2 0 .3 0 .5-.2" />
                  </svg>
                  <span className="text-sm text-gray-600">WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="pt-2">
              <p className="text-sm text-gray-600">
                By clicking Register, you agree to the
                <Link to="/terms" className="text-purple-700 mx-1">
                  Terms and Conditions
                </Link>
                &
                <Link to="/privacy" className="text-purple-700 ml-1">
                  Privacy Policy
                </Link>
                of AlwaysApply.com
              </p>
            </div>

            {/* Register Button */}
            <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 py-6 text-lg" disabled={loading}>
              {loading ? "Registering..." : "Register now"}
            </Button>

            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-600">or signup with</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social Signup */}
            <div className="flex justify-center space-x-4">
              <button type="button" className="p-2 border rounded-full hover:bg-gray-50">
                <img src="/placeholder.svg?height=24&width=24" alt="Google" width={24} height={24} />
              </button>
              <button type="button" className="p-2 border rounded-full hover:bg-gray-50">
                <img src="/placeholder.svg?height=24&width=24" alt="Facebook" width={24} height={24} />
              </button>
              <button type="button" className="p-2 border rounded-full hover:bg-gray-50">
                <img src="/placeholder.svg?height=24&width=24" alt="LinkedIn" width={24} height={24} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

