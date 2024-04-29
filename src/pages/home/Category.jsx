import React from 'react'
import { Link } from 'react-router-dom'


const CompanyLogos = [
    {id : 1, img : "./images/category/01.png"},
    {id : 2, img : "./images/category/02.png"},
    {id : 3, img : "./images/category/03.png"},
    {id : 4, img : "./images/category/04.png"},
    {id : 5, img : "./images/category/05.png"},
]


const Category = () => {
  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 pb-28 pt-20'>
      {/* Logos */}
      <div className="flex items-center justify-around flex-wrap gap-4 py-5">
        {
            CompanyLogos.map(({id,img}) => (
                <div key={id} className=" ">
                    <img src={img} alt="" />
                </div>
            ))
        }
      </div>

      {/* category image Grid */}

        <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
            <p className='font-semibold uppercase text-center bg-black text-white md:p-1.5 md:-rotate-90 p-2 rounded-sm inline-flex'>Explore new and popular styles</p>
            <div className="">
                <Link to={'/'}>
                    <img className='w-full hover:scale-105 transition-all duration-200' src="/images/category-grid-imgs/card1.png" alt="" />
                </Link>
            </div>
            <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-2">
                <Link to={'/'}><img className='w-full hover:scale-105 transition-all duration-200' src="/images/category-grid-imgs/card2.png" alt="" /></Link>
                <Link to={'/'}><img className='w-full hover:scale-105 transition-all duration-200' src="/images/category-grid-imgs/card3.png" alt="" /></Link>
                <Link to={'/'}><img className='w-full hover:scale-105 transition-all duration-200' src="/images/category-grid-imgs/card4.png" alt="" /></Link>
                <Link to={'/'}><img className='w-full hover:scale-105 transition-all duration-200' src="/images/category-grid-imgs/card5.png" alt="" /></Link>
            </div>
            </div>
        </div>




    </div>
  )
}

export default Category
