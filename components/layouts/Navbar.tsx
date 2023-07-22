import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '../utils'

const Navbar = () => {
  return (
    <header className='absolute z-10 w-full'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href={"/"} className='flex items-center justify-center'>
          <Image src="/logo.svg" width={118} height={18} alt='logo' className='object-contain ' />
        </Link>
        <CustomButton
          title='Sign In'
          containerStyles=' text-primary-blue rounded-full bg-white'
          buttonType='submit'
        />
      </nav>
    </header>
  )
}

export default Navbar