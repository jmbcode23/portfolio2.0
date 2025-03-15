import React from "react";

import { workExperience } from "../../../data";
import { Button } from "../ui/MovingBorders";
import Image from "next/image";
import { ColourfulText } from "../ui/colourful-text";

const Experience = () => {
    return (
        <section id="projects" className="pr-6 pl-6">
            <h1 className="text-center text-3xl md:text-4xl font-bold mt-12 mb-12">
                <ColourfulText text="Projects and Work Experience" />
            </h1>
            <div className="mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                    <Button
                        key={card.id}
                        //   random duration will be fun , I think , may be not
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            //   add these two
                            //   you can generate the color from here https://cssgradient.io/
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            // add this border radius to make it more rounded so that the moving border is more realistic
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        // remove bg-white dark:bg-slate-900
                        className="flex-1 text-white dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <Image
                                src={card.thumbnail}
                                alt={card.thumbnail}
                                width={80}
                                height={80}
                                className="lg:w-32 md:w-20 w-16"
                            />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </section>
    );
};

export default Experience;