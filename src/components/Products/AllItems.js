// import React, { useState } from "react"
// import Dcards from "./Dcard"
// import "./Products.css"
// import Sdata from "./Sdata"

// const AllItem = () => {
//   const [items, setIems] = useState(Sdata)
//   return (
//     <>
//       <section className='gallery desi mtop'>
//         <div className="producttitle">


//         </div>
//         <div className='container'>
//           <h3 className="mb-4">Books</h3>
//           <div className='content grid'>
//             {items.map((item) => {
//               return <Dcards key={item.slug} item={item} />
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default AllItem



import React, { useEffect, useState } from "react";
import Dcards from "./Dcard";
import "./Products.css";
import Sdata from "./Sdata";
import Api from "../../Api/Api";
import { useLocation,useParams } from 'react-router-dom';

const AllItem = () => {
  // const [items, setItems] = useState(Sdata);
  const [books,setBooks]=useState([])
  const [items, setItems] = useState(books); 
  const location = useLocation();
  let { category } = useParams();
  const { id } = location.state;
  const [subcategory, setSubcategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All'); // State to keep track of active category

  // Function to filter items based on category
  const filterItems = (subcategoryId,subcategoryname) => {
    if (subcategoryname === "All") {
      setItems(books); // If "All" is selected, show all items
    } else {
      const filteredItems = books.filter(item => item.subCategoryById === subcategoryId);
      setItems(filteredItems); // Filter items based on selected category
    }
    setActiveCategory(subcategoryname); // Set active category
  };

  useEffect(() => {
    Api.subcategorylist(id).then(res => {
      if (res.status === "Success") {
        setSubcategory(res.data)
      }
    })
  }, [id])
  useEffect(() => {
    Api.bookslist(id).then(res => {
      if (res.status === "Success") {
        setBooks(res.data)
        setItems(res.data)
      }
    })
  }, [id])

  let categoryname = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <section className='gallery desi mtop'>
        <div className="producttitle">
          <h3 className="mb-4">{categoryname}</h3>
          <div className="categories">
            {/* Button for each category */}
            <button className={`btn ${activeCategory === "All" && "active"}`} onClick={() => filterItems("","All")}>All</button>
            {subcategory.map(item => (
              <button className={`btn ${activeCategory === item.subCategoryName && "active"}`} key={item.subCategoryName} onClick={() => filterItems(item._id,item.subCategoryName)}>
                {item.subCategoryName}
              </button>
            ))}
          </div>
        </div>
        <div className='container'>
          <div className='content grid'>
            {items.map((item,ind) => {
             return <Dcards key={ind} item={item} categoryname={category} />
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllItem;



