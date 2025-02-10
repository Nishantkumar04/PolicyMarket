// import { useEffect, useState } from "react";
// import CategoryCard from "../Cards/CategoryCard";
// import { CategoryService } from "../../api/categoryApi";

// const CategorySection = () => {
//   const [category, setCategory] = useState([])

//   useEffect(()=>{
//     const fetchCategory = async()=>{
//       const response = await CategoryService.getAllCategory();
//       setCategory(response.data.categories)
//     }
//     fetchCategory()
//   },[])
//   return (
//     <div className="container mt-5">
//       {/* Section Title */}
//       <h2 className="text-center mb-4">We Provide Insurance</h2>

//       {/* Category Cards */}
//       <div className="row">
//         {category.map((item) => (
//           <div className="col-12 col-md-4 mb-4" key={item.id}>
//             <CategoryCard
//               category={item}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategorySection;


import { useEffect, useState } from "react";
import CategoryCard from "../Cards/CategoryCard";
import { CategoryService } from "../../api/categoryApi";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await CategoryService.getAllCategory();
      setCategories(response.data.categories);
    };
    fetchCategory();
  }, []);

  return (
    <div className="category-section container mt-5">
      {/* Section Title */}
      <h2 className="text-center mb-5 fw-bold text-white">
        We Provide Insurance
      </h2>

      {/* Category Cards */}
      <div className="row g-4 justify-content-center">
        {categories.map((item) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
            key={item.id}
          >
            <CategoryCard category={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
