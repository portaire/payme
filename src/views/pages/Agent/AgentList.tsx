import React, { useState, useEffect } from 'react';
import { getAgentList } from 'services/portaire/api/agent';

import agentListData from 'fakeData/agentListData';

import { Container, Section } from 'views/_ui';
import AgentListIndex from './_components/AgentListIndex';
import AgentListTemplate from './_components/AgentListTemplate';

function AgentList() {
 

    return (
        <div>

            <AgentListTemplate />
        </div>
    )
}

export default AgentList;