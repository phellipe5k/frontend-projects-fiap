import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.main)`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 70px;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: ${theme.palette.primary.main};
  `}
`;

export const Main = styled(motion.main)`
  width: 50%;
  height: 100%;
`;

export const Image = styled(motion.img)``;

export const Title = styled(motion.h1)`
  ${({ theme }) => css`
    font-size: 6rem;
    padding: 0;
    color: ${theme.palette.common.black};
  `}
`;

export const SubTitle = styled(motion.h2)`
  ${({ theme }) => css`
    font-size: 2.7rem;
    padding: 2% 0 6% 0;
    color: ${theme.palette.lighter.main};
  `}
`;

export const CountersWrapper = styled(motion.div)`
  display: flex;
  width: 60%;
  height: 70px;
  margin-top: 40px;
  justify-content: space-between;
`;

export const Counter = styled(motion.div)`
  ${({ theme }) => css`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${theme.palette.common.black};
    p {
      font-size: 26px;
      font-weight: bolder;
    }

    span {
      color: ${theme.palette.lighter.contrastText};
      font-size: 14px;
    }
  `}
`;
