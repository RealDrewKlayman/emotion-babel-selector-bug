import React from "react";
import styled from "@emotion/styled";

const Child = styled.div`
  color: red;
`;

const Parent = styled.div`
  ${Child} {
    color: green;
  }
`;

export const TestComponent: React.FC = () => {
  return (
    <Parent>
      <Child>Hi</Child>
    </Parent>
  );
};

export default TestComponent;
