import { NaviStyledNavLink } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NaviStyledNavLink to="/">PhoneBook</NaviStyledNavLink>
      {isLoggedIn && (
        <NaviStyledNavLink to="/contacts">Contacts</NaviStyledNavLink>
      )}
    </nav>
  );
};
