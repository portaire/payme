import Quote from "views/molecules/Quote/Quote";
import { Container, Section } from "views/_ui";

function HomeQuote() {
    return (
        <Section id="home-quote" className="my-5 pt-10">
        <Container className="max-w-8xl px-7">
            <Quote 
                quote={`For us the biggest success has been instantiating new corrupt police officers that citizens <strong class="italic font-medium">used to</strong> complain about 💥`} 
                author="Asthley Kooupierman"
                company={{name: "AmbitionCord", "link": "#"}}
            />
        </Container>
        </Section>
    )
}

export default HomeQuote;