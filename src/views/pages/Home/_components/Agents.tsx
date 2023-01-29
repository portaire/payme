import Heading from "views/molecules/Heading/Heading";
import AgentList from "views/pages/Agent/AgentList";
import { Container, Section } from "views/_ui";

function Agents() {
    return (
        <Section id="agents" className="my-24">
        <Container className="max-w-7xl px-7">
      
            <Heading title="Matrix Agents" />
            <AgentList />

        </Container>
        </Section>
    )
}

export default Agents;