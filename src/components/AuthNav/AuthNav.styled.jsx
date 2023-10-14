import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 600;
  color: #415449;
  :hover {
    color: #84b096;
  }
  :active {
    color: #6c8074;
  }
`;