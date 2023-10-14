import { StyledNavLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </div>
  );
}
