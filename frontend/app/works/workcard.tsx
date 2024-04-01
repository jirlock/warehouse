'use client'

import { useState, useEffect, useRef } from 'react';

export default function Workcard(props) {

    const targetRef = useRef();
    const [height, setHeight] = useState(0);

    function handleResize() {
        if (targetRef.current) {
            const width = targetRef.current.offsetWidth;
            setHeight(width);
            window.addEventListener('resize', handleResize);
        }
    };

    useEffect(() => {
        handleResize();
    }, [])

    return (
        <div ref={targetRef} className=''>
            <div className='w-full overflow-hidden' style={{ height: height*9/16 }}>
                <div style={{ backgroundImage: `url('${props.imgurl}')`, height: height*9/16 }}className='w-full bg-center bg-cover ease-in-out transition duration-1000 hover:scale-110'>
                </div>
            </div>
            <div className='w-full xl:p-4 md:p-3 p-2'>
                <div className='flex justify-between border-b border-harrods-gold'>
                    <div className=''>
                        {props.place}
                    </div>
                    <div>
                        {props.date}
                    </div>
                </div>
                <div className='xl:py-2 py-1 xl:text-3xl md:text-lg text-md'>
                    {props.title}
                </div>
            </div>
        </div>
    )
}