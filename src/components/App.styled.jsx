import styled from '@emotion/styled';

export const Input = styled.input`
  display: flex;
  padding: 8px;
  border: 1px solid #8fc1a3;
  border-radius: 6px;
  font-size: 16px;
  margin-top: 5px;
  width: 300px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  max-width: 320px;
  margin: 0 auto;
  background-color: rgba(44, 51, 47, 0.6);
  border-radius: 6px;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  z-index: 2;
`;

export const Button = styled.button`
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

export const InputList = styled.input`
  display: flex;
  padding: 8px;
  border: 1px solid #8fc1a3;
  border-radius: 6px;
  font-size: 16px;
  margin-top: 5px;

  width: 300px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: #8fc1a3;
`;

export const Header = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  color: #8fc1a3;
`;
export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #8fc1a3;
  font-size: 14px;
  padding: 10px 20px;
  cursor: pointer;
  margin-left: 15px;

  :hover {
    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
    background-color: #e0dede;
  }
`;

export const HOneStart = styled.h1`
  font-weight: 600;
  color: #8fc1a3;
`;

export const ContactFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: #8fc1a3;
`;

export const FilterDivWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  width: 330px;
  margin: 0 auto;
  background-color: rgba(44, 51, 47, 0.6);
  border-radius: 6px;
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const FilterLi = styled.li`
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #8fc1a3;
`;

export const FilterUl = styled.ul`
  max-width: 800px;
  padding: 0;
  margin: 0;
`;

export const ContactsDivWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
