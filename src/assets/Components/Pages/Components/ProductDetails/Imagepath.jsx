const getImagePath = (productName, category) => {
  let imagePath = "";

  switch (category) {
    case "mens":
      imagePath = `./assets/Components/Images/MensProduct/${productName}.jpg`;
      break;
    case "womens":
      imagePath = `./assets/Components/Images/WomensProduct/${productName}.jpg`;
      break;
    case "velocity":
      imagePath = `./assets/Components/Images/VelocityProduct/${productName}.jpg`;
      break;
    default:
      // Handle default case if needed
      break;
  }

  return imagePath;
};
export default getImagePath;
