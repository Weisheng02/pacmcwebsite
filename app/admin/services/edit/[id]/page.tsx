"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save, Cross } from "lucide-react"
import Link from "next/link"

export default function EditService() {
  const router = useRouter()
  const params = useParams()
  const [isLoading, setIsLoading] = useState(false)

  const [service, setService] = useState({
    name: "主日崇拜",
    time: "周日上午 10:00-11:30",
    location: "主堂",
    description: "每周主要的崇拜聚会",
    leader: "张牧师",
  })

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (!auth) {
      router.push("/admin/login")
    }
  }, [router])

  const handleSave = async () => {
    setIsLoading(true)
    // 模拟保存
    setTimeout(() => {
      alert("聚会信息已更新！")
      setIsLoading(false)
      router.push("/admin/services")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/admin/services">
                <Button variant="ghost" size="lg" className="text-lg">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  返回聚会管理
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Cross className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">编辑聚会</h1>
                  <p className="text-lg text-gray-600">修改聚会基本信息</p>
                </div>
              </div>
            </div>
            <Button
              onClick={handleSave}
              disabled={isLoading}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-lg px-6 py-3"
            >
              <Save className="w-5 h-5 mr-2" />
              {isLoading ? "保存中..." : "保存更改"}
            </Button>
          </div>
        </div>
      </header>

      <div className="p-8 max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">聚会基本信息</CardTitle>
            <CardDescription className="text-lg">修改聚会的基本设置</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-lg font-medium">
                聚会名称
              </Label>
              <Input
                id="name"
                value={service.name}
                onChange={(e) => setService({ ...service, name: e.target.value })}
                className="text-lg py-3 mt-2"
              />
            </div>

            <div>
              <Label htmlFor="time" className="text-lg font-medium">
                聚会时间
              </Label>
              <Input
                id="time"
                value={service.time}
                onChange={(e) => setService({ ...service, time: e.target.value })}
                className="text-lg py-3 mt-2"
                placeholder="例如：周日上午 10:00-11:30"
              />
            </div>

            <div>
              <Label htmlFor="location" className="text-lg font-medium">
                聚会地点
              </Label>
              <Input
                id="location"
                value={service.location}
                onChange={(e) => setService({ ...service, location: e.target.value })}
                className="text-lg py-3 mt-2"
                placeholder="例如：主堂"
              />
            </div>

            <div>
              <Label htmlFor="leader" className="text-lg font-medium">
                负责人
              </Label>
              <Input
                id="leader"
                value={service.leader}
                onChange={(e) => setService({ ...service, leader: e.target.value })}
                className="text-lg py-3 mt-2"
                placeholder="负责人姓名"
              />
            </div>

            <div>
              <Label htmlFor="description" className="text-lg font-medium">
                聚会描述
              </Label>
              <Textarea
                id="description"
                value={service.description}
                onChange={(e) => setService({ ...service, description: e.target.value })}
                className="text-lg py-3 mt-2"
                rows={4}
                placeholder="简单描述这个聚会的内容"
              />
            </div>

            <div className="text-center pt-4">
              <Button
                onClick={handleSave}
                disabled={isLoading}
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-xl px-12 py-6"
              >
                <Save className="w-6 h-6 mr-3" />
                {isLoading ? "保存中..." : "保存更改"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
