import { FireIcon } from '@heroicons/react/20/solid'

function StartButton() {
    return (
        <div class="grid gap-8 items-start justify-center">
            <div class="relative group">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className='flex items-center font-black p-4 text-xl text-gray-900 hover:text-black bg-white uppercase rounded-lg transform transition hover:scale-105'>
                    <FireIcon className='h-10' />
                    <p>Start</p>
                </button>
            </div>
        </div>
    )
}

export default StartButton