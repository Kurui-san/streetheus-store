"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Facebook,
  Instagram,
  MessageCircle,
  InstagramIcon as TiktokIcon,
} from "lucide-react";

export default function ContactPage() {
  return (
    <Card className="w-full max-w-md mx-auto bg-[#f8f8f8] dark:bg-black mt-6">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-light tracking-wider">
          streethues.
        </CardTitle>
        <CardDescription>Connect with us on social media</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button
          variant="outline"
          className="w-full flex justify-start gap-2 h-12"
          onClick={() =>
            window.open("https://www.tiktok.com/@streethues", "_blank")
          }
        >
          <TiktokIcon className="h-5 w-5" />
          <span className="flex-1 text-left">Follow us on TikTok</span>
          <span className="text-sm text-muted-foreground">2.9K</span>
        </Button>

        <Button
          variant="outline"
          className="w-full flex justify-start gap-2 h-12"
          onClick={() =>
            window.open("https://www.facebook.com/streethuesclthg", "_blank")
          }
        >
          <Facebook className="h-5 w-5" />
          <span className="flex-1 text-left">Like us on Facebook</span>
        </Button>

        <Button
          variant="outline"
          className="w-full flex justify-start gap-2 h-12"
          onClick={() =>
            window.open("https://www.instagram.com/streethuesclthg", "_blank")
          }
        >
          <Instagram className="h-5 w-5" />
          <span className="flex-1 text-left">Follow us on Instagram</span>
        </Button>

        <div className="mt-4 pt-4 border-t">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>Contact via GCash:</span>
            </div>
            <span className="font-mono">0967 426 2559</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}