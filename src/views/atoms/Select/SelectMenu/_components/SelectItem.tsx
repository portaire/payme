function SelectItem({ children, item, value,activeItem, className, ...props }:any) {
    let isActive = item && item.name.toLowerCase() === activeItem.toLowerCase();

    return (
        <div tabIndex={-1} name="country" id="country" className={`${isActive ? "bg-blue-100" : "hover:bg-[#F0F8FF]"} text-black py-2 w-full px-4`} {...props} onClick={() => props.onClick(children)}>
            <span className="cursor-default">{children}</span>
        </div>
    );
};

export default SelectItem;
