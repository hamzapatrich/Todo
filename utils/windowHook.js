import {useState,useEffect} from 'react'

function getWindowDimensions(){

    if(typeof window !== 'undefined'){
        const {innerWidth : width, innerHeight: height} = window
        return {
            width,  
            height
        }
    }
    else return 0;

    
}

export default function useWindowDimensions() {
    
    const [windowDimensions, setwindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setwindowDimensions(getWindowDimensions());
            
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize',handleResize);
    }, []);

    return windowDimensions
}