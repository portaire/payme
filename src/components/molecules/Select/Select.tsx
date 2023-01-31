import { useState } from 'react';
import { Icon } from '../../atoms/Icon';
import { Input } from '../../atoms/Input';
import { SearchResult, SearchResults, Wrapper } from './Select.styles';
import { countryList } from './config';

interface Props {}

export const Select: Props = ({ setFormValue, setError, error, ...props }) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');
  const searchedList = countryList.filter((el) =>
    el.toLowerCase().includes(value.toLowerCase())
  );

  const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    setError('country', '');
    setValue(e.target.innerText);
    setFormValue('country', e.target.innerText);
    setActive(false);
  };

  return (
    <Wrapper>
      <Input
        label="Country"
        placeholder="Type to search"
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => {
          setError('country', '');
          setActive(true);
        }}
        autocomplete="off"
        value={value}
        error={error}
        {...props}
      />

      {active && (
        <SearchResults>
          {searchedList.length ? (
            searchedList.map((country) => (
              <SearchResult key={country} onClick={handleSelect}>
                {country}
              </SearchResult>
            ))
          ) : (
            <SearchResult>No results</SearchResult>
          )}
        </SearchResults>
      )}

      <Icon type="chevron-down" />
    </Wrapper>
  );
};
