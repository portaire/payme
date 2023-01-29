import Button from "views/atoms/Button/Button";
import Heading from "views/molecules/Heading/Heading";
import Quote from "views/molecules/Quote/Quote";
import { Container, Section } from "views/_ui";
import AgentList from "../Agent/AgentList";
import ClientLogos from "./_components/ClientLogos/ClientLogos";
import Hero from "./_components/Hero/Hero";
import Tawk from "./_components/Tawk/Tawk";

function Home() {

    

    return (
        <div>

            <Hero />
            <ClientLogos />

            
            <Section id="detectives" className="my-24">
            <Container className="max-w-7xl px-7">
          
                <Heading title="Matrix Agents" />
                <AgentList />

            </Container>
            </Section>


            <Section className="my-5 pt-10">
            <Container className="max-w-8xl px-7">
                <Quote 
                    quote="For us the biggest success has been instantiating new corrupt police officers that citizens used to complain about." 
                    author="Asthley Kooupierman"
                    company={{name: "AmbitionCord", "link": "#"}}
                />
            </Container>
            </Section>


            <Tawk />

        </div>
    )
}

export default Home;