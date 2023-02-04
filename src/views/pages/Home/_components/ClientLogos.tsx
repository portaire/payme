import { Container, Section } from "views/_ui";

function ClientLogos() {

    return (
        <Section id="client-logos" className="pt-12 pb-4 px-4">
        <Container>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-12" src="https://global-uploads.webflow.com/5fc6b6c9b4295a89cef9f9ac/633ee1596c0915db93edd76f_Diespeker_logo_keyline-p-500.png" alt="Tuple" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-12" src="https://global-uploads.webflow.com/5fc6b6c9b4295a89cef9f9ac/6143431faac85f1e24305c48_pouredproject.png" alt="Tuple" />
                </div>

                
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src="https://global-uploads.webflow.com/5fc6b6c9b4295a89cef9f9ac/633ee15a8e3c6a633a725881_maria%20starling.png" alt="Mirage" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-12" src="https://global-uploads.webflow.com/5fc6b6c9b4295a89cef9f9ac/633ee159eb698e476ff7cf87_decoralogobig-p-500.png" alt="StaticKit" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                <img
                    className="h-12"
                    src="https://global-uploads.webflow.com/5fc6b6c9b4295a89cef9f9ac/633ee15ab95156377b5892d7_Tim%20Page%20Carpets.png"
                    alt="Transistor"
                />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                <img
                    className="h-12"
                    src="https://global-uploads.webflow.com/5fc6b6c9b4295a89cef9f9ac/633ee1594030c41a7a782038_Holmes%20Bespoke.png"
                    alt="Workcation"
                />
                </div>
            </div>
            
        </Container>
        </Section>

    )
}

export default ClientLogos;