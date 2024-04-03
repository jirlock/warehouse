'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import WarehouseLogo from '../../public/WAREHOUSE_LOGO.svg';
import { GillSans, GillSansBold } from '../fonts';

type Props = {
    needDummy: boolean;
};

export default function Navigation({ needDummy }: Props) {

    /**
    const startTh = 200;
    const endTh = 800;

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [navHeight, setNavHeight] = useState(0);
    const [logoWidth, setLogoWidth] = useState(0);

    const scrollThreshold = 200;

    function modifySizes() {
        if (window.scrollY < scrollThreshold) {
            setNavHeight(window.innerHeight * 0.16)
        } else {
            setNavHeight(window.innerHeight * 0.08)
        }

        if (window.innerWidth < 768) {
            setLogoWidth(window.innerWidth/3);
        }

        if (window.innerWidth >= 768 && window.innerWidth < 1280) {
            setLogoWidth(window.innerWidth/5);
        }

        if (window.innerWidth >= 1280) {
            setLogoWidth(window.innerWidth/5);
        }
    }

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        modifySizes();
        window.addEventListener('resize', handleResize);
    }

    function handleScroll() {
        setScrollY(window.scrollY);
        modifySizes();
        window.addEventListener('scroll', handleScroll);
    }

    useEffect(() => {
        handleResize();
        handleScroll();
    }, [])
    */


    const [navHeight, setNavHeight] = useState(0);
    const [logoWidth, setLogoWidth] = useState(0);

    function handleResize() {
        setNavHeight(window.innerHeight * 0.16);
        setLogoWidth(window.innerWidth/5);
    }

    useEffect(() => {
        handleResize();
    }, [])


    return (
        <div>
            <div className='flex justify-between xl:px-10 xl:py-10 md:px-6 md:py-6 px-3 py-3 fixed left-0 top-0 w-full z-10' style={{height: navHeight}}>
                <div>
                    <Link href='/'><WarehouseLogo width={logoWidth} fill={'#000'}/></Link>
                </div>
                <div className={`flex ${GillSans.className} text-black`}>
                    <div className='xl:px-6 xl:text-2xl md:px-4 md:text-lg px-2 text-md'>
                        <Link href='/about'>ABOUT</Link>
                    </div>
                    <div className='xl:px-6 xl:text-2xl md:px-4 md:text-lg px-2 text-md'>
                        <Link href='/works'>WORKS</Link>
                    </div>
                    <div className='xl:px-6 xl:text-2xl md:px-4 md:text-lg px-2 text-md'>
                        <Link href='/contact'>CONTACT</Link>
                    </div>
                </div>
            </div>

            <div>{needDummy && <div className='w-full' style={{height: navHeight}}></div>}</div>

        </div>
    )
}