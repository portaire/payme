import SelectItem from "./SelectItem";

function SelectMenuResult({ open, data, filteredData, value, setValue, setOpen, onChange}:any) {
    const noResults = filteredData.length === 0;
    const filterDataHasResults = data && data.length > 0

    return (
        <div className={`${open ? "border border-[#0066FF]" : ""} select__menu absolute top-[47px] w-full z-10 border-t-1 border-t-[#F9F9F9] rounded-bl-[3px] rounded-br-[3px] max-h-[200px] bg-white overflow-y-auto`}>

            {filterDataHasResults && 
                filteredData.map((item: any) => {
                    return (
                        <SelectItem 
                            key={item.code} 
                            item={item} 
                            activeItem={value} 
                            value={item.code}
                            tabIndex={-1} 
                            onClick={(e:any) => {setValue(item.name); setOpen(false); onChange(e)}}
                        >
                            {item.name}
                        </SelectItem>
                    )
                })
            }

            {noResults && <SelectItem>No Result Found</SelectItem>}
            
        </div>
    )
}

export default SelectMenuResult