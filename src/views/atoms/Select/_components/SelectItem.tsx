function SelectItem({ children, className, ...props }:any) {
    return (
    <div tabIndex={-1}  name="country" id="country" className={"text-black py-2 w-full hover:bg-[#F0F8FF] cursor-pointer px-4"} {...props} onClick={() => props.onClick(children)}>
        <div>{children}</div>
        <div className="SelectItem">
    
        </div>
    </div>
    );
};

export default SelectItem;