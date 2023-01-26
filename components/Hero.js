import Typewriter from 'typewriter-effect';


function Hero() {
    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>iv
            <div className='w-96 h-[30vh]'>
                <h1 className='text-4xl text-white md:text-7xl font-bold '>We build</h1>
                <h1 className='md:text-5xl text-pink-400 text-8xl font-bold'>
                    <Typewriter
                        options={{
                            strings: ['Mobile Apps', 'Mobile Games', 'Web Apps', 'Web Games', 'Desktop Apps', 'CRM App', 'ERP App', 'Space', 'Universe 😀'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
            </div>
        </div>
    )
}

export default Hero