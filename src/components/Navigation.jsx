import React, {useState} from 'react';
import logo from '../images/logo.svg'
import hambergur from '../images/icon-hamburger.svg';
import closeIcon from '../images/icon-close.svg'


function Navigation () {

    const  [show, setShow] = useState(false);

    function showFunc() {
        setShow(!show)
    }

    function closeFunc() {
        setShow(false)
    }

    return (
        <nav className='mx-10 flex items-center gap-20 '>
            <img src={hambergur} alt="" className={`lg:hidden md:hidden 2xl:hidden z-40 my-10 cursor-pointer`} onClick={showFunc}/>
            <img src={logo} alt="" className='max-sm:mx-auto z-40' />
            <ul className={`text-white flex items-center justify-between w-2/5 max-sm:${show ? 'flex' : 'hidden'} max-sm:bg-white max-sm:absolute max-sm:text-black max-sm:w-full top-0 max-sm:p-6 max-sm:right-0 max-sm:-mt-0  z-40 my-10`}> 
                <img src={closeIcon} alt="" className={`lg:hidden md:hidden 2xl:hidden cursor-pointer`} onClick={closeFunc}/>
                <li><a href="/" className='text-xl font-semibold'>home</a></li>
                <li><a href="/" className='text-xl font-semibold'>shop</a></li>
                <li><a href="/" className='text-xl font-semibold'>about</a></li>
                <li><a href="/" className='text-xl font-semibold'>contact</a></li>
            </ul>
        </nav>
    );

}

export default Navigation