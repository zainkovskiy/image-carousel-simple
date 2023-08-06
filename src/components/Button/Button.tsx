import styled from '@emotion/styled';
import React from 'react';

interface IButton {
  onClick: () => void,
  stick: 'left' | 'right',
}
interface IButtonStyleProps {
  stick: string,
}
const ButtonStyle = styled.div<IButtonStyleProps>`
  position: absolute;
  z-index: 99;
  top: 0;
  ${({ stick }) => stick}: 0;
  bottom: 0;
  width: 10%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color .3s;
  &:hover{
    background-color: #00000054;
  }
  &:hover svg{
    opacity: 1;
  }
  & svg {
    fill: #fff;
    opacity: 0.5;
    ${({ stick }) => stick === 'right' && 'transform: rotate(180deg);'};
    transition: opacity .3s;
  }
`
const Button: React.FC<IButton> = ({ onClick, stick }) => {
  return (
    <>
      <ButtonStyle onClick={onClick} stick={stick}>
        button
      </ButtonStyle>
    </>
  );
};

export default Button;