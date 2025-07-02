"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save, Cross, FileText } from "lucide-react"
import Link from "next/link"

export default function BulletinManagement() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const [bulletinData, setBulletinData] = useState({
    date: "2024年12月31日",
    thisWeekChairman: "陈弟兄",
    thisWeekSpeaker: "张牧师",
    thisWeekWorship: "诗歌组",
    thisWeekPianist: "李姐妹",
    thisWeekUsher: "招待组",

    nextWeekDate: "2025年1月7日",
    nextWeekChairman: "王弟兄",
    nextWeekSpeaker: "李牧师",
    nextWeekWorship: "敬拜团",
    nextWeekPianist: "赵姐妹",
    nextWeekUsher: "招待组",

    announcement:
      "欢迎各位弟兄姐妹参加主日崇拜！\n\n下周将举行新年感恩礼拜，欢迎踊跃参加。\n\n请为教会的各项事工代祷。",
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
      alert("周报已更新！")
      setIsLoading(false)
    }, 1000)
  }

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
                  <h1 className="text-2xl font-bold text-gray-900">周报管理</h1>
                  <p className="text-lg text-gray-600">更新每周周报内容</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/bulletin" target="_blank">
                <Button variant="outline" size="lg" className="text-lg px-6 py-3 bg-transparent">
                  <FileText className="w-5 h-5 mr-2" />
                  预览周报
                </Button>
              </Link>
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
        </div>
      </header>

      <div className="p-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* 基本信息 */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">周报日期</CardTitle>
              <CardDescription className="text-lg">设置本周周报的日期</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="date" className="text-lg font-medium">
                    本周日期
                  </Label>
                  <Input
                    id="date"
                    value={bulletinData.date}
                    onChange={(e) => setBulletinData({ ...bulletinData, date: e.target.value })}
                    className="text-lg py-3 mt-2"
                    placeholder="例如：2025年6月29日"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 本周服事人员 */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">本周服事人员</CardTitle>
              <CardDescription className="text-lg">填写本周主日崇拜的服事人员</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-lg font-medium">主席</Label>
                  <Input
                    value={bulletinData.thisWeekChairman}
                    onChange={(e) => setBulletinData({ ...bulletinData, thisWeekChairman: e.target.value })}
                    className="text-lg py-3 mt-2"
                    placeholder="主席姓名"
                  />
                </div>
                <div>
                  <Label className="text-lg font-medium">讲员</Label>
                  <Input
                    value={bulletinData.thisWeekSpeaker}
                    onChange={(e) => setBulletinData({ ...bulletinData, thisWeekSpeaker: e.target.value })}
                    className="text-lg py-3 mt-2"
                    placeholder="讲员姓名"
                  />
                </div>
                <div>
                  <Label className="text-lg font-medium">歌颂赞美</Label>
                  <Input
                    value={bulletinData.thisWeekWorship}
                    onChange={(e) => setBulletinData({ ...bulletinData, thisWeekWorship: e.target.value })}
                    className="text-lg py-3 mt-2"
                    placeholder="敬拜负责人"
                  />
                </div>
                <div>
                  <Label className="text-lg font-medium">司琴</Label>
                  <Input
                    value={bulletinData.thisWeekPianist}
                    onChange={(e) => setBulletinData({ ...bulletinData, thisWeekPianist: e.target.value })}
                    className="text-lg py-3 mt-2"
                    placeholder="司琴姓名"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label className="text-lg font-medium">接待与收奉献</Label>
                  <Input
                    value={bulletinData.thisWeekUsher}
                    onChange={(e) => setBulletinData({ ...bulletinData, thisWeekUsher: e.target.value })}
                    className="text-lg py-3 mt-2"
                    placeholder="接待负责人"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 下周服事人员 */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">下周服事人员</CardTitle>
              <CardDescription className="text-lg">填写下周主日崇拜的服事人员</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                <div>
                  <Label className="text-lg font-medium">下周日期</Label>
                  <Input
                    value={bulletinData.nextWeekDate}
                    onChange={(e) => setBulletinData({ ...bulletinData, nextWeekDate: e.target.value })}
                    className="text-lg py-3 mt-2"
                    placeholder="例如：2025年7月6日"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="text-lg font-medium">主席</Label>
                  <Input
                    value={bulletinData.nextWeekChairman}
                    onChange={(e) => setBulletinData({ ...bulletinData, nextWeekChairman: e.target.value })}
                    className="text-lg py-3 mt-2"
                    placeholder="主席姓名"
                  />
                </div>
                <div>
                  <Label className="text-lg font-medium">讲员</Label>
                  <Input
                    value={bulletinData.nextWeekSpeaker}
                    onChange={(e) => setBulletinData({ ...bulletinData, nextWeekSpeaker: e.target.value })}
                    className="text-lg py-3 mt-2"
                    placeholder="讲员姓名"
                  />
                </div>
                <div>
                  <Label className="text-lg font-medium">歌颂赞美</Label>
                  <Input
                    value={bulletinData.nextWeekWorship}
                    onChange={(e) => setBulletinData({ ...bulletinData, nextWeekWorship: e.target.value })}
                    className="text-lg py-3 mt-2"
                    placeholder="敬拜负责人"
                  />
                </div>
                <div>
                  <Label className="text-lg font-medium">司琴</Label>
                  <Input
                    value={bulletinData.nextWeekPianist}
                    onChange={(e) => setBulletinData({ ...bulletinData, nextWeekPianist: e.target.value })}
                    className="text-lg py-3 mt-2"
                    placeholder="司琴姓名"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label className="text-lg font-medium">接待与收奉献</Label>
                  <Input
                    value={bulletinData.nextWeekUsher}
                    onChange={(e) => setBulletinData({ ...bulletinData, nextWeekUsher: e.target.value })}
                    className="text-lg py-3 mt-2"
                    placeholder="接待负责人"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 特别通知 */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">特别通知</CardTitle>
              <CardDescription className="text-lg">添加本周的特别通知或代祷事项</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label className="text-lg font-medium">通知内容</Label>
                <Textarea
                  value={bulletinData.announcement}
                  onChange={(e) => setBulletinData({ ...bulletinData, announcement: e.target.value })}
                  className="text-lg py-3 mt-2"
                  rows={8}
                  placeholder="请输入特别通知内容..."
                />
                <p className="text-sm text-gray-500 mt-2">提示：每行一个通知，可以包含日期、活动等信息</p>
              </div>
            </CardContent>
          </Card>

          {/* 保存按钮 */}
          <div className="text-center">
            <Button
              onClick={handleSave}
              disabled={isLoading}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-xl px-12 py-6"
            >
              <Save className="w-6 h-6 mr-3" />
              {isLoading ? "保存中..." : "保存所有更改"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
