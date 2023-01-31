function SelectItem({ children, item, value,activeItem, className, ...props }:any) {
    let isActive = item.name.toLowerCase() === activeItem.toLowerCase();

    return (
    <div tabIndex={-1} name="country" id="country" className={`${isActive ? "bg-blue-200" : "hover:bg-[#F0F8FF]"} text-black py-2 w-full cursor-pointer px-4`} {...props} onClick={() => props.onClick(children)}>
        <div>{children}</div>
    </div>
    );
};

export default SelectItem;