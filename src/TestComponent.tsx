import React from "react";
import styled from "@emotion/styled";

export const Child = styled.div({
  color: "blue",
});

export const Parent = styled.div({
  color: "green",
  [Child as any]: {
    color: "orange",
  },
});

export const TestComponent: React.FC = () => {
  return (
    <Parent>
      <Child>Hi</Child>
    </Parent>
  );
};

export default TestComponent;
