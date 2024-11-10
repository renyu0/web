'use client'

import {HeartIcon} from 'lucide-react'
import {SendIcon} from 'lucide-react'

export default function Home() {
  return(
    <div className='flex justify-center items=center w-full h-[100dvh] bg-gray-300'>
      <div className='max-w-sm w-full h-[100dvh] bg-white'>
        <div className='flex justify-between bg-gray-300 px-2'>
          <span className='font-bold border-4'>Instagram</span>
          <div className='flex items-center gap-2 border-2'>
            <button onClick={() => like()}><HeartIcon className='w-6 h-6'/></button>
            <button onClick={() => message()}><SendIcon className='w-6 h-6'/></button>
          </div>
        </div>
      </div>
    </div>
  );
}

function like() {
  // console.log('like button is pushed')
  //alert('like')
  prompt('like')
}

function message() {
  // console.log('like button is pushed')
  //alert('message')
  confirm('masage')
}