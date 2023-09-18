import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import Background from '../Background/Background';
import styled from '@emotion/styled';
import Image from '../Image/Image';
import Button from '../Button/Button';
import StatusText from '../StatusText/StatusText';

interface IImage {
  url: string;
}

interface IGalary {
  images: IImage[];
  width?: number;
  height?: number;
  cover?: boolean;
  status?: boolean;
}
interface IGalaryStyleProps {
  width?: number;
  height?: number;
  $zoom: boolean;
}
const GalaryStyle = styled.div<IGalaryStyleProps>`
  position: relative;
  overflow: hidden;
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: ${({ height }) => (height ? height + 'px' : '100%')};
  background-color: #000;
  ${({ $zoom }) =>
    $zoom &&
    `position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999999;`};
`;
const ZoomButton = styled.div`
  position: absolute;
  z-index: 99;
  bottom: 0.5rem;
  right: 10%;
  background-color: #fff;
`;
const Galary: React.FC<IGalary> = (props) => {
  const { images, width, cover, height, status } = props;
  const [[page, direction], setPage] = useState([0, 0]);
  const [zoom, setZomm] = useState(false);
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  const toggleZoom = () => {
    setZomm(!zoom);
  };
  return (
    <GalaryStyle width={width} height={height} $zoom={zoom}>
      {status && (
        <>
          {images.length > 0 ? (
            <StatusText status={`${imageIndex + 1}/${images.length}`} />
          ) : (
            ''
          )}
        </>
      )}
      {cover && <Background url={images[imageIndex].url} />}
      <AnimatePresence initial={false} custom={direction}>
        <Image
          direction={direction}
          url={images[imageIndex].url}
          toggleZoom={toggleZoom}
        />
      </AnimatePresence>
      <Button stick='right' onClick={() => paginate(1)} />
      <Button stick='left' onClick={() => paginate(-1)} />
    </GalaryStyle>
  );
};
export default Galary;
