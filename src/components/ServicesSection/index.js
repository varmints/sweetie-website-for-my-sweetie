import React from "react";

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
