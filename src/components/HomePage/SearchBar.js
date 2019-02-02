import React from 'react';
import { SearchInput } from './styles/HomePage.styles';
import { PLACEHOLDER_SEARCH } from 'constants/text';

const SearchBar = ({ onChange }) => (
  <SearchInput placeholder={PLACEHOLDER_SEARCH} type="text" onChange={onChange} />
);

export default SearchBar;
