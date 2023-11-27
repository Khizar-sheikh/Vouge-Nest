const getImagePath = (productName, category) => {
  let imagePath = "";

  switch (category) {
    case "mens":
      imagePath = `/src/assets/Components/Images/MensProduct/${productName}.jpg`;
      break;
    case "womens":
      imagePath = `/src/assets/Components/Images/WomensProduct/${productName}.jpg`;
      break;
    case "velocity":
      imagePath = `/src/assets/Components/Images/VelocityProduct/${productName}.jpg`;
      break;
    default:
      // Handle default case if needed
      break;
  }

  return imagePath;
};
export default getImagePath;
