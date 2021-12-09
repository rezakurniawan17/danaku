import {
  BadgeCheckIcon
} from '@heroicons/react/outline'

const features = [
  { name: 'Proses Cepat', desc: 'Pencairan dana dapat dilakukan dalam waktu kurang dari 1 minggu', icon: BadgeCheckIcon },
  { name: 'Tujuan Tepat', desc: 'Pembiayaan mengarah pada tujuan yang tepat dan dapat dipercaya', icon: BadgeCheckIcon },
  { name: 'Bunga Fleksibel', desc: 'Tidak pernah menetapkan bunga sehingga dapat memiliki bunga yang fleksibel', icon: BadgeCheckIcon },
  { name: 'Skala Nasional', desc: 'Memiliki 17 cabang yang sudah tersebar di seluruh wilayah Indonesia', icon: BadgeCheckIcon },
  { name: 'Proses Mudah', desc: 'Proses mudah saat pengajuan dana adalah tanggung jawab utama kami', icon: BadgeCheckIcon },
  { name: 'Terpercaya', desc: 'Danamu sudah terpercaya oleh 10.000 nasabah di seluruh wilayah Indonesia', icon: BadgeCheckIcon },
]

export default function Features() {
  return (
    <section className="features-app">
      <div className="relative py-16 bg-white sm:py-24 lg:py-32">
        <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">Tentang Danamu</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Yang perlu Anda tahu tentang Danamu
          </p>
          <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
            Danamu sudah berdiri sejak tahun 2021 dan sampai saat ini sudah memiliki banyak cabang yang tersebar di seluruh wilayah Indonesia
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
