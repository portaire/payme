import { useEffect, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import { Icon } from "../../atoms/Icon";
import { Input } from "../../atoms/Input";
import { SearchResult, SearchResults, Wrapper } from "./Select.styles";
import { countryList } from "./config";

interface Props {}

export const Select: Props = () => {
  const [value, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  // debounced so we dont spam the api
  const debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    console.log(debouncedValue);
  }, [debouncedValue]);

  const handleSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    setSelectedValue(e.target.textContent);
    setValue("");
  };

  return (
    <Wrapper>
      <Input
        name="country"
        label="Country"
        placeholder="Type to search"
        onChange={(e) =>
          selectedValue
            ? setSelectedValue(e.target.value)
            : setValue(e.target.value)
        }
        selectValue={value}
        value={selectedValue}
      />
      {debouncedValue && (
        <SearchResults>
          {countryList
            .filter((el) =>
              el.toLowerCase().includes(debouncedValue.toLowerCase())
            )
            .map((country) => (
              <SearchResult key={country} onClick={handleSelect}>
                {country}
              </SearchResult>
            ))}
        </SearchResults>
      )}
      <Icon type={debouncedValue ? "mag" : "chevron-down"} />
    </Wrapper>
  );
};
