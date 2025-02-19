'use client'

import Image from 'next/image'
import { logoConfig } from '../../config/logo.config'

interface LogoProps {
  className?: string
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <div className={`relative w-20 sm:w-24 md:w-28 lg:w-32 ${className}`}>
      <img 
        src={logoConfig.primary.src}
        alt={logoConfig.primary.alt}
        width={logoConfig.primary.width}
        height={logoConfig.primary.height}
        className="w-full h-auto"
      />
    </div>
  )
}

export default Logo
