import '../assets/style/select-styled.scss'
import { useState } from 'react';
import Select, { components, DropdownIndicatorProps} from 'react-select';

type IProps = {
  label: string;
  onChange: (value: any) => void;
  id?: number | string;
}

interface Options {
  value: string;
  label: string;
}


const options: Options[] = [
  { value: 'germany', label: 'Germany' },
  { value: 'japan', label: 'Japan' },
  { value: 'usa', label: 'USA' },
];


const SelectStyled = ({label, onChange}: IProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const DropdownIndicator = (
    props: DropdownIndicatorProps<true>
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={isOpen ? `../src/assets/images/search.svg`: `../src/assets/images/polygon.svg`} alt="" />
      </components.DropdownIndicator>
    );
  };
  
  const check = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="label">
        <div className="label__wrapper">
          { label }
        </div>
        <Select
          className="react-select-container"
          classNamePrefix="react-select"
          onMenuOpen={check}
          onMenuClose={check}
          isSearchable={true}
          onChange={(e) => onChange(e)}
          components={{ DropdownIndicator }}
          options={options}
        />
      </div>
    
    </>
  );
}

export default SelectStyled