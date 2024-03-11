import React, {useState} from 'react';
import Navigation from './Navigation';
import img1 from '../images/desktop-image-hero-1.jpg';
import img2 from '../images/desktop-image-hero-2.jpg';
import img3 from '../images/desktop-image-hero-3.jpg';
import arrow from '../images/icon-arrow.svg';
import larrow from '../images/icon-angle-left.svg';
import farrow from '../images/icon-angle-right.svg';

function Home() {
    const images = [
        {
            img: img1,
            text: {
                header: 'Discover innovative ways to decorate',
                text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
            },
        },
        {
            img: img2,
            text: {
                header: 'We are available all across the globe With stores all over the world,',
                text: 're available all across the globe With stores all over the world, it iss easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Dont hesitate to contact us today. ',
            }
        },
        {
            img: img3,
            text: {
                header: 'Our modern furniture store provide a high level of quality.',
                text: 'Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
            }
        }
    ]
    let [count, setCount] = useState(0);
    
    function leftBtn () {
        if (count > 0) {
            setCount(count - 1);
        }
        else {
            setCount(images.length-1)
        }
    }
    function rightBtn () {
        if (count < images.length - 1) {
            setCount(count + 1);
        } else {
            setCount(0);
        }
    }

    return (
        <div className=''>
            <Navigation />
            <div className='flex max-sm:block  max-sm:-mt-24 -mt-28'>
                {images.map((item, index) => 

                <div key={index} className={ `flex items-center max-sm:${index !== count ? 'hidden' : 'block'} ${index !== count ? 'hidden' : 'block'}`}>
                    <img src={item.img} alt="" className='flex-1 w-[] '/>
                    <div className='flex-1 px-4 max-sm:mx-10 lg:mt-10'>
                        <h1 className='text-2xl py-8 font-bold '>{item.text.header}</h1>
                        <p className='text-[1rem] text-gray-600 font-medium tracking-tight'>{item.text.text}</p>
                        <button className='flex items-center font-semibold gap-6 tracking-[1rem] py-10'>SHOP NOW <img src={arrow} alt="" className=''/></button>
                    </div>
                </div>)}
                <div className='absolute max-sm:top-[14%] max-sm:right-0 right-[30.6%] top-[56%]'>
                    <button onClick={leftBtn}><img src={larrow} alt="" className='bg-black p-5'/></button>
                    <button onClick={rightBtn}><img src={farrow} alt="" className='bg-black p-5'/></button>
                </div>
            </div>
            
        </div>
    );
}
export default Home;