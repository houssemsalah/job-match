import { env } from "../config/env"

// Base API service for making HTTP requests
export const api = {
  /**
   * Make a GET request
   * @param {string} endpoint - API endpoint
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} Response data
   */
  async get(endpoint, options = {}) {
    return this.request(endpoint, { method: "GET", ...options })
  },

  /**
   * Make a POST request
   * @param {string} endpoint - API endpoint
   * @param {Object} data - Request body data
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} Response data
   */
  async post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    })
  },

  /**
   * Make a PUT request
   * @param {string} endpoint - API endpoint
   * @param {Object} data - Request body data
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} Response data
   */
  async put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    })
  },

  /**
   * Make a DELETE request
   * @param {string} endpoint - API endpoint
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} Response data
   */
  async delete(endpoint, options = {}) {
    return this.request(endpoint, { method: "DELETE", ...options })
  },

  /**
   * Base request method
   * @param {string} endpoint - API endpoint
   * @param {Object} options - Fetch options
   * @returns {Promise<any>} Response data
   */
  async request(endpoint, options = {}) {
    // Get the stored auth token
    const token = localStorage.getItem(env.authTokenName)

    // Prepare headers
    const headers = {
      ...(options.headers || {}),
    }

    // Add auth token if available
    if (token) {
      headers["Authorization"] = `Bearer ${token}`
    }

    // Prepare the full URL
    const url = endpoint.startsWith("http") ? endpoint : `${env.apiUrl}${endpoint}`

    try {
      // Make the request
      const response = await fetch(url, {
        ...options,
        headers,
      })

      // Parse the JSON response
      const data = await response.json()

      // Handle error responses
      if (!response.ok) {
        throw {
          status: response.status,
          message: data.message || "Something went wrong",
          data,
        }
      }

      return data
    } catch (error) {
      // Handle network errors
      if (!error.status) {
        console.error("Network error:", error)
        throw {
          status: 0,
          message: "Network error. Please check your connection.",
        }
      }

      // Re-throw API errors
      throw error
    }
  },
}

