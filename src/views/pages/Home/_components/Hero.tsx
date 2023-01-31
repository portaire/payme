import Button from "views/atoms/Button/Button";
import { Container, Section } from "views/_ui"

function Hero() {

    const handleClick = () => {
        const sectionDiv = document.getElementById("agents");
        const top:any = sectionDiv?.getBoundingClientRect().top;
        const height:any = sectionDiv?.getBoundingClientRect().height;
        const middle = top + (height / 2) - (window.innerHeight / 2);
        window.scrollTo({
            top: middle,
            behavior: 'smooth'
        });
    };
    
    return (
        <Section id="hero" className="bg-[#f2efe9] py-20 px-4 mx-4 md:mx-7 my-10 mb-5 relative">
        <Container className="md:py-12 lg:py-28 px-4 md:px-10 lg:px-44">


            <div className="flex flex-row">
                <div className="md:max-w-[550px] text-center md:text-left">

                <h1 className="font-medium text-2xl sm:text-3xl md:font-normal md:text-5xl text-black mb-3">The easy way to become an agent.</h1>
                <p className="sm:text-lg md:text-xl font-light mb-5">Contribute to the acceleration of global tranquility and augment the strength of government by becoming one of the most exceptional agents and work on classified operations within the Matrix.</p>
                <Button onClick={() => handleClick()} className="mb-5 rounded-full">Make Payment</Button>

                <div className="w-full">
                <ul className="flex flex-col mx-auto">
                    <li className="flex w-auto mx-auto md:mx-0 align-center space-x-2">
                        <svg className="w-4" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path d="m32.148 92.809-30.77-26.809c-1.6836-1.4609-1.8633-4.0117-0.40234-5.6953 1.4609-1.6836 4.0078-1.8672 5.6953-0.40625l24.609 21.48 61.629-72.77c1.4375-1.6953 3.9727-1.9062 5.668-0.46875 1.6992 1.4336 1.9062 3.9727 0.47266 5.668z"/>
                        </svg>
                        <span className="text-sm">No training required</span>
                    </li>
                    <li className="flex w-auto mx-auto md:mx-0 align-center space-x-2">
                        <svg className="w-4" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path d="m32.148 92.809-30.77-26.809c-1.6836-1.4609-1.8633-4.0117-0.40234-5.6953 1.4609-1.6836 4.0078-1.8672 5.6953-0.40625l24.609 21.48 61.629-72.77c1.4375-1.6953 3.9727-1.9062 5.668-0.46875 1.6992 1.4336 1.9062 3.9727 0.47266 5.668z"/>
                        </svg>
                        <span className="text-sm">No limit on amunition</span>
                    </li>
                </ul>
                </div>
                </div>
               
                <div>
                    {/* <img className="absolute -bottom-[0] opacity-95 -right-[150px] w-[950px]" src="https://png2.cleanpng.com/sh/819a22ce29701f1991b87482b5114fea/L0KzQYm3V8EzN6JvkpH0aYP2gLBuTgNkfZ11jOd7ZT33db3slvl0cZDzRed5bHBkdH7tjB51NaV3jdc2ZHX3dbT7igZmNWZnTKo6YknpQoHqVcU6NmE9UaM6OES5QYa6UcQ2OmQ2UaM8NEKxgLBu/kisspng-sculpture-television-upload-font-true-detective-5b481b9f20c559.0891184615314523191342.png" alt="Man face" /> */}
                    <img className="hidden md:block absolute md:-bottom-[160px] lg:-bottom-[245px] opacity-95 md:-right-[220px] lg:-right-[180px] md:w-[500px] lg:w-[650px]" src="https://i.imgur.com/lznLsVL.png" alt="Man face" />
                </div>
            </div>
        </Container>
        </Section>
    )
}

export default Hero;