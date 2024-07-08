'use client'

import { APP_NAME } from '@/utils/constant'

export const Header = () => {
  return (
    <>
      <header className='w-full fixed backdrop-blur-2xl dark:border-neutral-800 lg:bg-gray-200 lg:dark:bg-zinc-800/50 left-0 top-0  z-10 flex flex-wrap gap-4 py-2 px-4 md:py-4 md:px-10  justify-between items-center'>
        <span>
          <a href='/'>
            <div className='p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
              <div className='bg-white p-1'>{APP_NAME}</div>
            </div>
          </a>
        </span>
      </header>
    </>
  )
}

export default Header
