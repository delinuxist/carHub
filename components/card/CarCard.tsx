'use client'
import { useState } from 'react'
import { CarProps } from '../../shared/interfaces'
import { calculateCarRent, generateCarImageUrl } from '../../core/utils'
import Image from 'next/image'
import { gas, rightArrow, steeringWheel, tire } from '../../public'
import { CustomButton } from '../utils'
import CarDetailsModal from '../modal/CarDetailsModal'

const CarCard = (Props: CarProps) => {

  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(Props.city_mpg, Props.year);


  return (
    <div className='car-card group'>
      <div className=' car-card__content'>
        <h2 className=' car-card__content-title'>
          {Props.make} {Props.model}
        </h2>
      </div>
      <p className=' flex mt-6 text-[32px] font-extrabold'>
        <span className=' self-start text-[14px] font-semibold' >
          $
        </span>
        {carRent}
        <span className=' self-end text-[14px] font-medium' >
          /day
        </span>
      </p>
      <div className='relative object-contain w-full h-40 my-3'>
        <Image src={generateCarImageUrl(Props)} alt={Props.model} fill sizes='100vw' priority className='object-contain ' />
      </div>
      <div className='relative flex w-full mt-2'>
        <div className='flex justify-between w-full text-gray-500 group-hover:invisible '>
          <div className='flex flex-col items-center justify-center gap-2'>
            <Image src={steeringWheel} alt='steering-wheel' width={20} height={20} />
            <p className=' text-[14px]'>{Props.transmission === 'a' ? "Automatic" : "Manual"}</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-2'>
            <Image src={tire} alt='tire' width={20} height={20} />
            <p className=' text-[14px]'>{Props.drive.toUpperCase()}</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-2'>
            <Image src={gas} alt='gas' width={20} height={20} />
            <p className=' text-[14px]'>{Props.city_mpg} MPG</p>
          </div>
        </div>

        {/* custom button */}
        <div className=' car-card__btn-container'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon={rightArrow}
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetailsModal isOpen={isOpen} closeModal={() => setIsOpen(false)} car={Props} />
    </div>
  )
}

export default CarCard