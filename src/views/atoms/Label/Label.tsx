function Label({ title, children, id, htmlFor, optional, className }:any) {
    return (
        <label htmlFor={htmlFor} className={`${className} block text-sm leading-2 font-medium text-skin-primary`}>
            {title ? title : children}

            {optional &&
                <span className="ml-1 font-normal text-[#C4C4C4]">(optional)</span>
            }
        </label>
    )
}

export default Label;