/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    question: 'Bagaimana cara pengajuan modal usaha Danamu ?',
    answer:
      'Caranya sangat mudah, cukup telfon customer service kami dan akan diarahkan untuk pengajuan dana',
  },
  {
    question: 'Apa saja syarat pengajuan modal usaha Danamu ?',
    answer:
      'Syarat utama pengajuan modal adalah identitas diri dan jaminan yang dapat dijaminkan. Serta harus memiliki usaha yang jelas dan dapat dipertanggungjawabkan',
  },
  {
    question: 'Berapa bunga waktu pengajuan modal usaha ?',
    answer:
      'Kami tidak pernah mematok nominal bunga untuk pengajuan modal usaha, kami lebih terbuka untuk negosiasi nominal bunga kepada Anda',
  },
]

export default function FAQ() {
  return (
    <div className="py-16 bg-white sm:py-24 lg:py-32">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Pertanyaan yang sering ditanyakan</h2>
            <p className="mt-4 text-lg text-gray-500">
              Belum mencari jawaban yang masih kurang meyakinkan, hubungi{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                customer service
              </a>{' '}
              kami.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg font-medium leading-6 text-gray-900">{faq.question}</dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
