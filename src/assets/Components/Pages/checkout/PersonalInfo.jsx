import { Formik, Form, Field, ErrorMessage } from "formik";

const PersonalInfo = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First name is required";
    }

    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    if (!values.streetAddress) {
      errors.streetAddress = "Street address is required";
    }

    if (!values.city) {
      errors.city = "City is required";
    }

    if (!values.region) {
      errors.region = "State / Province is required";
    }

    if (!values.country) {
      errors.country = "Country is required";
    }

    if (!values.postalCode) {
      errors.postalCode = "ZIP / Postal code is required";
    }

    return errors;
  };

  return (
    <div className="order-1 dark:text-white">
      <div className="border-b border-gray-900/10 pb-12 p-9 ">
        <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 ">
          Personal Information
        </h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            streetAddress: "",
            city: "",
            region: "",
            country: "",
            postalCode: "",
          }}
          validate={validate}
        >
          <Form className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6  dark:text-whi"
              >
                First name
              </label>
              <Field
                type="text"
                name="firstName"
                id="firstName"
                className="block px-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 "
              >
                Last name
              </label>
              <Field
                type="text"
                name="lastName"
                id="lastName"
                className="block px-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 "
              >
                Email address
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="block px-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="streetAddress"
                className="block text-sm font-medium leading-6 "
              >
                Street Address
              </label>
              <Field
                type="text"
                name="streetAddress"
                id="streetAddress"
                className="block px-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="streetAddress"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 "
              >
                City
              </label>
              <Field
                type="text"
                name="city"
                id="city"
                className="block px-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="city"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 "
              >
                State / Province
              </label>
              <Field
                type="text"
                name="region"
                id="region"
                className="block px-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="region"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 "
              >
                Country
              </label>
              <Field
                type="text"
                name="country"
                id="country"
                className="block px-4 w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="country"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium leading-6 "
              >
                ZIP / Postal code
              </label>
              <Field
                type="text"
                name="postalCode"
                id="postalCode"
                className="block px-4 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage
                name="postalCode"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default PersonalInfo;
