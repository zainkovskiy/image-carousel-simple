import styled from '@emotion/styled';
import React from 'react';

interface IStatusText {
  status: string;
  statusPositionX?: 'right' | 'left';
  statusPositionY?: 'top' | 'bottom';
}
interface IStatusTextStyleProps {
  $statusPositionX?: 'right' | 'left';
  $statusPositionY?: 'top' | 'bottom';
}
const StatusTextStyle = styled.p<IStatusTextStyleProps>`
  font-size: 10px;
  font-family: sans-serif;
  color: #fff173;
  letter-spacing: 1.2px;
  position: absolute;
  z-index: 2;
  ${({ $statusPositionY }) =>
    $statusPositionY ? $statusPositionY : 'top'}: 0.5rem;
  ${({ $statusPositionX }) =>
    $statusPositionX ? $statusPositionX : 'left'}: 0.5rem;
`;

const StatusText: React.FC<IStatusText> = ({
  status,
  statusPositionY,
  statusPositionX,
}) => {
  return (
    <StatusTextStyle
      $statusPositionY={statusPositionY}
      $statusPositionX={statusPositionX}
    >
      {status}
    </StatusTextStyle>
  );
};

export default StatusText;
