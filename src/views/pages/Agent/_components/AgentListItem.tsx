import { Link } from "react-router-dom";

import { IAgent } from "interface/IAgent";
import useModal from "hooks/useModal";
import Button from "views/atoms/Button/Button";

function AgentListItem({ agent }:AgentListItemProps) {
 
    const ModalContextAPI = useModal() 
    const isActive = agent.active === undefined

    function openModalUpdatePayment() {
        ModalContextAPI.open()
        ModalContextAPI.setConfig({
            type: "payment",
            option: "update",
            fields: [{...agent}] 
        })
    }

    function openModalDeletePayment() {
        ModalContextAPI.open()
        ModalContextAPI.setConfig({
            type: "payment",
            option: "delete",
            fields: [{...agent}] 
        })
    }

    return (
    <article className={`transition duration-200 ease-in-out bg-[#f2efe9]/80 md:flex md:items-center md:justify-between  rounded-md ${isActive  ? "cursor-pointer hover:bg-[#f2efe9]" : "opacity-50 cursor-not-allowed"}`}>
        <Link to={`/agents/${agent._id}`} className={`md:space-x-5 p-5`}>
        
            <header className="flex items-center space-x-5">
            <div className="flex-shrink-0">
                <div className="relative">
                <img
                    className="h-16 w-16 object-cover rounded-full"
                    src={agent.avatar.src}
                    alt={agent.avatar.alt}
                />
                <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold text-gray-900">{agent.first_name} {agent.last_name}</h1>
                <p className="text-sm font-medium text-gray-500">
                    Consulting agent
                    {/* - <time dateTime="2020-12-20">December 20, 1887</time> */}
                </p>
            </div>
            </header>
        
        </Link>

        <div className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">   
            <Button kind="outline" disabled={!isActive} onClick={() => openModalDeletePayment()}>Delete Payment</Button>
            <Button onClick={() => openModalUpdatePayment()} disabled={!isActive}>Update Payment</Button>
        </div>
    
    
    </article>
    )
}

export default AgentListItem;

interface AgentListItemProps {
    agent: IAgent
}

