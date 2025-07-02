"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, FileText, Cross, LogOut, Eye } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (!auth) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/admin/login")
  }

  if (!isAuthenticated) {
    return <div className="text-xl p-8">加载中...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Cross className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">保阁亚三华人卫理公会管理系统</h1>
                <p className="text-lg text-gray-600">Pokok Assam Chinese Methodist Church</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" target="_blank">
                <Button variant="outline" size="lg" className="text-lg px-6 py-3 bg-transparent">
                  <Eye className="w-5 h-5 mr-2" />
                  查看网站
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={handleLogout} className="text-lg px-6 py-3 bg-transparent">
                <LogOut className="w-5 h-5 mr-2" />
                退出登录
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="p-8">
        {/* 欢迎信息 */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">欢迎使用管理系统</h2>
          <p className="text-xl text-gray-600">请选择您要管理的内容</p>
        </div>

        {/* 主要功能 - 使用更大的卡片和更简单的布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 聚会管理 */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-amber-600" />
              </div>
              <CardTitle className="text-2xl">聚会管理</CardTitle>
              <CardDescription className="text-lg">管理每周聚会和服事人员</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/admin/services">
                <Button size="lg" className="w-full text-xl py-6 bg-amber-600 hover:bg-amber-700">
                  进入聚会管理
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-3">管理主日崇拜、查经班等聚会安排</p>
            </CardContent>
          </Card>

          {/* 事工管理 */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">事工管理</CardTitle>
              <CardDescription className="text-lg">管理各项事工和团队</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/admin/ministries">
                <Button size="lg" className="w-full text-xl py-6 bg-blue-600 hover:bg-blue-700">
                  进入事工管理
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-3">管理儿童事工、青年事工等</p>
            </CardContent>
          </Card>

          {/* 周报管理 */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">周报管理</CardTitle>
              <CardDescription className="text-lg">管理每周周报内容</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/admin/bulletin">
                <Button size="lg" className="w-full text-xl py-6 bg-green-600 hover:bg-green-700">
                  进入周报管理
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-3">更新周报内容和服事安排</p>
            </CardContent>
          </Card>

          {/* 网站预览 */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-2xl">查看网站</CardTitle>
              <CardDescription className="text-lg">预览教会网站效果</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/" target="_blank">
                <Button size="lg" className="w-full text-xl py-6 bg-purple-600 hover:bg-purple-700">
                  打开教会网站
                </Button>
              </Link>
              <p className="text-sm text-gray-500 mt-3">查看网站最新内容</p>
            </CardContent>
          </Card>
        </div>

        {/* 帮助信息 */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-amber-50 border-amber-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-amber-800 mb-4">使用说明</h3>
              <div className="text-lg text-amber-700 space-y-2">
                <p>• 点击上面的按钮进入相应的管理页面</p>
                <p>• 每周只需更新"周报管理"中的内容</p>
                <p>• 如有问题，请联系技术支持</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
