"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import {
  Briefcase,
  Plus,
  Search,
  Filter,
  ArrowUpRight,
  Trash2,
  Edit,
  Eye,
  RefreshCw,
  Sparkles,
  User,
} from "lucide-react"

export default function AdminPage() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Google Inc.",
      location: "New York, USA",
      applicants: 24,
      status: "Active",
      source: "Direct",
      postedDate: "15 Nov 2023",
    },
    {
      id: 2,
      title: "UX Designer",
      company: "Adobe",
      location: "San Francisco, CA",
      applicants: 18,
      status: "Active",
      source: "LinkedIn",
      postedDate: "12 Nov 2023",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Amazon",
      location: "Seattle, WA",
      applicants: 32,
      status: "Active",
      source: "Indeed",
      postedDate: "10 Nov 2023",
    },
    {
      id: 4,
      title: "Product Manager",
      company: "Microsoft",
      location: "Redmond, WA",
      applicants: 15,
      status: "Closed",
      source: "Direct",
      postedDate: "5 Nov 2023",
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Netflix",
      location: "Los Angeles, CA",
      applicants: 28,
      status: "Active",
      source: "Google Jobs",
      postedDate: "3 Nov 2023",
    },
  ])

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Job Seeker",
      status: "Active",
      registeredDate: "15 Oct 2023",
      applications: 8,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Employer",
      status: "Active",
      registeredDate: "10 Oct 2023",
      applications: 0,
    },
    {
      id: 3,
      name: "Robert Johnson",
      email: "robert.johnson@example.com",
      role: "Job Seeker",
      status: "Inactive",
      registeredDate: "5 Oct 2023",
      applications: 3,
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      role: "Job Seeker",
      status: "Active",
      registeredDate: "1 Oct 2023",
      applications: 12,
    },
    {
      id: 5,
      name: "Michael Wilson",
      email: "michael.wilson@example.com",
      role: "Employer",
      status: "Active",
      registeredDate: "25 Sep 2023",
      applications: 0,
    },
  ])

  const [apiIntegrations, setApiIntegrations] = useState([
    {
      id: 1,
      name: "LinkedIn Jobs API",
      status: "Connected",
      lastSync: "2 hours ago",
      jobsImported: 156,
    },
    {
      id: 2,
      name: "Indeed API",
      status: "Connected",
      lastSync: "1 day ago",
      jobsImported: 243,
    },
    {
      id: 3,
      name: "Google Jobs API",
      status: "Connected",
      lastSync: "3 hours ago",
      jobsImported: 189,
    },
    {
      id: 4,
      name: "Monster API",
      status: "Disconnected",
      lastSync: "Never",
      jobsImported: 0,
    },
  ])

  const deleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id))
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const toggleApiStatus = (id) => {
    setApiIntegrations(
      apiIntegrations.map((api) =>
        api.id === id ? { ...api, status: api.status === "Connected" ? "Disconnected" : "Connected" } : api,
      ),
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600 mb-8">Manage jobs, users, and platform settings</p>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,248</div>
              <div className="flex items-center text-xs text-green-500 mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>12% increase</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5,672</div>
              <div className="flex items-center text-xs text-green-500 mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>8% increase</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3,845</div>
              <div className="flex items-center text-xs text-green-500 mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>15% increase</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">API Integrations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3/4</div>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <span>75% connected</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="api">API Integrations</TabsTrigger>
            <TabsTrigger value="ai">AI Configuration</TabsTrigger>
          </TabsList>

          {/* Jobs Tab */}
          <TabsContent value="jobs">
            <div className="bg-white rounded-lg border p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h2 className="text-xl font-semibold">Manage Jobs</h2>
                <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search jobs..." className="pl-9" />
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                  <Link to="/post-job">
                    <Button className="bg-purple-700 hover:bg-purple-800 w-full md:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Job
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Job
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applicants
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Source
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Posted Date
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {jobs.map((job) => (
                      <tr key={job.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                              <Briefcase className="h-5 w-5 text-gray-500" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{job.title}</div>
                              <div className="text-sm text-gray-500">
                                {job.company} • {job.location}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{job.applicants}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${job.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                          >
                            {job.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.source}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.postedDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <button className="text-gray-400 hover:text-gray-500">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-blue-400 hover:text-blue-500">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-400 hover:text-red-500" onClick={() => deleteJob(job.id)}>
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <div className="text-sm text-gray-500">Showing 1-5 of 1,248 jobs</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users">
            <div className="bg-white rounded-lg border p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h2 className="text-xl font-semibold">Manage Users</h2>
                <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search users..." className="pl-9" />
                  </div>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                  <Button className="bg-purple-700 hover:bg-purple-800 w-full md:w-auto">
                    <Plus className="h-4 w-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Registered Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applications
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                              <User className="h-5 w-5 text-gray-500" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{user.role}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.registeredDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.applications}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <button className="text-gray-400 hover:text-gray-500">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-blue-400 hover:text-blue-500">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-400 hover:text-red-500" onClick={() => deleteUser(user.id)}>
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <div className="text-sm text-gray-500">Showing 1-5 of 5,672 users</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* API Integrations Tab */}
          <TabsContent value="api">
            <div className="bg-white rounded-lg border p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">API Integrations</h2>
                <Button className="bg-purple-700 hover:bg-purple-800">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Integration
                </Button>
              </div>

              <div className="space-y-4">
                {apiIntegrations.map((api) => (
                  <div key={api.id} className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h3 className="font-semibold">{api.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${api.status === "Connected" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                          >
                            {api.status}
                          </span>
                          {api.status === "Connected" && (
                            <span className="text-sm text-gray-500">Last sync: {api.lastSync}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {api.status === "Connected" ? (
                          <>
                            <div className="text-sm text-gray-500">
                              <span className="font-medium">{api.jobsImported}</span> jobs imported
                            </div>
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                              <RefreshCw className="h-3 w-3" />
                              Sync Now
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-500 border-red-200 hover:bg-red-50"
                              onClick={() => toggleApiStatus(api.id)}
                            >
                              Disconnect
                            </Button>
                          </>
                        ) : (
                          <Button
                            size="sm"
                            className="bg-purple-700 hover:bg-purple-800"
                            onClick={() => toggleApiStatus(api.id)}
                          >
                            Connect
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-dashed">
                <h3 className="font-medium mb-2">About API Integrations</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Connect with external job platforms to automatically import job listings into your database. This
                  helps provide a comprehensive job search experience for your users.
                </p>
                <Link to="/admin/api-documentation">
                  <Button variant="link" className="p-0 h-auto text-purple-700">
                    View API Documentation
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>

          {/* AI Configuration Tab */}
          <TabsContent value="ai">
            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl font-semibold">AI Configuration</h2>
                <Sparkles className="h-5 w-5 text-purple-700" />
              </div>

              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">OpenAI API Configuration</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">API Key</label>
                      <Input type="password" value="sk-••••••••••••••••••••••••" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Model</label>
                      <select className="w-full rounded-md border border-gray-300 p-2">
                        <option>gpt-4o</option>
                        <option>gpt-4</option>
                        <option>gpt-3.5-turbo</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-purple-700 hover:bg-purple-800">Save Configuration</Button>
                  </div>
                </div>

                {/* More AI configuration sections would go here */}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

