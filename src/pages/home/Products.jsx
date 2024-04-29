import React from 'react'
import { useState, useEffect } from 'react'
import { FaFilter } from 'react-icons/fa'
import Cards from '../../components/Cards'

const Products = () => {
    const [products, setProducts] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortOption, setSortOption] = useState('defalut')


    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await fetch('/products.json');
                const data = await response.json();
                setProducts(data)
                setFilteredItems(data)
            }catch(error){
                console.log('Error Fetching Data:', error);
            }
        }
        fetchData();
    }, [])

    // console.log(products);

    //filter logic
    const filterItems = (category) =>{
        const filtered = category === 'all' ? (products) : products.filter((item)=>item.category == category)

        setFilteredItems(filtered)
        setSelectedCategory (category)
    }

    //show all products
    const showAll = () =>{
        setFilteredItems(products)
        setSelectedCategory('all')
    }

    //Sorting Logic
    const handleSortingChange = (option) =>{
        setSortOption(option)

        //logic
        let sortedItems = [...filteredItems]
        switch(option){
            case 'A-Z' : 
            sortedItems.sort((a,b)=> a.title.localeCompare(b.title))
            break;
            case 'Z-A' : 
            sortedItems.sort((a,b)=> b.title.localeCompare(a.title))
            break;
            case 'Low-High' : 
            sortedItems.sort((a,b)=> a.price - b.price)
            break;
            case 'High-Low' : 
            sortedItems.sort((a,b)=> b.price - a.price)
            break;
            default : 
            break;


        }
        setFilteredItems(sortedItems)
    }

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
            <h2 className='title'>Products</h2>

            {/* products Cards */}
            <div className="">
                <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">

                    {/* All Btns */}
                    <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
                        <button onClick={showAll}>All Products</button>
                        <button onClick={()=> filterItems('Dress')}>Clothing</button>
                        <button onClick={()=> filterItems("Hoodies")}>Hoodies</button>
                        <button onClick={()=> filterItems("Bag")}>Bag</button>
                    </div>

                    {/* Sorting Options */}
                    <div className="flex justify-end mb-4 rounded-sm">
                        <div className="bg-black p-2">
                            <FaFilter className='text-white h-4 w-4' />
                        </div>

                        <select id='sort' 
                        onChange={(e)=> handleSortingChange(e.target.value)}
                        value={sortOption}
                        className='bg-black text-white px-2 py-1 rounded-sm'>
                            <option value="default">Default</option>
                            <option value="A-Z">A-Z</option>
                            <option value="Z-A">Z-A</option>
                            <option value="Low-High">Low to High</option>
                            <option value="High-Low">High to Low</option>

                        </select>
                    </div>
                </div>

                <Cards filteredItems={filteredItems} />
            </div>
        </div>
    )
}

export default Products
