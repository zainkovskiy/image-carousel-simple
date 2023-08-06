import React from 'react';
import { IImage } from '../../types/imageType';
import styled from '@emotion/styled';

interface IBackgroundStyleProps {
  $url?: string,
}
const BackgroundStyle = styled.div<IBackgroundStyleProps>`
  background-image: url(${({ $url }) => $url && $url});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(5px);
  opacity: 0.6;
`
interface IImageItem { 
  url: string,
}

const Background: React.FC<IImageItem> = ({ url }) => {
  return (
    <BackgroundStyle $url={url}
    >
    </BackgroundStyle>
  );
};
export default Background;