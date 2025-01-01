import { HERO_CONTENT } from "../../constants";

const HeroComponent = () => {
    return (
        <>
            <section className="pt-30 lg:pt-36">
                <div className="max-w-7xl px-4 mx-auto flex flex-col items-center text-center">
                    <div className="mb-8 border-neutral-700 px-3 py-2 rounded-full text-xs">
                        {HERO_CONTENT.badgeText}
                    </div>
                    <h1 className="text-5xl lg:text-8xl my-4 font-semibold tracking-lighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 text-transparent bg-clip-text  ">
                        {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
                            <span key={index}>
                                {text}
                                <br />
                            </span>
                        ))}
                    </h1>
                    <p className="text-neutral-400 max-w-xl mt-6" >
                        {HERO_CONTENT.subHeading}
                    </p>
                    <div className="mt-6 space-x-4" >
                        <a href="#" className="inline-block bg-yellow-300 hover:bg-yellow-600 text-black px-6 py-3 font-medium rounded-lg"  >
                            {HERO_CONTENT.callToAction.primary}
                        </a>
                        <a href="#" className="inline-block bg-yellow-300 hover:bg-yellow-600 text-black px-6 py-3 font-medium rounded-lg"  >
                            Book Premium !
                        </a>
                    </div>
                    <div className="py-10" >
                         <p className="text-center text-gray-400 mb-8" >
                                 {HERO_CONTENT.trustedByText}
                         </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroComponent;
