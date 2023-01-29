import React, { useState, useEffect } from 'react';

import { Container, Section } from 'views/_ui';
import AgentListTemplate from './_components/AgentListTemplate';

function AgentList() {
 
    return (
        <div>
            <Section id="agents" className="my-24">
            <Container className="max-w-7xl px-7">
            
                <AgentListTemplate />

            </Container>
            </Section>
        </div>
    )
}

export default AgentList;