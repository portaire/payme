function SelectPlaceholder({ value, placeholder }:any) {
    const emptyValue = value === "";

    return (
        <div className="js-select text-md rounded-[3px] border border-gray-300 px-3 py-3">
        <div className="flex justify-between items-baseline cursor-pointer">

            <span className={`${emptyValue  ? "text-[#D4D4D4]" : ""}`}>{emptyValue ? placeholder : value}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                <path d="M4.76822 5.07813C4.36843 5.55789 3.63157 5.55789 3.23178 5.07813L0.366822 1.64019C-0.175951 0.98886 0.287204 1.91977e-07 1.13504 2.66098e-07L6.86496 7.67023e-07C7.7128 8.41143e-07 8.17595 0.988859 7.63318 1.64019L4.76822 5.07813Z" fill="black"/>
            </svg>

        </div>
        </div>
    )
}

export default SelectPlaceholder;