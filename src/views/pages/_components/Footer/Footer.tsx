import Button from "views/atoms/Button/Button";
import { Container, Section } from "views/_ui";


function Footer() {
    const currentTime = new Date()

    return (
    <footer className="relative mx-4 lg:mx-7 border-t-[1px] border-t-black border-solid">

        <Section className="mb-5">
        <Container className="py-14">

            <div className="flex flex-col lg:flex-row justify-between">
                
                <div className="mb-6 lg:mb-0">
                    <div className="flex flex-col mb-2 md:mb-8">
                        <span className="text-lg mb-1.5">Curated weapons for military needed</span>
                        <Button onClick={() => alert("Ah, the scent of a good mystery is invigorating, don't you agree?")} style={{ "width": "fit-content" }} className="w-fit-content uppercase font-medium inline-block">Become a supplier :)</Button>
                    </div>
                    <span className="text-xs">&copy; Copyright Portair Unlimited {currentTime.getFullYear()}</span>
                </div>

                <div className="flex justify-between">
                    <div className="lg:mr-36">
                        <h3 className="text-lg mb-1">Operations</h3>
                        <ul>
                            <li><a href="#" className="text-sm">Join us</a></li>
                            <li><a href="#" className="text-sm">Military</a></li>
                            <li><a href="#" className="text-sm">Detectives</a></li>
                            <li><a href="#" className="text-sm">Agents</a></li>
                        </ul>
                    </div>

                    <div className="lg:mr-36">
                        <h3 className="text-lg mb-1">Operations</h3>
                        <ul>
                            <li><a href="#" className="text-sm">Join us</a></li>
                            <li><a href="#" className="text-sm">Military</a></li>
                            <li><a href="#" className="text-sm">Detectives</a></li>
                            <li><a href="#" className="text-sm">Agents</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </Container>
        </Section>

    </footer>
    )
}

export default Footer;