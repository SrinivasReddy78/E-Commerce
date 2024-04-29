import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Collections from './Collections'
import BestSellers from './BestSellers'
import NewLetters from './NewLetters'

const Home = () => {
  return (
    <div className='font-Poppins'>
      <Banner />
      <Category />
      <Products />
      <Collections />
      <BestSellers />
      <NewLetters />
    </div>
  )
}

export default Home
