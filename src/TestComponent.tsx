import React from "react";
import { styled } from "@mui/material/styles";

export const checkTransientProps =
  (cssItems: string | string[]) => (props: string) => {
    if (Array.isArray(cssItems)) {
      return !cssItems.includes(props);
    }
    return props !== cssItems;
  };

export const StyledCatalogHeader = styled("div", {
  shouldForwardProp: checkTransientProps("colors"),
})`
  position: relative;
`;

export const StaticWrapper = styled("div")`
  display: flex;
  overflow: hidden;
  flex-flow: column;
  width: 100%;
  height: calc(100vh - 6rem);
  ${StyledCatalogHeader} {
    padding: 0 1.6rem 1.6rem 1.6rem;
    margin: 0 -1.6rem;
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
