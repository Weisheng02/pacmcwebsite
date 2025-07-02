import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Mail, Cross, Calendar, Users, BookOpen } from "lucide-react"
import Link from "next/link"

export default function ChurchWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <Cross className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">保阁亚三华人卫理公会</h1>
                <p className="text-sm text-gray-600">Pokok Assam Chinese Methodist Church</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#about" className="text-gray-600 hover:text-gray-900">
                关于我们
              </Link>
              <Link href="#services" className="text-gray-600 hover:text-gray-900">
                聚会时间
              </Link>
              <Link href="/bulletin" className="text-gray-600 hover:text-gray-900">
                本周周报
              </Link>
              <Link href="/schedule" className="text-gray-600 hover:text-gray-900">
                侍奉表
              </Link>
              <Link href="/admin/login" className="text-gray-600 hover:text-gray-900">
                管理员
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-amber-600">欢迎来到保阁亚三华人卫理公会</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">在主里相聚，在恩典中成长</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            我们是保阁亚三华人卫理公会，致力于传播神的爱，建立信徒的生命，服务社区。
          </p>

          <div className="flex justify-center space-x-4 mb-8">
            <Link href="#services">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                参加聚会
              </Button>
            </Link>
            <Link href="/schedule">
              <Button variant="outline" size="lg">
                查看侍奉表
              </Button>
            </Link>
          </div>

          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>周日上午 09:00</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>保阁亚三教会</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">我们的使命</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              致力于成为一个以基督为中心的信仰社区，通过敬拜、团契、门徒训练和服务来荣耀神。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cross className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>敬拜神</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">通过真诚的敬拜和祷告，寻求与神建立更深的关系。</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>建立团契</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">在爱中彼此扶持，共同成长。</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>传扬福音</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">将神的爱和救恩传播给更多的人。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">聚会时间</h2>
            <p className="text-lg text-gray-600">欢迎您参加我们的聚会</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Badge className="w-fit bg-amber-600">主日聚会</Badge>
                <CardTitle>主日崇拜</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>周日上午 09:00 - 11:00</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>主堂</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  祷告会
                </Badge>
                <CardTitle>周三祷告会</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>周三晚上 8:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>线上 Zoom</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge variant="outline" className="w-fit border-blue-500 text-blue-600">
                  青年聚会
                </Badge>
                <CardTitle>少年小组</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>周六晚上 7:30 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>教会</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">快速链接</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/bulletin">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>本周周报</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">查看本周的聚会安排和通知</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/schedule">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>侍奉表</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">查看每周的服事人员安排</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/login">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle>管理后台</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">管理教会内容和安排</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">联系我们</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-amber-600" />
                      <div>
                        <p className="font-medium">教会地址</p>
                        <p className="text-sm text-gray-600">Jalan Besar, Pokok Assam, 34000 Taiping, Perak.</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">联系电话</p>
                        <p className="text-sm text-gray-600">05-806 2524</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium">电子邮箱</p>
                        <p className="text-sm text-gray-600">pacmc53@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">办公时间</h3>
                    <p className="text-sm text-gray-600">周一至周五 9:00-17:00</p>

                    <div className="pt-4">
                      <a href="tel:05-806-2524" className="w-full">
                        <Button className="w-full bg-amber-600 hover:bg-amber-700">
                          <Phone className="w-4 h-4 mr-2" />
                          致电联系
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                <Cross className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">保阁亚三华人卫理公会</h3>
                <p className="text-sm text-gray-400">Pokok Assam Chinese Methodist Church</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">在爱中相聚，在恩典中成长</p>
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} 保阁亚三华人卫理公会. 版权所有.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
