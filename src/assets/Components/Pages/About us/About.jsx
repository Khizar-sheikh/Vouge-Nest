import Layout from "./../../layout/Layout";
import Header from "./../../header/Header";
import AboutUs from "./AboutContent";

function About() {
  return (
    <div>
      <Layout>
        <Header title="About us " />
        <AboutUs />
      </Layout>
    </div>
  );
}

export default About;
