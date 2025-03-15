import React, { ReactNode } from 'react';
import { BackgroundBeams } from "../ui/background-beams";


const Background = ({ children }: { children: ReactNode }) => {
    return (
        //Could give this div a className of bg-neutral-950 to make it dark
        <div>
            {children}
            <BackgroundBeams />
        </div>
    );
}

export default Background;