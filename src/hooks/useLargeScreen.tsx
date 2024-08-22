import { useState, useEffect } from 'react';

function useLargeScreen() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);
    const [isSmallestScreen, setIsSmallestScreen] = useState(window.innerHeight < 375)

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 1024);
            setIsSmallestScreen(window.innerWidth < 375);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {isLargeScreen, isSmallestScreen};
}

export default useLargeScreen;