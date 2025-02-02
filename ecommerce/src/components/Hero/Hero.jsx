import React from 'react';
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const imageList = [
    {
        id: 1,
        image: Image1,
        title: "Upto 50% off on all Men's Wear",
        description: "Ensure production quality from verified suppliers, with your orders protected from payment to delivery.",
    },
    {
        id: 2,
        image: Image2,
        title: "30% off on all women's Wear",
        description: "Experience the latest fashion trends, styles, and brands, all at an affordable price.",
    },
    {
        id: 3,
        image: Image3,
        title: "40 off on all kids's Wear",
        description: "Discover the latest trends, styles, and brands, all at an affordable price.",
    },
];

const Hero = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true,
    }

    return (
        <div className='relative overflow-hidden min-h-[550px]
        sm:min-h-[650px] bg-gray-100 flex justify-center
        items-center dark:bg-gray-950 dark:text-white
        duration-200'>
            {/* Background Pattern */}
            <div className='h-[700px] w-[700px] bg-primary/40
            absolute -top-1/2 right-0 rounded-3xl rotate-45'>
            </div>
            {/* hero section */}
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}>
                        {imageList.map((data)=>(
                            <div key={data.id}>
                                <div className='grid grid-cols-1 sm:grid-cols-2'>
                                    {/*text section*/}
                                    <div
                                    className='flex flex-col justify-center 
                                    gap-4 pt-12 sm:pt-0 text-center sm:text-left 
                                    order-2 sm:order-1 relative z-10'>
                                        <h1 className='text-5xl sm:text-6xl
                                        lg:text-7xl font-bold' >{data.title}</h1>
                                        <p className='text-sm'>
                                        {data.description}
                                        </p>
                                        <div>
                                            <button className='bg-gradient-to-r 
                                            from-primary to-secondary hover:scale-105
                                            duration-200 text-white py-2 px-4
                                            rounded-full'>
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                    {/*image section*/}
                                    <div className='order-1 sm:order-2'>
                                        <div className='relative z-10'>
                                            <img src={data.image} alt = ""
                                            className='w-[300px] h-[300px] 
                                            sm:h-[450px] sm:w-[450px] sm:scale-125
                                            lg:scale-120 object-contain mx-auto'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    );
}

export default Hero 
