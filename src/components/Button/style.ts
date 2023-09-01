import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.main)`
${({ theme, width, height }) => css`
    width: ${width || '50%'};
    height: ${height || '10%'};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.palette.gallery.primary.contrastText};
    cursor: pointer;
    background-color: ${theme.palette.gallery.primary.main};
    border-radius: 4px;
  `}
`;

export const Label = styled(motion.span)`
  font-size: 14px;
  padding: 2% 0;
  font-weight: 800;
  letter-spacing: 1.5px;
`;
