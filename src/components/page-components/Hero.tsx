import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import Image from 'next/image';
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from '@/components/ui/MagicButton';

const Hero = () => {
    const openCV = () => {
        window.open('/CV-Jonathan-Milolo-Beya.pdf', '_blank');
    };
    return (
        <section id='about' className='flex flex-col items-center justify-center'>
            <Image
                src="/profile.jpg"
                alt="Jonathan Milolo Beya"
                width={300}
                height={300}
                className="rounded-full md:w-40 md:h-40 lg:w-48 lg:h-48  mb-12  mt-12"
            />
            <TextGenerateEffect
                words="Hi! I&apos;m Jonathan Milolo Beya, a Congolese Frontend Developer based in South Africa"
                className="text-center text-[15px] md:text-3xl lg:text-3xl"
            />
            <p className="uppercase tracking-widest text-xs text-center mb-12">
                Humans like what they see. That is what I do best!
            </p>
            <div onClick={openCV}>
                <MagicButton
                    title="View my Resume"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </div>
        </section>
    )
}

export default Hero