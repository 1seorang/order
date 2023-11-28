"use client"
export default function Custom404() {
    return    (
    <>
    <h1 className="text-4xl animate-bounce text-fuchsia-500">Page Not Found</h1>
<button color='primary' 
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Coba again
      </button>
    </>
 ) }