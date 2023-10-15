import styled from '@emotion/styled';

export const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  max-width: 320px;
  margin-top: 20px;
  background-color: rgba(44, 51, 47, 0.6);
  border-radius: 6px;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: #8fc1a3;
`;

export const LoginInput = styled.input`
  padding: 8px;
  border: 1px solid #8fc1a3;
  border-radius: 6px;
  font-size: 16px;
  margin-top: 5px;
  width: 300px;
`;

export const LoginButton = styled.button`
  border-radius: 6px;
  border: 1px solid #8fc1a3;
  font-size: 14px;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;

  :hover {
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
    background-color: #e0dede;
  }
`;
