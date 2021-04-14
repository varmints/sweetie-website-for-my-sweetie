import React from "react";
import Icon1 from "../../images/undraw_Location_search.svg";
import Icon2 from "../../images/undraw_Appreciation.svg";
import Icon3 from "../../images/undraw_Social_life.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const ServicesSection = () => {
  return (
    <>
      <ServicesContainer>
        <ServicesH1>Our services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>First month</ServicesH2>
            <ServicesP>True love</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Second month</ServicesH2>
            <ServicesP>Live together</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Third month</ServicesH2>
            <ServicesP>True love</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default ServicesSection;
