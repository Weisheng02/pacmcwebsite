"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Edit, Trash2, Users, Heart, BookOpen, Cross } from "lucide-react"
import Link from "next/link"

interface Ministry {
  id: number
  name: string
  description: string
  leader: string
  members: string[]
  meetingTime: string
  status: "active" | "inactive"
  category: string
}

export default function MinistriesManagement() {
  const router = useRouter()
  const [ministries, setMinistries] = useState<Ministry[]>([
    {
      id: 1,
      name: "儿童主日学",
      description: "为0-12岁儿童提供主日学和特别活动",
      leader: "李姐妹",
      members: ["张姐妹", "王弟兄", "陈姐妹", "刘弟兄"],
      meetingTime: "周日中午 12:00",
      status: "active",
      category: "教育",
    },
    {
      id: 2,
      name: "少年小组 MIF",
      description: "为13-18岁少年提供团契和门徒训练",
      leader: "杨弟兄",
      members: ["郑弟兄", "何姐妹", "孙弟兄", "钱姐妹", "赵弟兄"],
      meetingTime: "周六晚上 7:30",
      status: "active",
      category: "团契",
    },
    {
      id: 3,
      name: "探访事工",
      description: "探访病患、关怀有需要的弟兄姐妹",
      leader: "林长老",
      members: ["吴姐妹", "马弟兄", "周姐妹"],
      meetingTime: "周三上午 10:00",
      status: "active",
      category: "关怀",
    },
    {
      id: 4,
      name: "体闲活动",
      description: "组织教会成员的休闲活动",
      leader: "黄弟兄",
      members: ["郭姐妹", "邓弟兄", "谢姐妹", "袁弟兄"],
      meetingTime: "周日下午 1:15-7:00",
      status: "active",
      category: "敬拜",
    },
  ])

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (!auth) {
      router.push("/admin/login")
    }
  }, [router])

  const deleteMinistry = (id: number) => {
    if (confirm("确定要删除这个事工吗？")) {
      setMinistries(ministries.filter((ministry) => ministry.id !== id))
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "教育":
        return <BookOpen className="w-5 h-5" />
      case "团契":
        return <Users className="w-5 h-5" />
      case "关怀":
        return <Heart className="w-5 h-5" />
      case "敬拜":
        return <Cross className="w-5 h-5" />
      default:
        return <Users className="w-5 h-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "教育":
        return "bg-pink-100 text-pink-800"
      case "团契":
        return "bg-blue-100 text-blue-800"
      case "关怀":
        return "bg-green-100 text-green-800"
      case "敬拜":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  返回仪表板
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Cross className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">事工管理</h1>
                  <p className="text-sm text-gray-600">管理所有事工和服事团队</p>
                </div>
              </div>
            </div>
            <Button className="bg-amber-600 hover:bg-amber-700">
              <Plus className="w-4 h-4 mr-2" />
              添加新事工
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {ministries.map((ministry) => (
            <Card key={ministry.id} className="overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${getCategoryColor(ministry.category)}`}
                    >
                      {getCategoryIcon(ministry.category)}
                    </div>
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <span>{ministry.name}</span>
                        <Badge variant={ministry.status === "active" ? "default" : "secondary"}>
                          {ministry.status === "active" ? "活跃" : "暂停"}
                        </Badge>
                      </CardTitle>
                      <CardDescription>{ministry.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => deleteMinistry(ministry.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">负责人:</span>
                    <Badge variant="outline">{ministry.leader}</Badge>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">聚会时间:</span>
                    <span className="font-medium">{ministry.meetingTime}</span>
                  </div>

                  <div>
                    <span className="text-sm text-gray-600 mb-2 block">团队成员 ({ministry.members.length}人):</span>
                    <div className="flex flex-wrap gap-1">
                      {ministry.members.map((member, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {member}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
