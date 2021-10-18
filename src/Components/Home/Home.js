import * as React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function Home() {
  return (
    <StyledDiv>
      <h1>Victorian Plumbing Tech Test</h1>
      <h2>Joe Bushnell</h2>
      <p>
        To see the air quality of different locations in the UK, search for a
        city in the search bar
      </p>
    </StyledDiv>
  );
}

export default Home;
