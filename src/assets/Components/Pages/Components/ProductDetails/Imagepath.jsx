import Mensproduct1 from "../../../Images/MensProduct/product1.jpg";
import Mensproduct2 from "../../../Images/MensProduct/product2.jpg";
import Mensproduct3 from "../../../Images/MensProduct/product3.jpg";
import WomenProduct1 from "../../../Images/WomensProduct/product1.jpg";
import WomenProduct2 from "../../../Images/WomensProduct/product2.jpg";
import WomenProduct3 from "../../../Images/WomensProduct/product3.jpg";
import VelocityProduct1 from "../../../Images/VelocityProduct/product1.jpg";
import VelocityProduct2 from "../../../Images/VelocityProduct/product2.jpg";

const images = {
  mens: {
    product1: Mensproduct1,
    product2: Mensproduct2,
    product3: Mensproduct3,
  },
  womens: {
    product1: WomenProduct1,
    product2: WomenProduct2,
    product3: WomenProduct3,
  },
  velocity: {
    product1: VelocityProduct1,
    product2: VelocityProduct2,
  },
};

const getImagePath = (productName, category) => images[category][productName];

export default getImagePath;
