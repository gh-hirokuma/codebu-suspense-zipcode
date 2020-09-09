import React, { Suspense } from "react";
import { useAsyncResource } from "use-async-resource";
import "./App.css";
import Weathers from "./components/Address";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import AddressChanger from "./components/AddressChanger";

const DEFAULT_ZIPCODE = "355-0316";

const fetchAddressByZipcode = (zipcode) => {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      fetch(
        `https://api.aoikujira.com/zip/zip.php?fmt=json&zn=${zipcode}`
      ).then((res) => resolve(res.json()));
    }, 1000);
  });
};

function App() {
  const [addressReader, getNewAddress] = useAsyncResource(
    fetchAddressByZipcode,
    DEFAULT_ZIPCODE
  );

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Weathers addressReader={addressReader} />
      </Suspense>
      <AddressChanger getNewAddress={getNewAddress} />
    </Layout>
  );
}

export default App;
