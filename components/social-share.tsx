"use client"

import { Button } from "@/components/ui/button"
import { Facebook, MessageCircle, Mail, Copy, Check } from "lucide-react"
import { useState } from "react"

interface SocialShareProps {
  title?: string
  text?: string
  url?: string
}

export function SocialShare({
  title = "保阁亚三华人卫理公会",
  text = "欢迎来到我们的教会网站",
  url,
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "")

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    window.open(facebookUrl, "_blank", "width=600,height=400")
  }

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${shareUrl}`)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleEmailShare = () => {
    const emailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${text}\n\n${shareUrl}`)}`
    window.location.href = emailUrl
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("复制失败:", err)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={handleFacebookShare}
        className="text-blue-600 hover:bg-blue-50 bg-transparent"
      >
        <Facebook className="w-4 h-4 mr-2" />
        Facebook
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={handleWhatsAppShare}
        className="text-green-600 hover:bg-green-50 bg-transparent"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        WhatsApp
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={handleEmailShare}
        className="text-amber-600 hover:bg-amber-50 bg-transparent"
      >
        <Mail className="w-4 h-4 mr-2" />
        邮件
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyLink}
        className={copied ? "text-green-600" : "text-gray-600"}
      >
        {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
        {copied ? "已复制" : "复制链接"}
      </Button>
    </div>
  )
}
