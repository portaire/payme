import React, { useState, useEffect, useRef } from "react";
import Label from "../Label/Label";

import SelectMenu from "./_components/SelectMenu";
import SelectPlaceholder from "./_components/SelectPlaceholder";


// TODO: Make search optional based on booolean
function Select({ placeholder, label, data, onChange, search }:SelectProps) {

    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const filteredData = data.filter((item: any) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const handleSearchChange = (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        setSearchValue(event.target.value);
        onChange(event)
    };
    
    useEffect(() => {
        const handleClick = (event: any) => {
            if (!event.target.closest('.js-select')) {
                setOpen(false);
                setSearchValue("");
            }
        }
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [open, searchValue]);

    return (
        <div className="relative">

            <div onClick={() => setOpen(!open)}>
                {label && <Label title={label} /> }
                {placeholder && <SelectPlaceholder value={value} placeholder={placeholder} />}
            </div>

            {open && 
                <SelectMenu
                    open={open}
                    handleSearchChange={handleSearchChange} 
                    data={data}
                    value={value}
                    filteredData={filteredData}
                    setValue={setValue}
                    setOpen={setOpen}
                    onChange={onChange}
                /> 
            }

        </div>
    );
}
export default Select;

type SelectProps = {
    id?: string;
    name?: string;
    placeholder?: string;
    label?: string;
    data: { name: string; code: string }[];
    onChange?: any;
    search?: boolean;
  };