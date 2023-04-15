import React from 'react'
import TeslaLogo from '../images/tesla-logo-file.svg'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-12 p-4 text-sm font-bold'>
            <div>
                <a href='https://www.tesla.com/'>
                    <img className="h-3" src={TeslaLogo} alt="Tesla Logo" />
                </a>
            </div>

            <div className='pl-20 hidden lg:inline'>
                <ul className='flex justify-center hover:cursor-pointer'>
                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'><a href='https://www.tesla.com/models'>Model S</a></li>
                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'><a href='https://www.tesla.com/model3'>Model 3</a></li>
                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'><a href='https://www.tesla.com/modelx'>Model X</a></li>
                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'><a href='https://www.tesla.com/modely'>Model Y</a></li>
                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'><a href='https://www.tesla.com/solarroof'>Solar Roof</a></li>
                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'><a href='https://www.tesla.com/solarpanels'>Solar Panels</a></li>
                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'><a href='https://www.tesla.com/powerwall'>Powerwall</a></li>
                </ul>
            </div>

            <div className=' hidden lg:inline'>
                <ul className='flex justify-center hover:cursor-pointer'>
                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'><a href='https://shop.tesla.com/'>Shop</a></li>
                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'><a href='https://www.tesla.com/teslaaccount'>Account</a></li>
                    <li className='py-1 px-3 hover:rounded hover:bg-black/5'>Menu</li>
                </ul>
            </div>
            <div className='lg:hidden'>
                <button className='inline-flex items-center rounded-md py-2 px-4 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10'>
                    Menu
                </button>
            </div>
        </div>
    )
}

export default Navbar;