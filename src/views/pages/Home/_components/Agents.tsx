import Heading from "views/molecules/Heading/Heading";
import AgentListTemplate from "views/pages/Agent/_components/AgentListTemplate";
import { Container, Section } from "views/_ui";

function Agents() {
    return (
        <Section id="agents" className="mt-24 mb-6 md:my-24">
        <Container className="max-w-7xl px-4 md:px-7">
      
            <Heading title="Matrix Agents" />
            <AgentListTemplate />

        </Container>
        </Section>
    )
}

export default Agents;