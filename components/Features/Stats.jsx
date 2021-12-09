import { UsersIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Image2 from '../../static/img/img2.jpg'

export default function Stats() {
  return (
    <div className="relative my-16 bg-white sm:mb-24 lg:mb-32">
      <div className="h-56 bg-blue-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <div className="relative object-cover w-full h-full">
          <Image src={Image2} priority objectFit="cover" layout="fill" alt="stat-image" />
        </div>
      </div>
      <div className="relative px-4 py-8 mx-auto max-w-7xl sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
          <div>
            <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
              <UsersIcon className="w-6 h-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Statistik Danamu sejak tahun 2020
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Sejak berdirinya Danamu, perusahaan ini sudah memiliki prestasi yang luar biasa. Hanya dalam 1 tahun, Danamu menjadi pembiayaan dana usaha nomor 1 di Indonesia
          </p>
          <div className="mt-8 overflow-hidden">
            <dl className="flex flex-wrap -mx-8 -mt-8">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Cabang</dt>
                <dd className="order-1 text-2xl font-extrabold text-blue-600 sm:text-3xl">17</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Nasabah</dt>
                <dd className="order-1 text-2xl font-extrabold text-blue-600 sm:text-3xl">20K</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Putaran Dana</dt>
                <dd className="order-1 text-2xl font-extrabold text-blue-600 sm:text-3xl">10M</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
