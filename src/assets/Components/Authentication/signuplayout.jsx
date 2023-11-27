import Layout from "./../layout/Layout";
import SignUpForm from "./signup";
function Signuplayout() {
  return (
    <Layout>
      <div style={{ height: "75vh" }} className="flex items-center">
        <SignUpForm />
      </div>
    </Layout>
  );
}

export default Signuplayout;
