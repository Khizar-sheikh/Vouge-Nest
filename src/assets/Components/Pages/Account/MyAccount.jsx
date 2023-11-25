import React from "react";
import Layout from "../../layout/Layout";
import Header from './../../header/Header';
import Authentication from './../../../../SignupForm';
import SignUpForm from './../../../../../signup';
import SignInForm from './../../../../../signin ';

function MyAccount() {
  return (
    <Layout>
<Header title="My Account"/>
{/* <Authentication/> */}
<SignUpForm/>
<SignInForm/>

    </Layout>
  );
}

export default MyAccount;
