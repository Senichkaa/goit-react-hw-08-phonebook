import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 600;
  font-size: 20px;
  color: #8fc1a3;

  :hover {
    color: #c5cec9;
  }
  :active {
    color: #c5cec9;
  }
`;
