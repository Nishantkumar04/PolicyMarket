    // import { useNavigate } from "react-router-dom";
    // import PropTypes from 'prop-types'; // Import PropTypes
    // import '../../App.css'; // Assuming your custom CSS is in App.css

    // const CategoryCard = ({ category }) => {
    //     const navigate = useNavigate();

    //     return (
    //         <div
    //             className="card border-2 shadow-sm position-relative overflow-hidden text-center"
    //             style={{
    //                 borderRadius: "10px",
    //                 transition: "all 0.3s ease",
    //                 cursor: "pointer",
    //             }}
    //             onClick={() => navigate(`/policy?category=${category?.name}`)}
    //         >
    //             {/* Offer Badge */}
    //             <div
    //                 className="position-absolute top-0 end-0 rounded-start py-2 px-2"
    //                 style={{
    //                     top: 10,
    //                     backgroundColor: "#ffcc00", // Yellow background for the badge
    //                     color: "#fff", // White text color
    //                     fontWeight: "bold",
    //                     zIndex: 10,
    //                 }}
    //             >
    //                 {category.offer}
    //             </div>

    //             {/* Card Body */}
    //             <div className="card-body d-flex flex-column align-items-center justify-content-center mt-2">
    //                 {/* Category Name as Heading */}
    //                 <h5 className="card-title mb-3 fw-bold">{category.name}</h5>

    //                 {/* Card Image */}
    //                 <img
    //                     src={category.logo}
    //                     alt={category.name}
    //                     className="card-img-top"
    //                     style={{
    //                         height: "70px",
    //                         width: "100px",
    //                         marginBottom: "10px",
    //                     }}
    //                 />

    //                 {/* Description */}
    //                 <p className="card-text text-muted">
    //                     {category.description}
    //                 </p>
    //             </div>
    //         </div>
    //     );
    // };

    // // Prop types validation
    // CategoryCard.propTypes = {
    //     category: PropTypes.shape({
    //         name: PropTypes.string.isRequired,
    //         offer: PropTypes.string.isRequired,
    //         logo: PropTypes.string.isRequired,
    //         description: PropTypes.string.isRequired,
    //     }).isRequired,
    // };

    // export default CategoryCard;



    const CategoryCard = ({ category }) => {
        return (
          <div
            className="category-card"
            style={{
              background: "linear-gradient(145deg, #1f1f1f, #292929)",
              borderRadius: "1.5rem",
              boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.4), -4px -4px 10px rgba(255, 255, 255, 0.05)",
              padding: "1.5rem",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              textAlign: "center",
              color: "#fff",
              height: "100%",
            }}
          >
            {/* Icon/Image */}
            <div
              className="category-icon mb-3"
              style={{
                width: "80px",
                height: "80px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#333",
                borderRadius: "50%",
              }}
            >
              <img
                src={category.image || "/placeholder-icon.svg"} // Default icon if image is missing
                alt={category.name}
                style={{ width: "50px", height: "50px" }}
              />
            </div>
      
            {/* Title */}
            <h4 className="category-title mb-2" style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
              {category.name}
            </h4>
      
            {/* Description */}
            <p className="category-description mb-4" style={{ fontSize: "0.9rem", color: "#bdbdbd" }}>
              {category.description || "Explore this category for more information!"}
            </p>
      
            {/* Action Button */}
            <button
              className="btn btn-primary px-4 py-2"
              style={{
                backgroundColor: "#00a859",
                border: "none",
                borderRadius: "0.5rem",
                fontWeight: "bold",
              }}
              onClick={() => alert(`Explore more about ${category.name}!`)}
            >
              Explore
            </button>
          </div>
        );
      };
      
      export default CategoryCard;
      