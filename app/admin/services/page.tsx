"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Edit, Clock, MapPin, Users, Cross } from "lucide-react"
import Link from "next/link"

interface Service {
  id: number
  name: string
  time: string
  location: string
  description: string
  leader: string
  status: "active" | "inactive"
}

export default function ServicesManagement() {
  const router = useRouter()
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      name: "主日崇拜",
      time: "周日上午 09:00",
      location: "主堂",
      description: "每周主要的崇拜聚会",
      leader: "詹礼永传道",
      status: "active",
    },
    {
      id: 2,
      name: "周三祷告会",
      time: "周三晚上 8:00",
      location: "线上",
      description: "一同祷告的聚会",
      leader: "詹礼永传道",
      status: "active",
    },
    {
      id: 3,
      name: "晨祷",
      time: "周二、周四上午 07:30",
      location: "保阁亚三教会",
      description: "清晨的祷告",
      leader: "祷告组",
      status: "active",
    },
    {
      id: 4,
      name: "少年小组",
      time: "周六晚上 7:30",
      location: "实体聚会",
      description: "少年人的小组聚会",
      leader: "少年团契",
      status: "active",
    },
  ])

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (!auth) {
      router.push("/admin/login")
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="lg" className="text-lg">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  返回主页
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Cross className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">聚会管理</h1>
                  <p className="text-lg text-gray-600">管理所有聚会安排</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {services.map((service) => (
            <Card key={service.id} className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center space-x-3">
                      <span>{service.name}</span>
                      <Badge
                        variant={service.status === "active" ? "default" : "secondary"}
                        className="text-base px-3 py-1"
                      >
                        {service.status === "active" ? "进行中" : "暂停"}
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">{service.description}</CardDescription>
                  </div>
                  <Link href={`/admin/services/edit/${service.id}`}>
                    <Button size="lg" variant="outline" className="text-lg px-6 py-3 bg-transparent">
                      <Edit className="w-5 h-5 mr-2" />
                      编辑
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-amber-500" />
                    <div>
                      <p className="font-medium">时间</p>
                      <p className="text-gray-600">{service.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="font-medium">地点</p>
                      <p className="text-gray-600">{service.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-green-500" />
                    <div>
                      <p className="font-medium">负责人</p>
                      <p className="text-gray-600">{service.leader}</p>
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
