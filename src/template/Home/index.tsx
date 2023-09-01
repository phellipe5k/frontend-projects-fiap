import Button from 'components/Button';
import SearchBar from 'components/SearchBar';
import * as S from './style';
import Hero from 'components/gallery/Hero';
const GalleryTemplate = () => {
  return <S.Container>
      <S.Header>
        <S.Logo>Art.</S.Logo>
        <SearchBar width='60%' height='37%' />
        <Button width='13%' height='37%'>ENTRAR</Button>
      </S.Header>
      <Hero />
      <S.SecondSection>
        <S.GalleryPhotos>
          <S.Image src='assets/first-gall.svg' />
          <S.Image src='assets/second-gall.svg' />
          <S.Image src='assets/third-gall.svg' />
        </S.GalleryPhotos>
        <S.SloganCall>
          <S.Text>Confira as
ultimas coleções</S.Text>
          <Button>VER MAIS</Button>
        </S.SloganCall>
      </S.SecondSection>
  </S.Container>;
};

export default GalleryTemplate;
