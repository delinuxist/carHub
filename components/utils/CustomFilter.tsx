'use client'
import { useState } from 'react'
import { CustomFilterProps } from '../../shared/interfaces'
import { useRouter } from 'next/navigation'
import { Listbox } from '@headlessui/react'
import Image from 'next/image'
import { chevronUpDown } from '../../public'


const CustomFilter = (Props: CustomFilterProps) => {
  const [selected, setSelected] = useState(Props.options[0])

  return (
    <div className=' w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => setSelected(e)}
      >
        <div className='relative z-10 w-fit'>
          <Listbox.Button className={` custom-filter__btn`}>
            <span>{selected.title}</span>
            <Image src={chevronUpDown} alt='chevron-up-down' />
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter