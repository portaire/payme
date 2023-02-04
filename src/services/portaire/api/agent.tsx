import { IAgent } from "interface/IAgent";
import PortaireRequest from "services/portaire/requests/PortaireRequest";

async function getAgentList() {
    return PortaireRequest('payment', "GET")
}

async function updateAgentPaymentAddress(value:IAgent) {
    const res =  PortaireRequest('payment', "POST", value)
    return res;
}

export {
    getAgentList,
    updateAgentPaymentAddress
}