'use client'
import { Fragment } from 'react'
import { CarDetailsProps } from '../../shared/interfaces'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { close } from '../../public'
import { generateCarImageUrl } from '../../core/utils'

const CarDetailsModal = (Props: CarDetailsProps) => {
  return (
    <Transition
      appear
      show={Props.isOpen}
      as={Fragment}
    >
      <Dialog as='div' className={`relative z-10`} onClose={Props.closeModal}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-y-auto '>
          <div className='flex items-center justify-center min-h-full p-4 text-center '>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo=' opacity-0 scale-95'
            >
              <Dialog.Panel className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl p-6 transition-all flex flex-col gap-5`}>
                <button
                  type='button'
                  onClick={Props.closeModal}
                  className='absolute z-10 p-2 rounded-full top-2 right-2 w-fit bg-primary-blue-100 '
                >
                  <Image src={close} alt="close button" />
                </button>
                <div className='flex flex-col flex-1 gap-3 '>
                  <div className='relative w-full h-40 bg-center bg-cover rounded-lg bg-pattern'>
                    <Image src={generateCarImageUrl(Props.car)} alt={'car'} sizes='100vw' fill priority className='object-contain ' />
                  </div>
                  <div className='flex gap-3'>
                    <div className='relative flex-1 w-full h-24 rounded-lg bg-primary-blue-100'>
                      <Image src={generateCarImageUrl(Props.car, '29')} alt={'car'} sizes='100vw' fill priority className='object-contain ' />
                    </div>
                    <div className='relative flex-1 w-full h-24 rounded-lg bg-primary-blue-100'>
                      <Image src={generateCarImageUrl(Props.car, '23')} alt={'car'} sizes='100vw' fill priority className='object-contain ' />
                    </div>
                    <div className='relative flex-1 w-full h-24 rounded-lg bg-primary-blue-100'>
                      <Image src={generateCarImageUrl(Props.car, '13')} alt={'car'} sizes='100vw' fill priority className='object-contain ' />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col flex-1 gap-2 '>
                  <h2 className='font-serif text-xl font-semibold capitalize'>
                    {Props.car.make} {Props.car.model}
                  </h2>
                  <div className='flex flex-wrap gap-4 mt-3'>
                    {Object.entries(Props.car).map(([key, value]) => (
                      <div key={key} className='flex justify-between w-full gap-5 text-right'>
                        <h4 className='capitalize text-grey'>{key.replace("_", " ")}</h4>
                        <p className='font-semibold text-black-100'>{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>

            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default CarDetailsModal