function Label({ label, children, id, htmlFor, optional, className }:LabelProps) {
    return (
        <label id={id} htmlFor={htmlFor} className={`${className} block text-sm leading-2 font-medium text-skin-primary`}>
            {label ? <span>{label}</span> : children}
            {optional && <span className="ml-1 font-normal text-[#C4C4C4]">(optional)</span>}
        </label>
    )
}

export default Label;

interface LabelProps {
    label?: string;
    children?: React.ReactNode;
    id?: string;
    htmlFor?: string;
    optional?: boolean;
    className?: string;
}