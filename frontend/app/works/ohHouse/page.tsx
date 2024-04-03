'use client'

import { useState, useEffect } from 'react';
import Navigation from '@/app/navigation/navigation';

export default function Page() {

    return(
        <div>
            <Navigation needDummy={true}/>
            <div className='grid grid-cols-5'>
                <div className='col-span-2'>
                    <div className='text-5xl'>
                        description
                    </div>
                </div>
                <div className='col-span-3'>
                    Images
                </div>
            </div>
        </div>
    )
}