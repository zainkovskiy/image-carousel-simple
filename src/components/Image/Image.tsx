import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

interface IImageItem {
  direction: number,
  url: string,
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
const ImageStyle = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
`
const Image: React.FC<IImageItem> = ({ direction, url }) => {
  return (
    <ImageStyle
      className='image-carousel__img'
      key={url}
      src={url}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }}
    />
  );
};
export default Image;