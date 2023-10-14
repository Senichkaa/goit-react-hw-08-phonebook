import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { WrapperDiv, HelloUserP, LogOutButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <WrapperDiv>
      <HelloUserP>Hello there, {user.name}</HelloUserP>
      <LogOutButton type="button" onClick={handleLogOut}>
        Logout
      </LogOutButton>
    </WrapperDiv>
  );
};
