import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import StartButton from './StartButton'
import MailTo from './MailTo'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import classNames from '../lib/dynamicStyling'
import { BsEyeglasses, BsGear, BsInfoCircle, BsPhone } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";

const navigation = [
    { name: 'Overview', href: '#', icon: BsEyeglasses, current: true },
    { name: 'Work', href: '/work', icon: MdWorkOutline, current: false },
    { name: 'Services', href: '#', icon: BsGear, current: false },
    { name: 'About', href: 'about', icon: BsInfoCircle, current: false },
    { name: 'Contact', href: '#', icon: BsPhone, current: false }
]

function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const router = useRouter()


    return (
        <header className='fixed top-0 right-0 left-0 flex bg-gray bg-opacity-10 items-center justify-between p-10 border-b border-gray-900'>

            {/* Logo */}
            <img onClick={() => router.push('/')} className='h-7 sm:10 lg:h-12 transform transition hover:scale-110 cursor-pointer' src="https://link-cdn.fra1.cdn.digitaloceanspaces.com/Link/codecrayons%20(1).png" alt="" />


            {/* <div className='hidden sm:flex items-center space-x-2 w-52 no-wrap mr-32'>
                <button onClick={() => router.push('/about')} className='px-2 py-1.5 text-sm font-bold text-gray-400 bg-zinc-900 rounded-md transform transition hover:scale-105 hover:bg-red-300 hover:text-black'>Overview</button>
                <button onClick={() => router.push('/about')} className='px-2 py-1.5 text-sm font-bold text-gray-400 bg-zinc-900 rounded-md transform transition hover:scale-105 hover:bg-yellow-300 hover:text-black'>Work</button>
                <button onClick={() => router.push('/about')} className='px-2 py-1.5 text-sm font-bold text-gray-400 bg-zinc-900 rounded-md transform transition hover:scale-105 hover:bg-green-300 hover:text-black'>Services</button>
                <button onClick={() => router.push('/about')} className='px-2 py-1.5 text-sm font-bold text-gray-400 bg-zinc-900 rounded-md transform transition hover:scale-105 hover:bg-blue-300 hover:text-black'>About</button>
                <button onClick={() => router.push('/about')} className='px-2 py-1.5 text-sm font-bold text-gray-400 bg-zinc-900 rounded-md transform transition hover:scale-105 hover:bg-purple-300 hover:text-black'>Contact</button>
            </div> */}


            <MailTo email="hello@codecrayons.dev" subject="Projenizin Adı" body="`${Projenizin Adı} ${Projenizin Amacı} ${Hangi Platformlarda Çalışacağı (Mobil, Web, Desktop))} ${İletişim Bilgileriniz}`">
                <StartButton />
            </MailTo>

        </header>
    )
}

export default Header