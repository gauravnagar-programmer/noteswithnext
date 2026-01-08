import Form from '@/components/Form'
import Link from 'next/link'


const page = () => {
  return (
    <div className='px-5  flex flex-col '>
      <Link href="/"  className='active:bg-gray-700 mt-10 flex items-center gap-3 bg-gray-500 rounded-full  w-fit text-white font-semibold  px-3'> <span className='text-2xl'>←</span>Home</Link>

      <Form/>
    </div>
  )
}

export default page