import styled from '@emotion/styled';
import React from 'react';
import arrowUrl, { ReactComponent as ArrowIcon } from '../../images/arrow.svg';
// import { ArrowIcon } from '../Icons';
interface IButton {
  onClick: () => void;
  stick: 'left' | 'right';
}
interface IButtonStyleProps {
  stick: string;
}
const ButtonStyle = styled.div<IButtonStyleProps>`
  position: absolute;
  z-index: 99;
  top: 0;
  ${({ stick }) => stick}: 0;
  bottom: 0;
  width: 10%;
  min-width: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
  &:hover {
    background-color: #00000054;
  }
  &:hover svg {
    opacity: 1;
  }
  & svg {
    width: 100%;
    height: 100%;
    stroke: #fff;
    opacity: 0.5;
    ${({ stick }) => stick === 'right' && 'transform: rotate(180deg);'};
    transition: opacity 0.3s;
  }
`;
const Button: React.FC<IButton> = ({ onClick, stick }) => {
  return (
    <>
      <ButtonStyle onClick={onClick} stick={stick}>
        <ArrowIcon />
      </ButtonStyle>
    </>
  );
};

export default Button;
