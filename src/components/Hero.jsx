import im1 from '../images/image-about-dark.jpg';
import im2 from '../images/image-about-light.jpg';


function Hero () {
    return (

        
        <div className='max-sm:block flex'>
            <img src={im1} alt="" className='flex-1 w-full'/>
            <div className='flex-1 m-6 my-10 '>
                <h1 className='font-bold tracking-[0.5rem] py-4'>ABOUT OUR FURNITURE</h1>
                <p className=''>
                Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
            <img src= {im2} alt="" className='flex-1 w-full'/>
        </div>

    );
}

export default Hero