import React from "react";
import Container from "../_components/Container";
import Accordian from "./_components/Accordian";

const Page = () => {
  return (
    <div>
      <Container>
        <div>
          <div className="tw-my-3">
            <h2 className="tw-text-center tw-font-bold tw-text-3xl">Accordian</h2>
          </div>
          <div>
            <Accordian />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
