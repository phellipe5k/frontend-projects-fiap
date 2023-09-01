import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.main)`
  ${({ theme, width, height }) => css`
    width: ${width || '70%'};
    height: ${height || '10%'};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.palette.primary.main};
    position: relative;
  `}
`;

export const Input = styled(motion.input)`
  ${({ theme, width, height }) => css`
    outline: none;
    width: 100%;
    height: 100%;
    padding: 8px 24px 8px 24px;
    background-color: ${theme.palette.gallery.secondary.main};
    font-size: 1.5rem;
    border: none;
    border-radius: 4px;
  `}
`;

export const IconWrapper = styled(motion.section)`
  ${({ theme, width }) => css`
    outline: none;
    width: ${width || '2%'};
    height: 4%;
    svg {
      size: 100%;
      transition: 250ms ease-in-out;
    }
    position: absolute;
    right: 24px;
    top: 30%;
    transform: translateY(-30%);
    cursor: pointer;
    &:hover {
      svg {
        fill: ${theme.palette.gallery.primary.main};
      }
    }
  `}
`;

