import { useState, useEffect, useRef } from 'react';
import Navigation from '../navigation/navigation';
import Worklist from './worklist';

export default function Page() {

    return (
        <div>
            <Navigation needDummy={true}/>
            <Worklist/>
        </div>
    )
}