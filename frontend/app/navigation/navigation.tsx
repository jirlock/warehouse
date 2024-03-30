'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import WarehouseLogo from '../../public/WAREHOUSE_LOGO.svg';

export default function Navigation() {

    const [height, setHeight] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [navHeight, setNavHeight] = useState(0);

    const scrollThreshold = 1000;

    function modifySizes() {
        if (scrollY < scrollThreshold) {
            setNavHeight(height * 0.16)
        } else {
            setNavHeight(height * 0.08)
        }
    }

    function handleResize() {
        setHeight(window.innerHeight);
        modifySizes();
        window.addEventListener('resize', handleResize);
    }

    function handleScroll() {
        setScrollY(window.scrollY);
        modifySizes();
        window.addEventListener('scroll', handleScroll);
    }

    return (
        <div className='flex justify-between px-10 py-10 fixed left-0 top-0 w-full z-10'>

        </div>
    )
}