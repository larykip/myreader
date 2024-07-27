import Header from '@/components/Header'
import { ClerkLoaded } from '@clerk/nextjs'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkLoaded>
      <div className='flex flex-1 flex-col h-screen'>
        <Header/>
        <main className='flex-1 overflow-y-auto'>
          { children }
        </main>
      </div>
    </ClerkLoaded>
  )
}

export default DashboardLayout
