import Input from "views/atoms/Input/Input";
import SelectItem from "./SelectItem";

function SelectMenu({ handleSearchChange, data , filteredData, value, setValue, setOpen, onChange}:any) {
    return (
        <div className="absolute top-0 max-h-[300px] bg-white  w-full">
        <div className="relative">

            {/* add icon */}
            <Input className="w-full" placeholder="Type to search" value={value} onChange={(e:any) => handleSearchChange(e)}  name="country"/>
            <div className="absolute max-h-[300px] bg-white overflow-y-auto">
            {data && data.length > 0 && filteredData.map((item: any) => {
                return <SelectItem key={item.code} value={item.code} tabIndex={-1} onClick={(e:any) => {setValue(item.name); setOpen(false); onChange(e)}}>{item.name}</SelectItem>
            })}
            </div>

        </div>
        </div>
    )
}

export default SelectMenu;