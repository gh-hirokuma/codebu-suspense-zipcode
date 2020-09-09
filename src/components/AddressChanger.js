import Loader from "./Loader";
/** @jsx jsx **/
import { jsx } from "@emotion/core";
import tw from "twin.macro";
import { Formik, Form, Field } from "formik";

const AddressChanger = ({ getNewAddress }) => {
  return (
    <Formik
      initialValues={{ zipcode: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.zipcode) {
          errors.zipcode = "Required";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          getNewAddress(values.zipcode);

          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form css={[tw`absolute bottom-0 flex flex-row w-full`]}>
          <Field
            type="text"
            name="zipcode"
            css={[tw`bg-gray-800 w-full py-2 px-4`]}
            placeholder="Input zipcode"
          />
          <button
            css={[
              tw`bg-pink-700 px-4 py-2`,
              isSubmitting && tw`bg-gray-700 text-gray-800`,
            ]}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader size={12} /> : <p>Submit</p>}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddressChanger;
