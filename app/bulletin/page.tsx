"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Users, Heart, BookOpen, Cross, Download, PrinterIcon as Print } from "lucide-react"
import Link from "next/link"

export default function WeeklyBulletin() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b print:hidden">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  返回首页
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                  <Cross className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">本周周报</h1>
                  <p className="text-sm text-gray-600">Weekly Bulletin</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Print className="w-4 h-4 mr-2" />
                打印
              </Button>
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Download className="w-4 h-4 mr-2" />
                下载PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* 标题和日期 */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-amber-600">本周周报</Badge>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">宣教主日崇拜次序</h1>
          <p className="text-lg text-gray-600">Mission Sunday Worship</p>
          <p className="text-xl font-semibold text-amber-600 mt-2">主历 2025年6月29日</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 本周服事人员 */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span>本周服事人员 (6月29日)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">主席:</span>
                  <span>Sis. Grace Toh</span>
                </div>
                <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">讲员:</span>
                  <span>Sis. Loi Yaw Choo</span>
                </div>
                <div className="flex justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium">歌颂赞美:</span>
                  <span>叶玮婷姐妹</span>
                </div>
                <div className="flex justify-between p-3 bg-amber-50 rounded-lg">
                  <span className="font-medium">司琴:</span>
                  <span>李以乐姐妹</span>
                </div>
                <div className="flex justify-between p-3 bg-pink-50 rounded-lg">
                  <span className="font-medium">接待与收奉献:</span>
                  <span>朱金燕姐妹</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 下周服事人员 */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-green-600" />
                <span>下周服事人员 (7月6日)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">主席:</span>
                  <span>沈澄同弟兄</span>
                </div>
                <div className="flex justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">讲员:</span>
                  <span>詹礼永传道</span>
                </div>
                <div className="flex justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium">歌颂赞美:</span>
                  <span>苏佩玲姐妹</span>
                </div>
                <div className="flex justify-between p-3 bg-amber-50 rounded-lg">
                  <span className="font-medium">司琴:</span>
                  <span>李以乐姐妹</span>
                </div>
                <div className="flex justify-between p-3 bg-pink-50 rounded-lg">
                  <span className="font-medium">接待与收奉献:</span>
                  <span>Sis. Doris Ong</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 主日崇拜次序 */}
        <Card className="shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-green-600" />
              <span>主日崇拜次序</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">聚集敬拜</p>
                  <p className="text-sm text-gray-600">主席 Liturgist</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">序乐 Prelude</p>
                  <p className="text-sm text-gray-600">诗 Ps 32: 10-11</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">宣召 Call To Worship</p>
                  <p className="text-sm text-gray-600">会众 Cong.</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">歌颂赞美</p>
                  <p className="text-sm text-gray-600">主席 Liturgist</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">祷告 Prayer</p>
                  <p className="text-sm text-gray-600">会众 Cong.</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">主祷文</p>
                  <p className="text-sm text-gray-600">会众 Cong.</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">使徒信经</p>
                  <p className="text-sm text-gray-600">会众 Cong.</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">启应经文</p>
                  <p className="text-sm text-gray-600">太 Matt 28: 16-20</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">荣耀颂</p>
                  <p className="text-sm text-gray-600">会众 Cong.</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">敬听圣言</p>
                  <p className="text-sm text-gray-600">The Service of the Word</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">读经</p>
                  <p className="text-sm text-gray-600">哥前 1Cor 3:6,撒后 2Tim 4: 7-8</p>
                </div>
                <div className="p-3 border rounded-lg bg-amber-50">
                  <p className="font-medium">证道 Sermon</p>
                  <p className="text-sm text-amber-700 font-medium">Building Lord's Temple</p>
                  <p className="text-sm text-gray-600">Sis.Loi Yaw Choo</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">奉献 Offering</p>
                  <p className="text-sm text-gray-600">主的慈爱</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">三一颂</p>
                  <p className="text-sm text-gray-600">会众 Cong.</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">家事关心</p>
                  <p className="text-sm text-gray-600">沈瑞益姐妹</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">圣诗</p>
                  <p className="text-sm text-gray-600">坚立在神的应许上</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">散会祷告</p>
                  <p className="text-sm text-gray-600">詹礼永传道</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="font-medium">阿们颂</p>
                  <p className="text-sm text-gray-600">会众 Cong.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 特别通知 */}
        <Card className="shadow-lg mt-8 border-l-4 border-l-amber-500">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-600" />
              <span>特别通知</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">《爱心早餐》</h4>
              <p className="text-sm text-blue-800">
                06/07/2025（下主日）本堂会友洪敦节夫妇第二千金洪恩晰@Eliza Ang，弥月感恩奉献；
                主日崇拜之后以爱心早餐招待主内兄弟姐妹。
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">Methodist Academy 2025</h4>
              <p className="text-sm text-green-800">
                地点：波德申卫理中心 (PDMC)
                <br />
                日期：8-11 July 2025
                <br />
                课程：布道学校、讲道学校、宣教学校
                <br />
                费用：RM495（单人房）/RM320（双人房）
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">温馨提醒</h4>
              <p className="text-sm text-yellow-800">教会的各项奉献除了实体奉献也可以采用上网转账，谢谢。</p>
            </div>
          </CardContent>
        </Card>

        {/* 联系信息 */}
        <Card className="shadow-lg mt-8 bg-gradient-to-r from-amber-50 to-orange-50">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="font-bold text-lg text-gray-900 mb-2">保阁亚三华人卫理公会</h3>
              <p className="text-sm text-gray-600 mb-2">Pokok Assam Chinese Methodist Church</p>
              <p className="text-sm text-gray-600">
                Jalan Besar, Pokok Assam, 34000 Taiping, Perak.
                <br />
                Tel: 05-806 2524; Email: pacmc53@gmail.com
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
