import React from "react";
import Form from "../sections/Form";
import Footer from "../sections/Footer";
import Greeting from "../sections/Greeting";

function FormPage() {
  return (
    <>
      <Greeting greetingClassName="greeting-section form-page" />
      <Form />
      <Footer />
    </>
  );
}

export default FormPage;
