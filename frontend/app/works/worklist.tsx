'use client'

import { useState, useEffect } from 'react';
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
    {
        title: '赤門トイレコンペ',
        place: 'Tokyo/Japan',
        date: '2021.3',
        imgurl: '/images/akamon/main.png',
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