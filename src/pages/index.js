import * as React from "react";
import ComponentOne from "../components/compenentOne";
import ComponentTwo from "../components/componentTwo";
import ComponentThree from "../components/ComponentThree";
import "./index.scss";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
const IndexPage = () => {
  return (
    <>
      <Layout>
        <div className="Container">
          <div className="Container__One">
            <ComponentOne />
          </div>
          <div className="Container__Two">
            <ComponentTwo />
          </div>
          <div className="Container__Three">
            <ComponentThree />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Smooth component scrolling</title>;
