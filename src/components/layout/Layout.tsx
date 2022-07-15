import React from 'react';
import styled from 'styled-components';

import SideBar from './SideBar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
    <>
      <Header />
      <SideBar />
      <Main>{children}</Main>
    </>
  );
}

const Main = styled.main``;

export default Layout;