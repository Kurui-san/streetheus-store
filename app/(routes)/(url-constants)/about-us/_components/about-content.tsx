'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTypewriterEffect } from './use-type-writer-effect'

export default function AboutContent() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const typedText = useTypewriterEffect("Welcome to our unique store!")

  return (
    <div className="container mx-auto px-4 py-16 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-center text-black mb-2">About Our Store</h1>
        <p className="text-xl text-center h-8 text-black">{typedText}</p>
      </motion.div>

      <div className="grid gap-8 grid-cols-1 mt-8">
        <motion.div {...fadeInUp}>
          <Card className='bg-gradient-to-r from-[#947a70] to-[#bd9d92]'>
            <CardHeader>
              <CardTitle>Our Products</CardTitle>
              <CardDescription>Quality branded overruns</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">
                Our store offers branded overrun items, which are slightly damaged products manufactured by original brand makers. These items may not meet the strict quality standards required for retail but are guaranteed to be authentic.
              </p>
              <p className="text-white mb-4">
                Minor flaws may be present, including:
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="biege">Slight defects</Badge>
                <Badge variant="biege">Incorrect labels</Badge>
                <Badge variant="biege">Missing labels</Badge>
                <Badge variant="biege">No tags</Badge>
                <Badge variant="biege">Small holes</Badge>
                <Badge variant="biege">Mended areas</Badge>
                <Badge variant="biege">Washable marks</Badge>
                <Badge variant="biege">Minimal stains</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div {...fadeInUp}>
          <Card className='bg-gradient-to-r from-[#947a70] to-[#bd9d92]'>
            <CardHeader>
              <CardTitle>Our Policy</CardTitle>
              <CardDescription>Mine / Lock Basis</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">
                {`We operate on a "Mine / Lock Basis," so once you confirm your order, please be sure of your purchase. Our policy includes:`}
              </p>
              <ul className="list-disc list-inside space-y-2 text-white">
                <li>No cancellations allowed</li>
                <li>No exchanges permitted</li>
                <li>No returns accepted</li>
                <li>Orders are strictly reserved for 1-2 days only</li>
                <li>All sales are final—buy at your own risk</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div {...fadeInUp}>
          <Card className='bg-gradient-to-r from-[#947a70] to-[#bd9d92]'>
            <CardHeader>
              <CardTitle>Shipping & Pickup</CardTitle>
              <CardDescription>Convenient options for you</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">
                While meetups are not available, we offer the following options:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white">
                <li>Self-pickup</li>
                <li>Direct shipping through J&T Express</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div {...fadeInUp}>
          <Card className='bg-gradient-to-r from-[#947a70] to-[#bd9d92]'>
            <CardHeader>
              <CardTitle>Payment & Location</CardTitle>
              <CardDescription>Easy payment and where to find us</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2 text-white">Payment Options:</h3>
              <ul className="list-disc list-inside space-y-2 text-white mb-4">
                <li>Cash</li>
                <li>GCash</li>
              </ul>
              <h3 className="font-semibold text-white mb-2">Our Location:</h3>
              <p className="text-white">
                Palao, Canlubang, Calamba City, Laguna
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="text-xl text-black">
          We appreciate your understanding and look forward to serving you!
        </p>
      </motion.div>
    </div>
  )
}

