"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Users, Cross, Download, PrinterIcon as Print } from "lucide-react"
import Link from "next/link"

export default function ServiceSchedule() {
  const handlePrint = () => {
    window.print()
  }

  // 侍奉表数据 - 按月份组织
  const scheduleData = [
    {
      month: "2025年1月",
      weeks: [
        {
          date: "1月5日",
          chairman: "沈澄同弟兄",
          speaker: "詹礼永传道",
          worship: "苏佩玲姐妹",
          pianist: "李以乐姐妹",
          usher: "Sis. Doris Ong",
          offering: "招待组",
        },
        {
          date: "1月12日",
          chairman: "Sis. Grace Toh",
          speaker: "Sis. Loi Yaw Choo",
          worship: "叶玮婷姐妹",
          pianist: "李以乐姐妹",
          usher: "朱金燕姐妹",
          offering: "招待组",
        },
        {
          date: "1月19日",
          chairman: "陈弟兄",
          speaker: "张牧师",
          worship: "诗歌组",
          pianist: "赵姐妹",
          usher: "招待组A",
          offering: "执事会",
        },
        {
          date: "1月26日",
          chairman: "王弟兄",
          speaker: "李牧师",
          worship: "敬拜团",
          pianist: "李以乐姐妹",
          usher: "招待组B",
          offering: "青年团契",
        },
      ],
    },
    {
      month: "2025年2月",
      weeks: [
        {
          date: "2月2日",
          chairman: "林长老",
          speaker: "詹礼永传道",
          worship: "苏佩玲姐妹",
          pianist: "赵姐妹",
          usher: "Sis. Grace Toh",
          offering: "妇女会",
        },
        {
          date: "2月9日",
          chairman: "黄弟兄",
          speaker: "客座讲员",
          worship: "叶玮婷姐妹",
          pianist: "李以乐姐妹",
          usher: "沈澄同弟兄",
          offering: "招待组",
        },
        {
          date: "2月16日",
          chairman: "Sis. Doris Ong",
          speaker: "Sis. Loi Yaw Choo",
          worship: "诗歌组",
          pianist: "赵姐妹",
          usher: "朱金燕姐妹",
          offering: "执事会",
        },
        {
          date: "2月23日",
          chairman: "沈澄同弟兄",
          speaker: "詹礼永传道",
          worship: "敬拜团",
          pianist: "李以乐姐妹",
          usher: "招待组A",
          offering: "青年团契",
        },
      ],
    },
    {
      month: "2025年3月",
      weeks: [
        {
          date: "3月2日",
          chairman: "陈弟兄",
          speaker: "张牧师",
          worship: "苏佩玲姐妹",
          pianist: "赵姐妹",
          usher: "Sis. Grace Toh",
          offering: "招待组",
        },
        {
          date: "3月9日",
          chairman: "王弟兄",
          speaker: "詹礼永传道",
          worship: "叶玮婷姐妹",
          pianist: "李以乐姐妹",
          usher: "招待组B",
          offering: "妇女会",
        },
        {
          date: "3月16日",
          chairman: "林长老",
          speaker: "李牧师",
          worship: "诗歌组",
          pianist: "赵姐妹",
          usher: "沈澄同弟兄",
          offering: "执事会",
        },
        {
          date: "3月23日",
          chairman: "黄弟兄",
          speaker: "Sis. Loi Yaw Choo",
          worship: "敬拜团",
          pianist: "李以乐姐妹",
          usher: "朱金燕姐妹",
          offering: "青年团契",
        },
        {
          date: "3月30日",
          chairman: "Sis. Doris Ong",
          speaker: "詹礼永传道",
          worship: "苏佩玲姐妹",
          pianist: "赵姐妹",
          usher: "Sis. Grace Toh",
          offering: "招待组",
        },
      ],
    },
  ]

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
                  <h1 className="text-xl font-bold">侍奉表</h1>
                  <p className="text-sm text-gray-600">Service Schedule</p>
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
                下载
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* 标题 */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-amber-600">主日崇拜侍奉表</Badge>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">保阁亚三华人卫理公会</h1>
          <p className="text-lg text-gray-600">2025年 主日崇拜服事人员安排</p>
        </div>

        {/* 说明 */}
        <Card className="mb-8 border-l-4 border-l-amber-500">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">服事说明：</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• 主日崇拜时间：每周日上午 09:00 - 11:00</li>
                  <li>• 服事人员请提前15分钟到达</li>
                  <li>• 如有特殊情况无法服事，请提前通知</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">联系方式：</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• 詹礼永传道：05-806 2524</li>
                  <li>• 教会邮箱：pacmc53@gmail.com</li>
                  <li>• 如需调换服事，请私下协调并通知传道</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 侍奉表 */}
        <div className="space-y-8">
          {scheduleData.map((monthData, monthIndex) => (
            <Card key={monthIndex} className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <Calendar className="w-6 h-6 text-amber-600" />
                  <span>{monthData.month}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 bg-gray-50">
                        <th className="text-left p-3 font-semibold">日期</th>
                        <th className="text-left p-3 font-semibold">主席</th>
                        <th className="text-left p-3 font-semibold">讲员</th>
                        <th className="text-left p-3 font-semibold">歌颂赞美</th>
                        <th className="text-left p-3 font-semibold">司琴</th>
                        <th className="text-left p-3 font-semibold">接待</th>
                        <th className="text-left p-3 font-semibold">收奉献</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthData.weeks.map((week, weekIndex) => (
                        <tr key={weekIndex} className="border-b hover:bg-gray-50 transition-colors">
                          <td className="p-3 font-medium text-amber-700">{week.date}</td>
                          <td className="p-3">{week.chairman}</td>
                          <td className="p-3">{week.speaker}</td>
                          <td className="p-3">{week.worship}</td>
                          <td className="p-3">{week.pianist}</td>
                          <td className="p-3">{week.usher}</td>
                          <td className="p-3">{week.offering}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 其他聚会安排 */}
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span>其他聚会安排</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-blue-800">周三祷告会 (线上)</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">时间：</span>每周三晚上 8:00 PM
                  </p>
                  <p>
                    <span className="font-medium">讲员：</span>詹礼永传道
                  </p>
                  <p>
                    <span className="font-medium">主席：</span>苏佩玲姐妹
                  </p>
                  <p>
                    <span className="font-medium">平台：</span>Zoom 会议
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-green-800">少年小组 MIF</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium">时间：</span>每周六晚上 7:30 PM
                  </p>
                  <p>
                    <span className="font-medium">负责人：</span>张峻恺弟兄
                  </p>
                  <p>
                    <span className="font-medium">地点：</span>保阁亚三教会
                  </p>
                  <p>
                    <span className="font-medium">形式：</span>实体小组活动
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 联系信息 */}
        <Card className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="font-bold text-lg text-gray-900 mb-2">保阁亚三华人卫理公会</h3>
              <p className="text-sm text-gray-600 mb-2">Pokok Assam Chinese Methodist Church</p>
              <p className="text-sm text-gray-600">
                Jalan Besar, Pokok Assam, 34000 Taiping, Perak.
                <br />
                Tel: 05-806 2524; Email: pacmc53@gmail.com
              </p>
              <p className="text-xs text-gray-500 mt-4">* 当天无法事奉者，请私下找人代替并敬请通知詹礼永传道</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
