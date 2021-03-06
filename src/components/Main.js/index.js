// That is the component that changes when the user 
// switches between pages

import { lazy, Suspense } from "react";
import styled from "styled-components";
import Loading from "../StyledComponent/Loading";
const Content = lazy(() => import("../__Router"));

const Main = () => {
  return (
    <StyledMain>
      <Suspense fallback={<Loading />}>
        <Content />
      </Suspense>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.main`
  width: 100vw;
  min-height: calc(100vh - 140px);
`;
