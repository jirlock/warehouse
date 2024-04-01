'use client'

import Workcard from "./workcard"

const src = [
    {
        title: 'OH House',
        place: 'Chiba/Japan',
        date: '2023.8',
        imgurl: '/images/houseOH/houseOH_020_S.jpg',
    },
    {
        title: 'Flat S',
        place: 'Tokyo/Japan',
        date: '2022.4',
        imgurl: '/images/flatS/_DSC0155.jpg',
    },
]

export default function Works() {

    return (
        <div className='z-2 lg:py-24 lg:px-48'>
            <div className='flex justify-center items-center lg:py-12'>
                <div className='lg:text-3xl md:text-lg text-md'>
                    WORKS
                </div>
            </div>
            <div className='grid grid-cols-2'>
                {
                    src.map(elem => (
                        <div>
                            <Workcard title={elem.title} place={elem.place} date={elem.date} imgurl={elem.imgurl}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}