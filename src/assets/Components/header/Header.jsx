import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="bg-gray-300 text-gray-800 py-4  mb-3 grid place-content-center lg:py-6  ">
      <h1 className="text-5xl font-bold">{title}</h1>
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.node.isRequired,
};
export default Header;
