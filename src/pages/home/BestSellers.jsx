import React from 'react'
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';



const BestSellers = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json').then(res => res.json()).then(data => setProducts(data))
    }, [])

    // console.log(products);

    const bestSellers = products.filter(product => product.status === 'Best Selers')
    // console.log(bestSellers);




    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4'>
            <div className="text-center">
                <h2 className='title'>Best Seller</h2>
                <p className='text-Black/75 capitalize md:w-2/3 mx-auto mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu nunc, fermentum quis sapien in, placerat scelerisque risus. Class aptent taciti sociosqu ad litora torquent per </p>
            </div>

            {/* Best Seller Products */}

            <div className="mtb-16">
                <Swiper
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 50,
                        },
                      }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        bestSellers.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Link to={`/shop/${item.id}`}>
                                    <img src={item.image} alt="" className='mx-auto w-full hover:scale-105 transition-all duration-300' />
                                </Link>
                                <div className="mt-4 px-4">
                                    <h4 className='text-base font-semibold mb-2'>{item.title}</h4>
                                    <div className="flex justify-between">
                                        <p className='text-black/50'>{item.category}</p>
                                        <p className='font-medium'>${item.price}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>

        </div>
    )
}

export default BestSellers
