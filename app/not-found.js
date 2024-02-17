"use client"
import Button from '@nextui-org/react'
export default function Custom404() {
    return    (
    <>
    <main className="w-full min-h-[400px] max-h-screen flex flex-col justify-center align-middle">  
    <h1 className="text-4xl animate-bounce text-fuchsia-500 text-center">Page Not Found</h1>
<button  className='text-base ' color='secondary'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Coba again
      </button></main>
    </>
 ) }