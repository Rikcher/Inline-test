import React, { createContext, useContext, useState, ReactNode } from 'react';
import useLargeScreen from '../hooks/useLargeScreen';

interface NavbarContextType {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isLargeScreen: boolean;
    isSmallestScreen: boolean;
    closeMenu: () => void;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

interface NavbarProviderProps {
    children: ReactNode;
}

export const NavbarProvider: React.FC<NavbarProviderProps> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isLargeScreen, isSmallestScreen } = useLargeScreen()

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <NavbarContext.Provider value={{ isMenuOpen, setIsMenuOpen, isLargeScreen, isSmallestScreen, closeMenu }}>
            {children}
        </NavbarContext.Provider>
    );
};

export const useNavbar = (): NavbarContextType => {
    const context = useContext(NavbarContext);
    if (!context) {
        throw new Error('useNavbar must be used within a NavbarProvider');
    }
    return context;
};
