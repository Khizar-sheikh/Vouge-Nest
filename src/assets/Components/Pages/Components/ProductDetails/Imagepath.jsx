import Mensproduct1 from "../../../Images/MensProduct/product1.webp";
import Mensproduct2 from "../../../Images/MensProduct/product2.webp";
import Mensproduct3 from "../../../Images/MensProduct/product3.webp";
import Mensproduct4 from "../../../Images/MensProduct/product4.webp";
import Mensproduct5 from "../../../Images/MensProduct/product5.webp";
import Mensproduct6 from "../../../Images/MensProduct/product6.webp";
import Mensproduct7 from "../../../Images/MensProduct/product3.webp";
import Mensproduct8 from "../../../Images/MensProduct/product4.webp";
import Mensproduct9 from "../../../Images/MensProduct/product5.webp";
import Mensproduct10 from "../../../Images/MensProduct/product6.webp";
import WomenProduct1 from "../../../Images/WomensProduct/product1.webp";
import WomenProduct2 from "../../../Images/WomensProduct/product2.webp";
import WomenProduct3 from "../../../Images/WomensProduct/product3.webp";
import WomenProduct4 from "../../../Images/WomensProduct/product4.webp";
import WomenProduct5 from "../../../Images/WomensProduct/product5.webp";
import WomenProduct6 from "../../../Images/WomensProduct/product6.webp";
import WomenProduct7 from "../../../Images/WomensProduct/product3.webp";
import WomenProduct8 from "../../../Images/WomensProduct/product4.webp";
import WomenProduct9 from "../../../Images/WomensProduct/product5.webp";
import WomenProduct10 from "../../../Images/WomensProduct/product6.webp";
import VelocityProduct1 from "../../../Images/VelocityProduct/product1.webp";
import VelocityProduct2 from "../../../Images/VelocityProduct/product2.webp";

const images = {
  mens: {
    product1: Mensproduct1,
    product2: Mensproduct2,
    product3: Mensproduct3,
    product4: Mensproduct4,
    product5: Mensproduct5,
    product6: Mensproduct6,
    product7: Mensproduct7,
    product8: Mensproduct8,
    product9: Mensproduct9,
    product10: Mensproduct10,
  },
  womens: {
    product1: WomenProduct1,
    product2: WomenProduct2,
    product3: WomenProduct3,
    product4: WomenProduct4,
    product5: WomenProduct5,
    product6: WomenProduct6,
    product7: WomenProduct7,
    product8: WomenProduct8,
    product9: WomenProduct9,
    product10: WomenProduct10,
  },
  velocity: {
    product1: VelocityProduct1,
    product2: VelocityProduct2,
    product10: VelocityProduct2,
    product7: VelocityProduct1,
    product8: VelocityProduct1,
    product9: VelocityProduct2,
  },
};

const getImagePath = (productName, category) => images[category][productName];

export default getImagePath;
