import React, { useState, useEffect } from 'react';

import { IAgent } from 'interface/IAgent';
import { getAgentList } from 'services/portaire/api/agent';


function AgentView() {

    const [agent, setAgent] = useState<IAgent|undefined>(undefined)

    async function fetchAgentList() {
        const res:any = await getAgentList()
        setAgent({...res[0]})
        console.log(res[0])
    }

    useEffect(() => {
        fetchAgentList()
    }, [])

    return (
        <div>
            {agent?.first_name}
        </div>
    )
}

export default AgentView;