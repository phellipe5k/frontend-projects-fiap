import * as S from './style';
import ButtonTypes from './types';
import { FadeScale } from 'styles/animations';

const Button = ({ children = 'Button', width, height }: ButtonTypes) => (
  <S.Container
    initial="hidden"
    animate="visible"
    variants={FadeScale}
    width={width}
    height={height}
    transition={FadeScale.transition}>
    <S.Label data-cy="button">{children}</S.Label>
  </S.Container>
);

export default Button;
