import './select.css';
import { useState } from 'react';
import Select, { components, DropdownIndicatorProps } from 'react-select';
import { Icon } from 'components/icon/icon';
import { SelectProps, SelectOption } from './types';

export const SelectComponent: React.FC<SelectProps> = ({ options, onChange, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null);
  const [optionsOpen, setOptionsOpen] = useState(false);

  const showSearchIcon = optionsOpen || !Boolean(selectedOption?.label);

  const DropdownIndicator = (props: DropdownIndicatorProps) => {
    return (
      <components.DropdownIndicator {...props}>
        {showSearchIcon ? <Icon name="search" /> : <Icon name="chevron-down" />}
      </components.DropdownIndicator>
    );
  };

  return (
    <Select
      id="payme__select"
      classNamePrefix="payme"
      backspaceRemovesValue
      escapeClearsValue
      closeMenuOnSelect
      maxMenuHeight={133}
      onMenuOpen={() => setOptionsOpen(true)}
      onMenuClose={() => setOptionsOpen(false)}
      onChange={(value) => {
        setSelectedOption(value as SelectOption);
        onChange(value as SelectOption);
      }}
      placeholder={placeholder}
      isSearchable
      components={{
        DropdownIndicator,
        IndicatorSeparator: () => null,
      }}
      options={options}
      unstyled
    />
  );
};
