import React from "react";
import tw from "twin.macro";

const AddressLayout = tw.section`bg-white rounded text-gray-900`;
const AddressHeader = tw.div`flex flex-col p-4 border-b`;
const AddressHeaderTitle = tw.h2`text-lg font-semibold`;
const AddressHeaderSmall = tw.small``;
const AddressBody = tw.div`flex flex-col p-4`;
const AddressBodyGrid = tw.div`grid grid-cols-2 gap-8`;
const AddressItemsGroup = tw.div`flex flex-col mb-4`;
const AddressItemTitle = tw.p`text-sm text-gray-800`;
const AddressItemValue = tw.p``;

const Address = ({ addressReader }) => {
  const address = addressReader();

  return (
    <AddressLayout>
      <AddressHeader>
        <AddressHeaderTitle>Address Information</AddressHeaderTitle>
        <AddressHeaderSmall>
          Personal details and application.
        </AddressHeaderSmall>
      </AddressHeader>
      <AddressBody>
        <AddressBodyGrid>
          <div>
            <AddressItemsGroup>
              <AddressItemTitle>API URL</AddressItemTitle>
              <AddressItemValue>{address.API_URL}</AddressItemValue>
            </AddressItemsGroup>
            <AddressItemsGroup>
              <AddressItemTitle>Prefecture Kana</AddressItemTitle>
              <AddressItemValue>{address.ken_kana}</AddressItemValue>
            </AddressItemsGroup>
            <AddressItemsGroup>
              <AddressItemTitle>City Kana</AddressItemTitle>
              <AddressItemValue>{address.city_kana}</AddressItemValue>
            </AddressItemsGroup>
            <AddressItemsGroup>
              <AddressItemTitle>Address Kana</AddressItemTitle>
              <AddressItemValue>{address.address_kana}</AddressItemValue>
            </AddressItemsGroup>
          </div>
          <div>
            <AddressItemsGroup>
              <AddressItemTitle>State</AddressItemTitle>
              <AddressItemValue>{address.state}</AddressItemValue>
            </AddressItemsGroup>
            <AddressItemsGroup>
              <AddressItemTitle>City</AddressItemTitle>
              <AddressItemValue>{address.city}</AddressItemValue>
            </AddressItemsGroup>
            <AddressItemsGroup>
              <AddressItemTitle>Address</AddressItemTitle>
              <AddressItemValue>{address.address}</AddressItemValue>
            </AddressItemsGroup>
          </div>
          <AddressItemsGroup>
            <AddressItemTitle>Result</AddressItemTitle>
            <AddressItemValue>{address.result}</AddressItemValue>
          </AddressItemsGroup>
        </AddressBodyGrid>
      </AddressBody>
    </AddressLayout>
  );
};

export default Address;
