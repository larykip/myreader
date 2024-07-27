import { SignedIn, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { FilePlus2 } from 'lucide-react'

const Header = () => {
  return (
    <div className='flex justify-between bg-white p-5 border-b shadow-sm'>
      <Link className='flex text-2xl' href='/dashboard'>
        Chat to {" "} <span className='text-indigo-600'>PDF</span>
      </Link>
      <SignedIn>
        <div className='flex space-x-2 items-center'>
          <Button asChild variant='outline' className='hidden md:flex'>
            <Link href='/dashboard/upgrade'>Pricing</Link>
          </Button>
          <Button asChild variant='outline' className='hidden md:flex'>
            <Link href='/dashboard/upgrade'>My Documents</Link>
          </Button>
          <Button asChild variant='outline' className='hidden md:flex'>
            <Link href='/dashboard/upload'>
              <FilePlus2 className='text-indigo-600'/>
            </Link>
          </Button>
          <UserButton/>
        </div>
      </SignedIn>
    </div>
  )
}

export default Header
