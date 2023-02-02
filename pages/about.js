import { useRouter } from 'next/router';
import Crawl from 'react-star-wars-crawl'
import 'react-star-wars-crawl/lib/index.css'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import Header from '../components/Header';

function About() {
    const router = useRouter();

    return (
        <>
            <div className='absolute inset-0 z-50'>
                <Header />
                <button onClick={() => router.reload()} className='absolute bottom-2 right-2 flex items-center justify-center w-10 h-10 p-2 text-zinc-100 bg-zinc-200 bg-opacity-10 border rounded-md hover:bg-opacity-30'>
                    <ArrowPathIcon />
                </button>
            </div>
            <div className='relative flex items-center justify-center h-screen bg-black w-full text-xs'>
                <Crawl
                    title="CODE CRAYONS"
                    subTitle="About"
                    text="leading software development company based in Izmir, Turkey. We specialize in web development and offer a wide range of services including website design and development, mobile game development, mobile app development, desktop app development, CRM solutions, and ERP systems. With a team of highly skilled and experienced web developers, we are dedicated to delivering top-quality solutions that meet the needs of our clients. Our expertise in web development allows us to create dynamic, interactive, and user-friendly websites that drive business growth. Contact us today to learn more about how we can help you achieve your goals with our custom web development solutions."
                />


            </div>
        </>
    )
}

export default About