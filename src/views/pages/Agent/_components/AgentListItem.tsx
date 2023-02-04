import { Link } from "react-router-dom";

import { IAgent } from "interface/IAgent";
import useModal from "hooks/useModal";
import Button from "views/atoms/Button/Button";

function AgentListItem({ agent, isLoading }:AgentListItemProps) {
 
    const ModalContextAPI = useModal() 
    const isActive = agent && agent.active === undefined

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

    if(isLoading) {
        return (
            <div className="border border-[#f2efe9] shadow rounded-md p-5 w-full mx-auto">
            <div className="animate-pulse flex md:space-x-5 relative items-center justify-between">


                <header className="flex items-center space-x-5">
                <div className="rounded-full bg-gray-900/60 h-16 w-16"></div>

                <div className="flex-1 space-y-6 py-1">
                    <div>
                        <div className="h-5 mb-3 w-48 bg-gray-900/60 rounded"></div>
                        <div className="h-3 w-64 bg-gray-900/60 rounded"></div>
                    </div>
                </div>
                </header>

                <div className="absolute right-0 justify-stretch mx-3 md:mx-6 pb-6 md:py-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
                    <div className="h-10 w-36 bg-gray-900/60 rounded"></div>
                    <div className="h-10 w-36 bg-gray-900/60 rounded"></div>
                </div>

            </div>
            </div>
        )
    }

    return (
        <article className={`transition duration-200 ease-in-out bg-[#f2efe9]/80 md:flex md:items-center md:justify-between  rounded-md ${isActive  ? "cursor-pointer hover:bg-[#f2efe9] border hover:border-[#d1be9a]" : "opacity-50 cursor-not-allowed"}`}>
            <Link to={`/agents/${agent?._id}`} className={`md:space-x-5`}>
            
                <header className="flex items-center space-x-5 p-5">
                <div className="flex-shrink-0">
                    <div className="relative">
                    <img
                        className="h-16 w-16 object-cover rounded-full"
                        src={agent?.avatar.src}
                        alt={agent?.avatar.alt}
                    />
                    <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                    </div>
                </div>
                <div>
                    <h1 className="text-lg md:text-2xl font-bold text-gray-900">{agent?.first_name} {agent?.last_name}</h1>
                    <p className="text-sm font-medium text-gray-500 max-w-[210px] lg:max-w-none">
                        {agent?.description}
                        {/* - <time dateTime="2020-12-20">December 20, 1887</time> */}
                    </p>
                </div>
                </header>
            
            </Link>

            <div className="justify-stretch mx-3 md:mx-6 pb-6 md:py-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">   
                <Button kind="outline" disabled={!isActive} onClick={() => openModalDeletePayment()}>Delete Payment</Button>
                <Button onClick={() => openModalUpdatePayment()} disabled={!isActive}>Update Payment</Button>
            </div>
        
        
        </article>
    )
}

export default AgentListItem;

interface AgentListItemProps {
    agent?: IAgent;
    isLoading?: boolean;
}

