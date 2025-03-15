import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Checkbox } from "../components/ui/checkbox"

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold mb-2">Login to your Account</h1>
            <p className="text-gray-600 mb-8">Welcome back! Select the below login methods.</p>

            <div className="bg-white rounded-lg shadow-md p-8">
              <form className="space-y-6">
                {/* Email/Username */}
                <div>
                  <label htmlFor="email" className="block text-lg font-medium mb-2">
                    Email ID / Username
                  </label>
                  <Input id="email" type="text" placeholder="Enter email id / username" className="w-full" />
                </div>

                {/* Password */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="password" className="block text-lg font-medium">
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <Input id="password" type="password" placeholder="Enter password" className="w-full pr-16" />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-700 font-medium"
                    >
                      Show
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" className="text-purple-700 border-gray-300" />
                    <label
                      htmlFor="remember"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-purple-700 text-sm font-medium">
                    Forgot Password?
                  </Link>
                </div>

                {/* Login Button */}
                <Button className="w-full bg-purple-700 hover:bg-purple-800 py-6 text-lg">Login</Button>

                {/* Divider */}
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="flex-shrink mx-4 text-gray-600">or login with</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Social Login */}
                <div className="flex justify-center space-x-4">
                  <button className="p-2 border rounded-full hover:bg-gray-50">
                    <img src="/placeholder.svg?height=24&width=24" alt="Google" width={24} height={24} />
                  </button>
                  <button className="p-2 border rounded-full hover:bg-gray-50">
                    <img src="/placeholder.svg?height=24&width=24" alt="Facebook" width={24} height={24} />
                  </button>
                  <button className="p-2 border rounded-full hover:bg-gray-50">
                    <img src="/placeholder.svg?height=24&width=24" alt="LinkedIn" width={24} height={24} />
                  </button>
                </div>
              </form>

              {/* Register Link */}
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-purple-700 font-medium">
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden md:block mt-8 w-full max-w-md">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Login illustration"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

