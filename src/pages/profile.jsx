"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Badge } from "../components/ui/badge"
import { PlusCircle, X, MapPin, Briefcase } from "lucide-react"

export default function ProfilePage() {
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js", "MongoDB"])
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill])
      setNewSkill("")
    }
  }

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">My Profile</h1>
        <p className="text-gray-600 mb-8">Complete your profile to get personalized job recommendations</p>

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          {/* Personal Information Tab */}
          <TabsContent value="personal" className="space-y-6">
            <div className="bg-white rounded-lg border p-6">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mb-4">
                    <img
                      src="/placeholder.svg?height=128&width=128"
                      alt="Profile"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    Change Photo
                  </Button>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium mb-1">
                        First Name
                      </label>
                      <Input id="first-name" defaultValue="John" />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium mb-1">
                        Last Name
                      </label>
                      <Input id="last-name" defaultValue="Doe" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium mb-1">
                        Location
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <Input id="location" className="pl-9" defaultValue="New York, USA" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="job-title" className="block text-sm font-medium mb-1">
                        Current Job Title
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <Input id="job-title" className="pl-9" defaultValue="Senior Developer" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium mb-1">
                      Bio
                    </label>
                    <Textarea
                      id="bio"
                      rows={4}
                      defaultValue="Experienced software developer with a passion for creating user-friendly applications. Specialized in web development and cloud technologies."
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <Button className="bg-purple-700 hover:bg-purple-800">Save Changes</Button>
              </div>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
              <p className="text-gray-600 mb-6">
                Add your skills to help us match you with the most relevant job opportunities. Our AI will analyze your
                skills to provide personalized recommendations.
              </p>

              <div className="flex gap-2 mb-6">
                <div className="flex-1">
                  <Input
                    placeholder="Add a skill (e.g., Python, Project Management, etc.)"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addSkill()}
                  />
                </div>
                <Button onClick={addSkill} className="bg-purple-700 hover:bg-purple-800">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                    <button onClick={() => removeSkill(skill)} className="ml-2 text-gray-500 hover:text-gray-700">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>

              <h3 className="text-lg font-medium mb-3">Suggested Skills Based on Your Profile</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline" className="px-3 py-1 text-sm cursor-pointer hover:bg-gray-100">
                  TypeScript
                  <PlusCircle className="h-3 w-3 ml-2" />
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-sm cursor-pointer hover:bg-gray-100">
                  Express.js
                  <PlusCircle className="h-3 w-3 ml-2" />
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-sm cursor-pointer hover:bg-gray-100">
                  GraphQL
                  <PlusCircle className="h-3 w-3 ml-2" />
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-sm cursor-pointer hover:bg-gray-100">
                  Docker
                  <PlusCircle className="h-3 w-3 ml-2" />
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-sm cursor-pointer hover:bg-gray-100">
                  AWS
                  <PlusCircle className="h-3 w-3 ml-2" />
                </Badge>
              </div>

              <div className="flex justify-end mt-6">
                <Button className="bg-purple-700 hover:bg-purple-800">Save Skills</Button>
              </div>
            </div>
          </TabsContent>

          {/* Other tabs would go here */}
        </Tabs>
      </div>
    </div>
  )
}

