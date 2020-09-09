import React from "react";
import "./OrderForm.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import Error from "./Error/Error";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must b a valid email address")
    .max(30, "Must be shorter than 30")
    .required("required"),
  adress: Yup.string()
    .min(6, "Must be more than 6 letters")
    .required("required"),
  firstname: Yup.string().required("required"),
  lastname: Yup.string().required("required"),
  phone: Yup.string()
    .required()
    .matches(/^[0-9+]+$/, "Must be only digits")
    .min(12, "Must be exactly 12 symbols")
    .max(12, "Must be exactly 12 sybmols")
    .required("required"),
});

export default function OrderForm({ cartProducts }) {
  const sendEmail = async (values) => {
    console.log(values);

    const mail = { ...values, products: [...cartProducts] };

    try {
      const data = await fetch("/email/sendmail", {
        method: "POST",
        headers: { "Content-Type": " application/json" },
        body: JSON.stringify(mail),
      });
      const fetchedData = await data.json();
      console.log(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="signup_main_section">
      <div className="signup_form">
        <div className="signup_main_part">
          <h2 className="registration_title">Check Out</h2>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              adress: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              sendEmail(values);
              resetForm();
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <div
                  className={
                    touched.firstname && errors.firstname
                      ? "error ui large input form_input"
                      : "ui input large form_input"
                  }
                >
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="Enter your firstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstname}
                  />
                  <Error
                    touched={touched.firstname}
                    message={errors.firstname}
                  />
                </div>
                <div
                  className={
                    touched.lastname && errors.lastname
                      ? "error ui large input form_input"
                      : "ui input large form_input"
                  }
                >
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Enter your lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastname}
                  />
                  <Error touched={touched.lastname} message={errors.lastname} />
                </div>
                <div
                  className={
                    touched.email && errors.email
                      ? "error ui large input form_input"
                      : "ui input large form_input"
                  }
                >
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email: Example  example@example.com"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                  />
                  <Error touched={touched.email} message={errors.email} />
                </div>
                <div
                  className={
                    touched.phone && errors.phone
                      ? "error ui large input form_input"
                      : "ui input large form_input"
                  }
                >
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Enter your phone number: Example  +37400000000"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                  />
                  <Error touched={touched.phone} message={errors.phone} />
                </div>
                <div
                  className={
                    touched.adress && errors.adress
                      ? "error ui large input form_input"
                      : "ui input large form_input"
                  }
                >
                  <input
                    id="adress"
                    name="adress"
                    type="adress"
                    placeholder="Enter your address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.adress}
                  />
                  <Error touched={touched.adress} message={errors.adress} />
                </div>
                <button
                  className="submit_button font-small weight-7"
                  type="submit"
                >
                  Check Out
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
