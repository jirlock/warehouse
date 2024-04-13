'use client'

import Workcard from "./workcard"

const src = [
    {
        id: 1,
        title: 'OH House',
        place: 'Chiba/Japan',
        date: '2023.8',
        imgurl: '/images/houseOH/houseOH_025_S.jpg',
    },
    {
        id: 2,
        title: 'Flat S',
        place: 'Tokyo/Japan',
        date: '2022.4',
        imgurl: '/images/flatS/_DSC0155.jpg',
    },
    {
        id: 3,
        title: '赤門トイレコンペ',
        place: 'Tokyo/Japan',
        date: '2021.3',
        imgurl: '/images/akamon/main.png',
    },
    {
        id: 4,
        title: '小さな部屋に絵具を渡す',
        place: 'Tokyo/Japan',
        date: '2021.8',
        imgurl: '/images/smallFurniture/main.JPG',
    }
]

export default function Works() {

    return (
        <div className='z-2 lg:py-24 lg:px-24'>
            <div className='flex justify-center items-center lg:py-12'>
                <div className='lg:text-3xl md:text-lg text-md'>
                    WORKS
                </div>
            </div>
            <div className='grid grid-cols-2'>
                {
                    src.map((elem) => (
                        <div>
                            <Workcard key={elem.id} title={elem.title} place={elem.place} date={elem.date} imgurl={elem.imgurl}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}