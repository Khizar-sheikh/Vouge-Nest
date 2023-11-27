import Layout from "./../layout/Layout";
import SignInForm from "./signin ";
function Signinlayout() {
  return (
    <Layout>
      <div style={{ height: "75vh" }} className="flex items-center ">
        <SignInForm />
      </div>
    </Layout>
  );
}

export default Signinlayout;
