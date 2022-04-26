import React from "react";
import { styled } from "@mui/material/styles";

export const StyledCatalogHeader = styled("div")`
  color: blue;
`;

export const StaticWrapper = styled("div")`
  color: green;
  ${StyledCatalogHeader} {
    color: orange;
  }
`;

export const TestComponent: React.FC = () => {
  return (
    <StaticWrapper>
      <StyledCatalogHeader>Hi</StyledCatalogHeader>
    </StaticWrapper>
  );
};

export default TestComponent;
