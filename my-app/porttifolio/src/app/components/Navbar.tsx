import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-transparent">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
    <p className="text-white text-18px font-bold cursor-pointer flex">
   <a className="flex items-center gap-2" href='/'>
   <span className="text-[#915EFF]">Hebertt</span>
   <span className="sm:block hidden">| Full Stack Developer</span>
   </a>
   </p>
   <a href='#about' className="text-#AAA6C3 ml-1">About</a>
   <a href='#work' className="text-#AAA6C3 ml-1">Work</a>
   <a href='#contact' className="text-#AAA6C3 ml-1">Contact</a>
    </div>
    </nav>
  )
}