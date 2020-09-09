import React from "react";
import tw from "twin.macro";

const LayoutFrame = tw.main`bg-gray-900 text-white`;
const Container = tw.section`relative h-screen container mx-auto flex flex-col justify-center items-center`;

const Layout = ({ children }) => {
  return (
    <LayoutFrame>
      <Container>{children}</Container>
    </LayoutFrame>
  );
};

export default Layout;
