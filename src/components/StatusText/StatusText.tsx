import styled from '@emotion/styled';
import React from 'react';

interface IStatusText {
  status: string;
}
interface IStatusTextStyleProps {}
const StatusTextStyle = styled.p<IStatusTextStyleProps>`
  font-size: 10px;
  font-family: sans-serif;
  color: rgb(255 255 255);
  letter-spacing: 1.2px;
  position: absolute;
  z-index: 2;
  bottom: 0.5rem;
  left: 50%;
  background: #333;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  transform: translate(-50%, 0);
`;

const StatusText: React.FC<IStatusText> = ({ status }) => {
  return <StatusTextStyle>{status}</StatusTextStyle>;
};

export default StatusText;
