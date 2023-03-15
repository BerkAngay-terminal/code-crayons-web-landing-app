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

            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 md:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-60" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-black">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                                    <nav className="mt-5 space-y-1 px-2">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-gray-900 text-white'
                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                )}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                                        'mr-4 flex-shrink-0 h-6 w-6'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
                    </div>
                </Dialog>
            </Transition.Root>

            <button onClick={() => setSidebarOpen(true)} className='sm:hidden h-8 w-8 p-1 border bg-zinc-100 bg-opacity-10 rounded-md hover:bg-opacity-20'>
                <Bars3Icon className='text-zinc-100' />
            </button>

            {/* Logo */}
            <img onClick={() => router.push('/')} className='h-10 lg:h-12 transform transition hover:scale-110 cursor-pointer' src="https://link-cdn.fra1.cdn.digitaloceanspaces.com/Link/codecrayons%20(1).png" alt="" />


            {/* <div className='hidden sm:flex items-center space-x-2 w-52 no-wrap mr-32'>
                <button onClick={() => router.push('/about')} className='px-2 py-1.5 text-sm font-bold text-gray-400 bg-zinc-900 rounded-md transform transition hover:scale-105 hover:bg-red-300 hover:text-black'>Overview</button>
                <button onClick={() => router.push('/about')} className='px-2 py-1.5 text-sm font-bold text-gray-400 bg-zinc-900 rounded-md transform transition hover:scale-105 hover:bg-yellow-300 hover:text-black'>Work</button>
                <button onClick={() => router.push('/about')} className='px-2 py-1.5 text-sm font-bold text-gray-400 bg-zinc-900 rounded-md transform transition hover:scale-105 hover:bg-green-300 hover:text-black'>Services</button>
                <button onClick={() => router.push('/about')} className='px-2 py-1.5 text-sm font-bold text-gray-400 bg-zinc-900 rounded-md transform transition hover:scale-105 hover:bg-blue-300 hover:text-black'>About</button>
                <button onClick={() => router.push('/about')} className='px-2 py-1.5 text-sm font-bold text-gray-400 bg-zinc-900 rounded-md transform transition hover:scale-105 hover:bg-purple-300 hover:text-black'>Contact</button>
            </div> */}


            <MailTo email="hello@codecrayons.dev" subject="Projenizin Adı" body="Merhaba,
Bizimle çalışmak istediğiniz için teşekkür ederiz. Yazılım destek ajansı olarak, projenizi daha iyi anlamak ve size doğru bir fiyatlandırma yapabilmek için bazı sorularımız var.
1.	Projenizin amacı nedir? (Örneğin, yeni bir web sitesi kurulumu, mevcut bir web sitesi yenileme, mobil uygulama geliştirme vb.)
2.	Projenin ne kadar sürede tamamlanması gerekiyor?
3.	Projeyi tamamlamak için hangi kaynaklara ihtiyacınız var? (Örneğin, geliştiriciler, tasarımcılar, proje yöneticileri vb.)
4.	Projeyi tamamlamak için hangi üçüncü taraf uygulamalarının veya hizmetlerin entegrasyonu gerekiyor?
5.	Müşterilerinizin hangi özelliklere ihtiyacı var? (Örneğin, özel bir kullanıcı arayüzü, ödeme işlemleri entegrasyonu, yüksek kaliteli görüntüleri veya videoları barındırma vb.)
6.	Projeyi tamamlamak için hangi platformlar için yazılım geliştirme hizmeti almak istiyorsunuz? (Örneğin, iOS, Android, web, masaüstü vb.)
7.	Projeyi tamamlamak için hangi programlama dilleri ve teknolojileri kullanmak istiyorlar?
8.	Projeyi tamamlamak için hangi tür veri tabanı gereksinimleri var?
9.	projenin tasarımın kısmını kendiniz mi yapacaksınız, yoksa tasarımı biz mi yapacağız?
10.	Hangi tür testler yapmayı planlıyorsunuz? (Örneğin, işlevsel testler, performans testleri, kullanıcı testleri vb.)
11.	Projeyi tamamlamak için hangi aşamaları takip etmemiz gerekiyor? (Örneğin, geliştirme, test, canlıya alma vb.)
12.	projenin son teslim tarihi ne zaman?
-Proje için aklınızda belirli bir bütçe var mı?



Cevabını bulamadığınız sorularımız varsa boş bırakabilirsiniz.
En geç iki iş günü içerisinde proje fizibilitesi yapılıp size geri dönüş sağlanacaktır.
Çalışma şeklimiz %35 ön ödemelidir bilgilerinize sunarız.
Sorularımızı yanıtladığınızda, projenizi daha iyi anlayabilecek ve size uygun bir fiyatlandırma yapabileceğiz. Lütfen bu soruları mümkün olan en kısa sürede yanıtlarsanız seviniriz.
Teşekkürler!
">
                <StartButton />
            </MailTo>

        </header>
    )
}

export default Header