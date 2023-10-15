import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderWrapperDiv } from './Layout.styled';

export default function Layout() {
  return (
    <HeaderWrapperDiv>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </HeaderWrapperDiv>
  );
}
