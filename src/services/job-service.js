const API_URL = "https://api.example.com"

export async function getJobs(filters = {}) {
  const queryParams = new URLSearchParams()

  // Add filters to query params
  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      queryParams.append(key, value)
    }
  })

  // In a real app, you would use:
  // const response = await fetch(`${API_URL}/jobs?${queryParams.toString()}`);

  // For demo purposes, we'll return mock data
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "Google Inc.",
      location: "New York, USA",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      postedDate: "2 weeks ago",
      logo: "/placeholder.svg?height=64&width=64",
    },
    {
      id: "2",
      title: "UX Designer",
      company: "Facebook",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$110,000 - $130,000",
      postedDate: "3 days ago",
      logo: "/placeholder.svg?height=64&width=64",
    },
    {
      id: "3",
      title: "Backend Developer",
      company: "Amazon",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$130,000 - $160,000",
      postedDate: "1 week ago",
      logo: "/placeholder.svg?height=64&width=64",
    },
  ]
}

export async function getJobById(id) {
  // In a real app, you would use:
  // const response = await fetch(`${API_URL}/jobs/${id}`);

  // For demo purposes, we'll return mock data
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    id,
    title: "Senior Frontend Developer",
    company: "Google Inc.",
    location: "New York, USA (Hybrid)",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    postedDate: "2 weeks ago",
    description: "We are looking for a Senior Frontend Developer to join our team...",
    requirements: [
      "At least 5 years of experience with React",
      "Strong understanding of JavaScript and ES6+",
      "Experience with state management libraries",
      "Knowledge of responsive design principles",
    ],
    benefits: ["Competitive salary", "Health insurance", "Flexible working hours", "Remote work options"],
    logo: "/placeholder.svg?height=64&width=64",
  }
}

export async function applyForJob(jobId, applicationData) {
  // In a real app, you would use:
  // const response = await fetch(`${API_URL}/jobs/${jobI  {
  // In a real app, you would use:
  // const response = await fetch(`${API_URL}/jobs/${jobId}/apply`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(applicationData),
  // });

  // For demo purposes, we'll return mock data
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return {
    success: true,
    message: "Application submitted successfully",
    applicationId: "app_" + Math.random().toString(36).substr(2, 9),
  }
}

export async function saveJob(jobId) {
  // In a real app, you would use:
  // const response = await fetch(`${API_URL}/jobs/${jobId}/save`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // For demo purposes, we'll return mock data
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    success: true,
    message: "Job saved successfully",
  }
}

export async function unsaveJob(jobId) {
  // In a real app, you would use:
  // const response = await fetch(`${API_URL}/jobs/${jobId}/save`, {
  //   method: 'DELETE',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });

  // For demo purposes, we'll return mock data
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    success: true,
    message: "Job removed from saved jobs",
  }
}

export async function getRecommendedJobs() {
  // In a real app, you would use:
  // const response = await fetch(`${API_URL}/jobs/recommended`);

  // For demo purposes, we'll return mock data
  await new Promise((resolve) => setTimeout(resolve, 1200))

  return [
    {
      id: "4",
      title: "React Developer",
      company: "Microsoft",
      location: "Remote",
      type: "Full-time",
      salary: "$100,000 - $130,000",
      postedDate: "1 day ago",
      matchScore: 95,
      logo: "/placeholder.svg?height=64&width=64",
    },
    {
      id: "5",
      title: "Frontend Engineer",
      company: "Netflix",
      location: "Los Angeles, CA",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      postedDate: "3 days ago",
      matchScore: 92,
      logo: "/placeholder.svg?height=64&width=64",
    },
    {
      id: "6",
      title: "UI/UX Developer",
      company: "Airbnb",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      postedDate: "1 week ago",
      matchScore: 88,
      logo: "/placeholder.svg?height=64&width=64",
    },
  ]
}

