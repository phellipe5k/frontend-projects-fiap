import Button from 'components/Button';
import * as S from './style';
import HeroTypes from './types';
import { FadeScale } from 'styles/animations';

const Hero = ({ title = 'Hero' }: HeroTypes) => (
  <S.Container
    initial="hidden"
    animate="visible"
    variants={FadeScale}
    transition={FadeScale.transition}>
    <S.Main data-cy="hero">
      <S.Title>Descubra novos artistas
e suas obras</S.Title>
      <S.SubTitle>
      Uma nova geração de jovens artistas surgem
      </S.SubTitle>
      <Button width='40%'>EXPLORAR</Button>
      <S.CountersWrapper>
        <S.Counter>
          <p>+2 mil</p>
          <span>Artistas</span>
        </S.Counter>
        <S.Counter>
          <p>+7 mil</p>
          <span>Vendas</span>
        </S.Counter>
        <S.Counter>
          <p>+16 mil</p>
          <span>Avaliações</span>
        </S.Counter>
      </S.CountersWrapper>
    </S.Main>
    <S.Image src='assets/gallery-hero.svg' />
  </S.Container>
);

export default Hero;
