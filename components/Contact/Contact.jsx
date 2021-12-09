import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline'

import Image from 'next/image'
import Image4 from '../../static/img/img4.jpg'

export default function Contact() {
  return (
    <section className="contact-app">
      <div className="relative py-16 mt-24 bg-white sm:py-24 lg:py-32">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <div className="relative object-cover w-full h-56 lg:absolute lg:h-full">
              <Image layout="fill" objectFit="cover"  src={Image4} alt="" priority />
            </div>
          </div>
        </div>
        <div className="relative px-4 py-16 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Kontak Kami</h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                Kami sangat antusias dengan pengajuan dana usaha Anda. Ajukan dana usaha dengan cara mengunjungi ke kantor Danamu atau hubungi customer service kami
              </p>
              <div className="flex flex-col mt-10 space-y-10">
              <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Kantor Pusat</h2>
                  <div className="mt-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <LocationMarkerIcon className="w-6 h-6 text-gray-400" aria-hidden="true" />
                      </div>
                      <div className="ml-3 text-base text-gray-500">
                        <p>Jalan Citra Garden No. 1 Jakarta Pusat</p>
                        <p className="mt-1">Senin - Jumat / 09.00 - 16.00</p>
                      </div>
                    </div>
                    <div className="flex mt-6">
                      <div className="flex-shrink-0">
                        <PhoneIcon className="w-6 h-6 text-gray-400" aria-hidden="true" />
                      </div>
                      <div className="ml-3 text-base text-gray-500">
                        <p>(021) - 12345678</p>
                      </div>
                    </div>
                    <div className="flex mt-6">
                      <div className="flex-shrink-0">
                        <MailIcon className="w-6 h-6 text-gray-400" aria-hidden="true" />
                      </div>
                      <div className="ml-3 text-base text-gray-500">
                        <p>danamuoffice@gmail.com</p>
                      </div>
                    </div>     
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Customer Service</h2>
                  <div className="mt-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <PhoneIcon className="w-6 h-6 text-gray-400" aria-hidden="true" />
                      </div>
                      <div className="ml-3 text-base text-gray-500">
                        <p>(021) - 12345678</p>
                        <p className="mt-1">Senin - Jumat / 09.00 - 16.00</p>
                      </div>
                    </div>
                    <div className="flex mt-6">
                      <div className="flex-shrink-0">
                        <MailIcon className="w-6 h-6 text-gray-400" aria-hidden="true" />
                      </div>
                      <div className="ml-3 text-base text-gray-500">
                        <p>danamusupport@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
