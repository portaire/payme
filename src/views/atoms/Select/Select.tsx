import React, { useState, useEffect } from "react";

import SelectMenu from "./_components/SelectMenu";
import SelectPlaceholder from "./_components/SelectPlaceholder";


// TODO: Make search optional based on booolean
function Select({ placeholder, label, data, onChange }:any) {
    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (event: any) => {
        setSearchValue(event.target.value);
        onChange(event)
    };
    
    const filteredData = data.filter((item: any) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    useEffect(() => {
        const handleClick = (event: any) => {
            if (!event.target.closest('.js-select')) {
                setOpen(false);
            }
        }
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);
    
    return (
        <div className="relative">
            <div onClick={() => setOpen(!open)}>
                <label htmlFor="email" className="block text-sm mb-1 leading-2 font-medium text-skin-primary">
                    Country
                </label>

                {placeholder && 
                    <SelectPlaceholder value={value} placeholder={placeholder} />
                }
            </div>

            {open && 
                <SelectMenu 
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

