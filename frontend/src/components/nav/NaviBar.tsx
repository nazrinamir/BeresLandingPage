import React from 'react'
import MainButton from '../button/MainButton'

export const Navibar = ({ isMenuOpen, toggleMenu }: { isMenuOpen: boolean, toggleMenu: () => void }) => {
    return (
        <div className="shadow-lg fixed w-full left-0 top-0 z-50 p-4 backdrop-blur-sm bg-white/10">
            <div className="mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <img src="/beresIcon.png" alt="Beres" className="w-10 h-10" />
                        <div onClick={() => { window.location.href = '#home' }} className="text-2xl font-bold text-[#b0ec2c]">
                            Beres
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div onClick={() => { window.location.href = '#home' }} className="hover:cursor-pointer text-[#b0ec2c] hover:text-[#9cd426] transition-colors">Home</div>
                        <div onClick={() => { window.location.href = '#features' }} className="hover:cursor-pointer text-[#b0ec2c] hover:text-[#9cd426] transition-colors">Features</div>
                        <div onClick={() => { window.location.href = '#about' }} className="hover:cursor-pointer text-[#b0ec2c] hover:text-[#9cd426] transition-colors">About</div>
                        <div onClick={() => { window.location.href = '#contact' }} className="hover:cursor-pointer text-[#b0ec2c] hover:text-[#9cd426] transition-colors">Contact</div>
                        <MainButton text="Get Started" handleClick={toggleMenu} />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <MainButton text="Get Started" handleClick={toggleMenu} />
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden flex justify-center items-center">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-transparent border-t">
                            <a href="#home" className="block px-3 py-2 text-[#b0ec2c] hover:text-[#9cd426]" onClick={toggleMenu}>Home</a>
                            <a href="#features" className="block px-3 py-2 text-[#2cb0ec] hover:text-[#269cd4]" onClick={toggleMenu}>Features</a>
                            <a href="#about" className="block px-3 py-2 text-[#ec2cb0] hover:text-[#d4269c]" onClick={toggleMenu}>About</a>
                            <a href="#contact" className="block px-3 py-2 text-[#ecb02c] hover:text-[#d49c26]" onClick={toggleMenu}>Contact</a>
                            <MainButton text="Get Started" handleClick={toggleMenu} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
