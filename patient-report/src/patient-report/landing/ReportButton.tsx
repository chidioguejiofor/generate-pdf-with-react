import { css } from "@emotion/react";
import styled from "@emotion/styled";

type BtnProps = {
  btncolor?: string;
  hovercolor?:string;
};
const parseBtnStyles = (props: BtnProps) => css`
  background: ${props.btncolor || "#207be4"};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 32px;
  min-height: 60px;
  max-width: 300px;
  text-decoration: none;
  vertical-align: middle;
  appearance: button;
  text-rendering: auto;
  cursor: pointer;
  &:hover {
    background: ${props.hovercolor || "#1f6dc5"};
  }

  &:disabled {
    background: lightgray;
    cursor: not-allowed;
  }
`;
const Button = styled.button<BtnProps>`
  ${(props) => parseBtnStyles(props)}
`;

export const LinkButton = styled.a<BtnProps>`
  ${(props) => parseBtnStyles(props)}
`;

export default Button;
