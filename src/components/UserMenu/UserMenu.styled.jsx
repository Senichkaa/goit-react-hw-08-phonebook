import styled from '@emotion/styled';

export const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const HelloUserP = styled.p`
  font-weight: 600;
`;

export const LogOutButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #8fc1a3;
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;

  :hover {
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
    background-color: #e0dede;
  }
`;
