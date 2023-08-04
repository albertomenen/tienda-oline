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
      <div className="aspect-h-1 aspect-w-1 w-full">
        <Image
         priority
          src="/products/3107_Summer_1.jpg"
          alt={`Perfume Image`}
         width={400}
          height={400}
          quality={100}
         placeholder="blur"
         blurDataURL={`data: image/svg+xml; base64,${toBase64(shimmer(600,750))}`}
         className="h-full w-full border-2 border-gray-200 object-cover object-center shadow-sm dark:border-gray-800 sm:rounded-lg"
       />
     </div>
   </div>
  )
}
