import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Background from '../Background/Background';
import styled from '@emotion/styled';
import Image from '../Image/Image';
import Button from '../Button/Button';

interface IImage {
  url: string,
}

interface IImageList {
  images: IImage[],
  width: number,
  height: number,
  cover?: boolean,
}
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};
interface IGalaryStyleProps {
  width?: number,
  height?: number,
}
const GalaryStyle = styled.div<IGalaryStyleProps>`
  position: relative;
  overflow: hidden;
  width: ${({ width }) => width ? width + 'px' : '100%'};
  height: ${({ height }) => height ? height + 'px' : '100%'};
  background-color: #000;
`

const Galary: React.FC<IImageList> = (props) => {
  const { images, width, cover, height } = props;
  const [[page, direction], setPage] = React.useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  
  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <GalaryStyle width={width} height={height}>
      {
        cover &&
        <Background
          url={images[imageIndex].url}
        />
      }
      <AnimatePresence initial={false} custom={direction}>
        <Image direction={direction} url={images[imageIndex].url} />
      </AnimatePresence>
      <Button
        stick='right'
        onClick={() => paginate(1)}
      />
      <Button
        stick='left'
        onClick={() => paginate(-1)}
      />
    </GalaryStyle>
  );
};
export default Galary;