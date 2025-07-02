"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Facebook, MessageCircle, Youtube } from "lucide-react"

export function ChurchContact() {
  const contactInfo = {
    phone: "+60158062524",
    email: "pacmc53@gmail.com",
    address: "Jalan Besar, Pokok Assam, 34000 Taiping, Perak.",
    officeHours: "周一至周五 9:00-17:00",
    social: {
      facebook: "https://www.facebook.com/PokokAssamChineseMethodistChurch",
      whatsapp: "https://wa.me/60158062524",
      youtube: "https://www.youtube.com/@PokokAssamCMC",
    },
  }

  const handleCall = () => {
    window.location.href = `tel:${contactInfo.phone}`
  }

  const handleEmail = () => {
    window.location.href = `mailto:${contactInfo.email}`
  }

  const handleWhatsApp = () => {
    window.open(contactInfo.social.whatsapp, "_blank")
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center">联系我们</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 电话 */}
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-medium">电话</p>
              <p className="text-sm text-gray-600">{contactInfo.phone}</p>
            </div>
          </div>
          <Button size="sm" onClick={handleCall} className="bg-blue-600 hover:bg-blue-700">
            拨打
          </Button>
        </div>

        {/* WhatsApp */}
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <MessageCircle className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-medium">WhatsApp</p>
              <p className="text-sm text-gray-600">即时消息</p>
            </div>
          </div>
          <Button size="sm" onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700">
            聊天
          </Button>
        </div>

        {/* 邮件 */}
        <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-amber-600" />
            <div>
              <p className="font-medium">邮件</p>
              <p className="text-sm text-gray-600">{contactInfo.email}</p>
            </div>
          </div>
          <Button size="sm" onClick={handleEmail} className="bg-amber-600 hover:bg-amber-700">
            发送
          </Button>
        </div>

        {/* 地址 */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-gray-600 mt-0.5" />
            <div>
              <p className="font-medium">教会地址</p>
              <p className="text-sm text-gray-600">{contactInfo.address}</p>
            </div>
          </div>
        </div>

        {/* 办公时间 */}
        <div className="p-3 bg-purple-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-purple-600" />
            <div>
              <p className="font-medium">办公时间</p>
              <p className="text-sm text-gray-600">{contactInfo.officeHours}</p>
            </div>
          </div>
        </div>

        {/* 社交媒体 */}
        <div className="pt-4 border-t">
          <p className="font-medium mb-3 text-center">关注我们</p>
          <div className="flex justify-center space-x-3">
            <a
              href={contactInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              title="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={contactInfo.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href={contactInfo.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white hover:bg-red-700 transition-colors"
              title="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
