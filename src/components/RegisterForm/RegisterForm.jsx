import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  RegistrationForm,
  RegisterInput,
  RegisterLabel,
  RegisterButton,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegistrationForm onSubmit={handleSubmit} autoComplete="off">
      <RegisterLabel>
        Username
        <RegisterInput type="text" name="name" placeholder="Enter your name" />
      </RegisterLabel>
      <RegisterLabel>
        Email
        <RegisterInput
          type="email"
          name="email"
          placeholder="Enter your e-mail"
        />
      </RegisterLabel>
      <RegisterLabel>
        Password
        <RegisterInput
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </RegisterLabel>
      <RegisterButton type="submit">Register</RegisterButton>
    </RegistrationForm>
  );
};
