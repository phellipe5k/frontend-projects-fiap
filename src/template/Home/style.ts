import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.main)`
  ${({ theme, width, height }) => css`
    width: 100vw;
    display: flex;
    flex-direction: column;
  `}
`;

export const Label = styled(motion.span)`
  font-size: 14px;
  padding: 2% 0;
  font-weight: 800;
  letter-spacing: 1.5px;
`;

export const Header = styled(motion.header)`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled(motion.div)`
  font-size: 34px;
  font-weight: 800;
`;

export const SecondSection = styled(motion.div)`
  ${({ theme, width, height }) => css`
    width: 100%;
    height: 420px;
    display: flex;
    justify-content: space-around;
    // margin-top: 80px;

  `}
`;

export const GalleryPhotos = styled(motion.div)`
  ${({ theme, width, height }) => css`
    width: 60%;
    height: 90%;
    display: flex;
    justify-content: space-around;
  `}
`;

export const SloganCall = styled(motion.div)`
    ${({ theme, width, height }) => css`
    width: 30%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `}

`;
export const Image = styled(motion.img)`
  width: 25%;
`;

export const Text = styled(motion.h3)`
  font-size: 36px;
  font-weight: 500;
  width: 75%;
  margin-bottom: 18px;
`
