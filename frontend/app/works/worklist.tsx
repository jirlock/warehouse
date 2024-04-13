'use client'

import { useState, useEffect } from 'react';
import Workcard from "./workcard"

const src = [
    {
        id: 0,
        title: 'OH House',
        place: 'Chiba/Japan',
        date: '2023.8',
        imgurl: '/images/houseOH/houseOH_020_S.jpg',
    },
    {
        id: 1,
        title: 'Flat S',
        place: 'Tokyo/Japan',
        date: '2022.4',
        imgurl: '/images/flatS/_DSC0155.jpg',
    },
    {
        id: 2,
        title: '赤門トイレコンペ',
        place: 'Tokyo/Japan',
        date: '2021.3',
        imgurl: '/images/akamon/main.png',
    },
    {
        id: 3,
        title: '小さな部屋に絵具を渡す',
        place: 'Tokyo/Japan',
        date: '2021.8',
        imgurl: '/images/smallFurniture/main.JPG',
    }
]

export default function Worklist() {

    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='xl:text-3xl'>
                    WORKS
                </div>
            </div>
            <div className='grid grid-cols-2 pt-24'>
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