import * as S from './style';
import SearchBarTypes from './types';
import { FadeScale } from 'styles/animations';
import { Search as SearchIcon } from '@styled-icons/bootstrap';

const SearchBar = ({ placeHolder = 'Buscar', width, height }: SearchBarTypes) => (
  <S.Container
    initial="hidden"
    animate="visible"
    variants={FadeScale}
    width={width}
    height={height}
    transition={FadeScale.transition}>
      <S.Input placeholder={placeHolder} />
      <S.IconWrapper>
        <SearchIcon color='grey' width={'100%'} />
      </S.IconWrapper>
  </S.Container>
);

export default SearchBar;
