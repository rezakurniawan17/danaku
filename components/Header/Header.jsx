/* eslint-disable jsx-a11y/alt-text */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, Element } from 'react-scroll'
import Image from 'next/image'
import Image1 from '../../static/img/img1.jpg'
import Logo from '../../public/danamu.svg'

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang', href: 'features-app' },
  { name: 'Produk', href: 'product-app' },
  { name: 'Kontak', href: 'contact-app' },
]

export default function Header() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <Image className="w-auto h-8 sm:h-10" src={Logo} alt="" />
                    </a>
                    <div className="flex items-center -mr-2 md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name} 
                      smooth={true} 
                      spy={true} 
                      to={item.href}
                      className="font-medium text-gray-500 cursor-pointer focus:text-blue-500 hover:text-gray-900">
                      {item.name}
                    </Link>
                  ))}
                  <a href="/simulasi-kredit" className="font-medium text-blue-600 hover:text-blue-500">
                    Simulasi Kredit
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
              >
                <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div className="relative w-auto h-8">
                    <Image className="w-auto h-8 sm:h-10" src={Logo} alt="" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        smooth={true}
                        className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <a
                    href="/simulasi-kredit"
                    className="block w-full px-5 py-3 font-medium text-center text-blue-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Simulasi Kredit
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Upgrade Usahamu</span>{' '}
                <span className="block text-blue-600 xl:inline">dengan Danamu</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Danamu memberikan fasilitas modal usaha dengan proses mudah dan cepat. Ajukan dana usahamu sekarang
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="contact-app"
                    smooth={true}
                    offset={20}
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Kontak Kami
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="contact-app"
                    smooth={true}
                    offset={20}
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-blue-700 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    Ajukan Dana
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full">
          <Image src={Image1} priority objectFit="cover" layout="fill" />
        </div>
      </div>
    </div>
  )
}
