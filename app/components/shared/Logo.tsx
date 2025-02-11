'use client'

import Image from 'next/image'
import { useState } from 'react'

interface LogoProps {
  className?: string
}

const Logo = ({ className = '' }: LogoProps) => {
  const [logoSrc, setLogoSrc] = useState('/images/placeholder-logo.svg')
  
  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === 'image/svg+xml') {
      const reader = new FileReader()
      reader.onload = (e) => {
        setLogoSrc(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      alert('Please upload an SVG file')
    }
  }

  return (
    <div className={`relative w-20 sm:w-24 md:w-28 lg:w-32 ${className}`}>
      <Image 
        src={logoSrc}
        alt="Company Logo"
        width={120}
        height={40}
        className="w-full h-auto"
        priority
      />
      
      <input
        type="file"
        accept=".svg"
        onChange={handleLogoUpload}
        className="absolute inset-0 opacity-0 cursor-pointer"
        title="Upload your logo (SVG only)"
      />
    </div>
  )
}

export default Logo