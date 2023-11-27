import PropTypes from "prop-types";

function PageHeader({ title }) {
  return (
    <header className="bg-gray-300 text-gray-800 py-8 md:py-9 mb-5 grid place-content-center ">
      <h1 className="text-4xl lg:text-6xl font-bold">{title}</h1>
    </header>
  );
}

PageHeader.propTypes = {
  title: PropTypes.node.isRequired,
};
export default PageHeader;
