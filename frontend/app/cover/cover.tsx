'use client'

import { useState, useEffect } from 'react';

export default function Cover() {

    const startTh = 200;
    const endTh = 800;

    const [blursize, setBlursize] = useState(0);

    function handleScroll() {
        const scrollY = window.scrollY;

        let k = (scrollY - startTh) / endTh;
        k = Math.max(0, k);
        k = Math.min(endTh, k);

        setBlursize(k * 20);

        addEventListener('scroll', handleScroll);
    }

    useEffect(() => {
        handleScroll();
    }, [])

    return (
        <div className='min-h-screen overflow-hidden z-2'>
            <div className='min-h-screen bg-fixed bg-cover bg-center bg-no-repeat overflow-hidden bg-[url("/images/flatS/_DSC0118.jpg")] z-1 scale-110' style={{ filter: `blur(${blursize}px)` }}>
            </div>
        </div>
    )
}