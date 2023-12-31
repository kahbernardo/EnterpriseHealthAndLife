import styled from "styled-components";
import theme from "../../sets";

export const InputContainer = styled.div`
  display: flex;
  width: fit-content;
  height: 40px;
  margin: 40px;
  position: relative;
  /* min-width: 50px;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "60px"};
  color: ${theme.colors.clean.blue};
  min-height: 50px;
  border: none;
  cursor: pointer;
  justify-content: flex-start;
  align-items: center;
  margin: 5px 0; */
`;
export const Text = styled.p`
  font-size: 20px;
  color: ${(props) => props.color || theme.colors.clean.blue};
`;
export const Icon = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  left: 20px;
`;
export const Input = styled.input`
  display: flex;
  outline: none;
  border: none;
  border-radius: 30px;
  width: 40%;
  min-width: 300px;
  height: 40px;
  padding: 4px 15px 4px 65px;
  font-size: 15px;
  color: ${theme.colors.clean.grey};
`;
