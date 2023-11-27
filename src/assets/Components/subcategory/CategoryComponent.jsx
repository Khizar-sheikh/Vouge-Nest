import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const CategoryComponent = ({ category, horizontalimage, verticalimage }) => {
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsHorizontal(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const containerStyle = {
    width: "100%",
    height: "110vh",
    backgroundImage: isHorizontal
      ? `url(${horizontalimage})`
      : `url(${verticalimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    marginTop: "15px",
  };

  const contentWrapperStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    width: "100vw",
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        <h2 className="text-3xl md:text-6xl lg:text-5xl text-gray-100 font-bold">
          {category}
        </h2>
      </div>
    </div>
  );
};

CategoryComponent.propTypes = {
  category: PropTypes.node.isRequired,
  horizontalimage: PropTypes.string,
  verticalimage: PropTypes.string,
};

export default CategoryComponent;
