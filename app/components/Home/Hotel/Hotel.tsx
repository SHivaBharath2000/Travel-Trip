import React from 'react'
import { hotelsData } from '@/app/data/data'

import SectionHeading from '../../Helper/SectionHeading'
import HotelCard from './HotelCard'

const Hotel = () => {
  return (
    <div className='pt-20 pb-20'>
       <SectionHeading heading="Recommended Hotels" description="Discover our handpicked selection of top-rated hotels, chosen for their exceptional service, prime locations, and world-class amenities. Whether you're planning a luxury getaway or a budget-friendly stay, we provide the best options to ensure your comfort and satisfaction throughout your journey"/>
       <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16'>
        {/* HotelCard */}
        {hotelsData.map((data,index)=>{
            return <div key={data.id} data-aos='fade-right'data-aos-anchor-placement='top-center'data-aos-delay={`${index*100}`} >
                <HotelCard hotel={data} index={index}/>
            </div>
        })}
       </div>
    </div>
  )
}

export default Hotel