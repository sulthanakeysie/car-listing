import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex w-full h-[80vh] justify-center items-center flex-col'> 
      <h2 className='text-3xl font-[500] text-[#484844]'>Not Found</h2>
      <p className='text-xs text-[#808073]'>Could not find requested resource</p>
      <Link href="/" className='mt-2 border border-1 border-[#808073] p-2 rounded-lg text-[#484844]'>Return Home</Link>
    </div>
  )
}