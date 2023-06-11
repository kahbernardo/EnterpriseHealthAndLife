import styled from "styled-components";
import theme from "../../sets";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  height: 100%;
  max-height: 100vh;
  padding: 0 20px;
  background-color: white;
  box-shadow: 7px 0px 7px 0px rgba(0, 0, 0, 0.18);
  align-items: flex-start;
  box-sizing: border-box;
`;
export const MenuMainButton = styled.div`
  display: flex;
  width: 90%;
  height: fit-content;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const MenuCustomButtons = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  min-height: 50px;
  flex-direction: column;
`;
export const MenuItemLabel = styled.p`
  display: flex;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 40px;
  color: ${theme.colors.clean.grey};
`;
