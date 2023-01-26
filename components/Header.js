import { useRouter } from 'next/router'
import StartButton from './StartButton'


function Header() {
    const router = useRouter()


    return (
        <header className='fixed top-0 right-0 left-0 flex bg-white bg-opacity-5 items-center justify-between p-10 border-b border-gray-900'>

            {/* Logo */}
            <img className='h-12 transform transition hover:scale-110 cursor-pointer' src="https://link-cdn.fra1.cdn.digitaloceanspaces.com/Link/codecrayons%20(1).png" alt="" />


            <div className='flex items-center space-x-2 w-52 no-wrap mr-32'>
                <button className='px-2 py-1.5 text-sm font-bold text-gray-400 bg-zinc-900 rounded-md transform transition hover:scale-105 hover:bg-red-300 hover:text-black'>Overview</button>
                <button className='px-2 py-1.5 text-sm font-bold text-gray-400 bg-zinc-900 rounded-md transform transition hover:scale-105 hover:bg-yellow-300 hover:text-black'>Work</button>
                <button className='px-2 py-1.5 text-sm font-bold text-gray-400 bg-zinc-900 rounded-md transform transition hover:scale-105 hover:bg-green-300 hover:text-black'>Services</button>
                <button className='px-2 py-1.5 text-sm font-bold text-gray-400 bg-zinc-900 rounded-md transform transition hover:scale-105 hover:bg-blue-300 hover:text-black'>About</button>
                <button className='px-2 py-1.5 text-sm font-bold text-gray-400 bg-zinc-900 rounded-md transform transition hover:scale-105 hover:bg-purple-300 hover:text-black'>Contact</button>
            </div>

            <StartButton />

        </header>
    )
}

export default Header