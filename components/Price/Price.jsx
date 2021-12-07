import { CheckCircleIcon } from '@heroicons/react/solid'

const products = [
  {
    name: 'Danamu Musiman',
    desc: 'Pinjaman Kredit Satu Hari Cair. Merupakan produk dari danamu yang memberikan dana secara cepat dengan jangka waktu yang sangat singkat',
    benefits: [
      'Pinjaman mulai dari 20 juta',
      'Jangka waktu mulai dari 1 bulan',
      'Bayar bunga diawal. Bayar pokok diakhir',
      'Proses pencairan 1 hari'
    ]
  },
  {
    name: 'Danamu Kreatif',
    desc: 'Pinjaman Kredit Satu Hari Cair. Merupakan produk dari danamu yang memberikan dana secara cepat dengan jangka waktu yang singkat',
    benefits: [
      'Pinjaman mulai dari 20 juta',
      'Jangka waktu mulai dari 6 bulan',
      'Angsuran bulanan',
      'Proses pencairan 1 hari'
    ]
  },
  {
    name: 'Danamu Petir',
    desc: 'Pinjaman Kredit Satu Hari Cair. Merupakan produk dari danamu yang memberikan dana secara cepat dengan jangka waktu yang singkat',
    benefits: [
      'Pinjaman mulai dari 1 juta',
      'Jangka waktu fleksibel',
      'Pencairan 1 hari',
    ]
  }
]

export default function Price() {
  return (
    <div className="bg-gray-100 ">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Semua Pembiayaan Danamu</h2>
            <p className="mt-4 text-xl text-gray-600">
              Berikut merupakan produk dari Danamu yang dapat Anda pilih berdasarkan kebutuhan usaha Anda
            </p>
          </div>
        </div>
      </div>
      <div className="pb-16 mt-8 bg-white sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 bg-gray-100 h-1/2" />
          <div className="relative px-4 mx-auto space-y-20 max-w-7xl sm:px-6 lg:px-8">
            {
              products.map((product) => (
                <div key={product.name} className="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-none lg:flex">
                  <div className="flex-1 px-6 py-8 bg-white lg:p-12">
                    <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{product.name}</h3>
                    <p className="mt-6 text-base text-gray-500">
                      {product.desc}
                    </p>
                    <div className="mt-8">
                      <div className="flex items-center">
                        <h4 className="flex-shrink-0 pr-4 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-white">
                          Keunggulan
                        </h4>
                        <div className="flex-1 border-t-2 border-gray-200" />
                      </div>
                      <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                        {product.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start lg:col-span-1">
                            <div className="flex-shrink-0">
                              <CheckCircleIcon className="w-5 h-5 text-green-400" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-sm text-gray-700">{benefit}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                    <p className="text-lg font-semibold leading-6 text-gray-900">Dapatkan dana <br className="hidden lg:block" /> cepat dengan {product.name}</p>
                    <p className="mt-4 text-sm">
                      <a href="#" className="font-medium text-gray-500 underline">
                        Pelajari tentang {product.name}
                      </a>
                    </p>
                    <div className="mt-6">
                      <div className="rounded-md shadow">
                        <a
                          href="#"
                          className="flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-900"
                        >
                          Ajukan Dana
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
