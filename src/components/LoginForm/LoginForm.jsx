import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  LogInForm,
  LoginLabel,
  LoginInput,
  LoginButton,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LogInForm onSubmit={handleSubmit} autoComplete="off">
      <LoginLabel>
        Email
        <LoginInput type="email" name="email" placeholder="Enter your e-mail" />
      </LoginLabel>
      <LoginLabel>
        Password
        <LoginInput
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </LoginLabel>
      <LoginButton type="submit">Log In</LoginButton>
    </LogInForm>
  );
};
