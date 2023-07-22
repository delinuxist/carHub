import Image from 'next/image'
import { Hero } from '@/components/pages'
import { SearchBar } from '../components/search'
import { CustomFilter } from '../components/utils'
import { fetchCars } from '../core/utils'
import { CarCard } from '../components/card'
import { fuels, yearsOfProduction } from '../core/constants'


export default async function Home({ searchParams }) {

  const allCars = await fetchCars({ manufacturer: searchParams.manufacturer || '', year: searchParams.year || 2022, fuel: searchParams.fuel || '', limit: searchParams.limit || 10, model: searchParams.model || '' });

  const isDataEmpt = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden ">
      <Hero />
      <section className='mt-12 padding-x padding-y max-width' id="discover">
        <div className=' home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className=' home__filters'>
          <SearchBar />
          <div className=' home__filter-container'>
            <CustomFilter title={"fuel"} options={fuels} />
            <CustomFilter title={"year"} options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpt ? (<section>
          <div className=' home__cars-wrapper'>
            {allCars?.map((car, index) => (
              <CarCard key={car.combination_mpg + '' + index} {...car} />
            ))}
          </div>
        </section>)
          : (
            <div className=' home__error-container'>
              <h2 className='text-xl font-bold text-black '>Oops no results</h2>
              <p>{allCars?.message}</p>
            </div>
          )

        }
      </section>
    </main>
  )
}
