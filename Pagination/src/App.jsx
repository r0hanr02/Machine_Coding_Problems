import React, { useEffect, useState } from "react";
import ProductCards from "./components/ProductCards";
import { PER_PAGE_ITEM } from "./constant";
import Pagination from "./components/Pagination";

const App = () => {
  const [productData, setProductData] = useState([]);
   const [currentPage, setCurrentPage] = useState(0);
  const start = currentPage * PER_PAGE_ITEM;
  const end = start + PER_PAGE_ITEM;

  const noOfPages = Math.ceil(productData.length / PER_PAGE_ITEM);


  async function getData() {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=200");
      // ?limit=200
      const data = await res.json();
      setProductData(data.products);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  const handlePrevious=()=>{
 
setCurrentPage((prev)=>prev-1)
  }

  const handleNext=()=>{
setCurrentPage((prev)=>prev+1)
  }

  const handleChange =(n)=>{
    setCurrentPage(n)
  }
  return <div>
<h2>Products</h2>
<Pagination currentPage={currentPage} noOfPages={noOfPages} handleChange={handleChange}
handleNext={handleNext} handlePrevious={handlePrevious}
/>
    <div className="product-container">
      {productData.slice(start,end).map((product)=>(
        <ProductCards
        key={product.id} 
        product={product}/>
      ))}
    </div>
  </div>;
};

export default App;
