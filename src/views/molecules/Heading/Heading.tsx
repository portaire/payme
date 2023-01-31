import { Link } from "react-router-dom";
import Button from "views/atoms/Button/Button";

function Heading({ title }:any) {
    return (
        <header>
        <div className="h-[1px] bg-[#111] mb-5 w-full"></div>
        <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-medium uppercase">{title}</h2>
            
            <Link to="/agents">View All</Link>
        </div>
        </header>
    )
}

export default Heading;