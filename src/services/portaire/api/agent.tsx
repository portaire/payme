import PortaireRequest from "services/portaire/requests/PortaireRequest";

async function getAgentList() {
    return PortaireRequest('payment', "GET")
}

export {
    getAgentList
}