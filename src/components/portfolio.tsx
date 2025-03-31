import React from 'react'
import ProtfolioList from './protfolio-list'

export default function Portfolio() {
    return (
        <section className=' px-4 overflow-y-auto h-[600px]'>
            <div className='flex items-center space-x-3'>
                <h2 className="uppercase text-[19px] font-bold tracking-[0.3em] text-center my-10 leading-relaxed">
                    Creative Portfolio
                </h2>
                <div className='bg-[#C0C0CA] w-[300px] h-[2px]'></div>
            </div>

            <div>
                <ProtfolioList />
            </div>
        </section>
    )
}
