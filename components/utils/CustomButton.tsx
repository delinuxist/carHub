'use client'
import Image from 'next/image'
import { CustomButtonProps } from '../../shared/interfaces'

const CustomButton = (Props: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={Props.buttonType}
      className={`custom-btn ${Props.containerStyles} `}
      onClick={Props.handleClick}
    >
      <span className={`flex-1 ${Props.textStyles}`}>
        {Props.title}
      </span>
      {Props.rightIcon && (<div className='relative w-6 h-6'>
        <Image src={Props.rightIcon} alt='right-icon' />
      </div>)}
    </button>
  )
}

export default CustomButton