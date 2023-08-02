"use client"

import { useState } from "react"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

import { SanityProduct } from "@/config/inventory"
import { shimmer, toBase64 } from "@/lib/image"

interface Props {
  product: SanityProduct
}

export function Hero() {

    const [selectedImage, setSelectedImage ] = useState(0)
  return (
    <div className="flex flex-col-reverse">

      {/* Main Image */}
      
    </div>
  )
}
