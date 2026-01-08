import Link from "next/link"

const NotFound = () => {
  return (
   <div className="min-h-screen w-full bg-[#F2EEE8] font-sans flex flex-col items-center">

  
  <div className="w-75 h-75 bg-white border-4 border-[#383A41] rounded-lg mt-25 flex flex-col items-center
              max-[400px]:mt-10 max-[400px]:scale-90">

    
    <div className="relative w-87.5 h-6.75 border-4 border-[#383A41] rounded-md mt-12.5 -ml-6.25 overflow-hidden">
      <div className="h-1/3 w-full bg-[#EB6D6D]"></div>
      <div className="h-1/3 w-full bg-white"></div>
      <div className="h-1/3 w-full bg-[#5E7FDC]"></div>

      <div className="absolute left-0 top-0 h-full w-7.5 bg-white/30"></div>
      <div className="absolute right-0 top-0 h-full w-7.5 bg-[#383A41]/30"></div>
    </div>

    <div className="flex justify-between w-32 mt-10">
      <div className="w-7.5 h-3.75 border-4 border-[#383A41] border-b-0 rounded-t-full"></div>
      <div className="w-7.5 h-3.75 border-4 border-[#383A41] border-b-0 rounded-t-full"></div>
    </div>

    <div className="flex justify-between w-45 mt-4">
      <div className="w-2.5 h-2.5 rounded-full bg-[#EB6D6D]/40"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-[#EB6D6D]/40"></div>
    </div>

    <div className="w-10 h-1.25 bg-[#383A41] rounded mt-6"></div>
  </div>

  <h1 className="text-[#383A41] font-extrabold text-[2.5rem] text-center mt-6
             max-[400px]:text-2xl px-5">
    Oops! Something went wrong!
  </h1>

  <Link
  href="/"
    className="mt-20 mb-12 w-[320px] py-5 text-center text-white text-lg rounded cursor-pointer
           bg-[#5E7FDC] hover:bg-[#5E7FDC]/80 transition
           max-[400px]:w-50 max-[400px]:mt-14">
    Return to Home
  </Link>

</div>


  )
}

export default NotFound