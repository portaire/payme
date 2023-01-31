import React, { useEffect, useRef } from 'react';
import Input from "views/atoms/Input/Input";
import SelectItem from "./SelectItem";


function SelectMenu({ open, handleSearchChange, data , filteredData, value, setValue, setOpen, onChange}:any) {


    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if(inputRef.current !== null) {
            inputRef.current.focus();
        }
    }, [open])

    return (
        <div className="absolute -translate-y-[50px] h-[136px] z-50 bg-white w-full">
        <div className="relative">

            <Input
                ref={inputRef}
                className={`w-full js-select ${open ? "border-[#0066FF]" : ""}`} 
                placeholder="Type to search"         
                onChange={(e:any) => handleSearchChange(e)}  
                name="country"
                iconRight={`<svg class="z-50" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M12 11.3333L11.3333 12L7.87897 8.58598C7.04823 9.26175 5.98832 9.66672 4.83337 9.66672C2.16408 9.66672 0 7.50264 0 4.83336C0 2.16408 2.16408 0 4.83337 0C7.50266 0 9.66675 2.16408 9.66675 4.83336C9.66675 5.9883 9.26181 7.04821 8.586 7.87894L12 11.3333ZM4.83327 8.66665C6.95049 8.66665 8.66664 6.95051 8.66664 4.83329C8.66664 2.71608 6.95049 0.999939 4.83327 0.999939C2.71606 0.999939 0.999908 2.71608 0.999908 4.83329C0.999908 6.95051 2.71606 8.66665 4.83327 8.66665Z" fill="black"/>
            </svg>`}
            />

            <div className={`${open ? "border border-[#0066FF]" : ""} select__menu absolute top-[47px] w-full z-10 border-t-1 border-t-[#F9F9F9] rounded-bl-[3px] rounded-br-[3px] max-h-[200px] bg-white overflow-y-auto`}>
                {data && data.length > 0 && filteredData.map((item: any) => {
                    return <SelectItem key={item.code} item={item} activeItem={value} value={item.code} tabIndex={-1} onClick={(e:any) => {setValue(item.name); setOpen(false); onChange(e)}}>{item.name}</SelectItem>
                })}
                {filteredData.length === 0 && <SelectItem>No Result Found</SelectItem> }
            </div>

        </div>
        </div>
    )
}

export default SelectMenu;