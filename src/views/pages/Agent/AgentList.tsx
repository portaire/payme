import React, { useState, useEffect } from 'react';
import { getAgentList } from 'services/portaire/api/agent';

import agentListData from 'fakeData/agentListData';

function AgentList() {

    const [agentList, setAgentList]:any = useState([])

    async function fetchAgentList() {
        const res:any = await getAgentList()

        res[0].avatar = {
            src: "https://i.guim.co.uk/img/media/ffc016b01f45eeec94ff69dc59eb65a9137ae52a/0_95_3500_2101/master/3500.jpg?width=1200&quality=85&auto=format&fit=max&s=dda2e0a55ff16a86bc1d7dc6cb86f0b1",
            alt: "Picture of Sherlok"
        }

        setAgentList([...agentListData, res[0]].reverse())
    }

    useEffect(() => {
        fetchAgentList()
    }, [])

    return (
        <div> Agent List</div>
    )
}

export default AgentList;