import React from 'react'
import Image from 'next/image'
import Logo from '@/img/logo.png'
import Navigation from '@/components/Navigation/Navigation'

export default function Header() {
    return (
      <header className="w-1/4 bg-[#2b2d42] text-[#8d99ae] flex flex-col items-start p-4">
        <div>
          <Image src={Logo} alt="Green Energy" width={80} />
        </div>
        <Navigation /> 
      </header>
    );
  }
