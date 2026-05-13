import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      {/* Hero / Title Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap pt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter">
          <div className="max-w-2xl">
            <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest block mb-4">Curated Environments</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">Selected Works</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              A collection of architectural interiors where precision meets warmth. Each project is a dialogue between space, light, and the texture of living.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16">
        <div className="flex flex-col md:flex-row gap-8 border-y border-outline-variant py-8">
          <div className="flex flex-col gap-3">
            <span className="font-label-caps text-label-caps text-on-surface-variant">ROOM TYPE</span>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-1.5 rounded-lg bg-primary text-on-primary font-button text-button">All Rooms</button>
              <button className="px-4 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors font-button text-button">Kitchen</button>
              <button className="px-4 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors font-button text-button">Living</button>
              <button className="px-4 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors font-button text-button">Bedroom</button>
            </div>
          </div>
          <div className="md:w-px md:bg-outline-variant md:h-12 self-end hidden md:block"></div>
          <div className="flex flex-col gap-3">
            <span className="font-label-caps text-label-caps text-on-surface-variant">DESIGN STYLE</span>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors font-button text-button">Modern</button>
              <button className="px-4 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors font-button text-button">Classic</button>
              <button className="px-4 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors font-button text-button">Minimalist</button>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Bento-Style Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Project 01 */}
          <Link href="/portfolio/1" className="md:col-span-8 group cursor-pointer block">
            <div className="relative overflow-hidden aspect-[16/10] bg-surface-container mb-6">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg9WFhxLz1Y_NGCyxohHfYjTqGmq-OhFAOP_GBQIhW9Ywdzht3GWeW40-WlRriR13hK9BWUVsqaQ_eYHUJFeoGZtePyDtT_jRzAGFFpZVtP2n0xkd1QUxztMnJLeHsC-Z9YzKDfd-4E4pPny9HdoetU2v7PAwjFTFAVnMtkM5ACpuGSE_MLsMc6RAXOV9Lzngs62FOoCdwvS3dWVmebFkyLf0RpYYipJ1HvSAeLoKHAcHxlJP2rXclmvPdhL4lm4m_2OzRtrDNIl0r"
                alt="The Atrium House"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-sm text-headline-sm mb-2">The Atrium House</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Modern · Living Room</p>
              </div>
              <div className="font-label-caps text-label-caps border border-outline-variant px-3 py-1">2023</div>
            </div>
          </Link>

          {/* Project 02 */}
          <Link href="/portfolio/2" className="md:col-span-4 group cursor-pointer md:mt-24 block">
            <div className="relative overflow-hidden aspect-[3/4] bg-surface-container mb-6">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcTL7adWeEODB_iz-ODOBz2D9diCkhYMdBmhL327hQyCq2REziRZOcVmi82-946QaIs79t6TgLSgntmCiWGR25Z4xENejNURDCb1cQDG-oDuAQ277iGpAvg5uDJLV9zPAzoUI9XG1bU_BWrgVah-Suen1E1KzRKL9sZgvXrFY8XDPeY1EjUioFw8KeczKx3gR6GGExyI0QywAh9PDExxyykcWYtSzqqZvb5iQBr5KIUvtGp5ZXoYdd2vtwfbOiZwQGdPSz3ordP4AG"
                alt="Heritage Kitchen"
              />
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-2">Heritage Kitchen</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Classic · Kitchen</p>
          </Link>

          {/* Project 03 */}
          <Link href="/portfolio/3" className="md:col-span-4 group cursor-pointer block">
            <div className="relative overflow-hidden aspect-square bg-surface-container mb-6">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuUhEzkBBJH5Oo__cgJKBtCFtrwRQHlGXCHnLv-cQkUwuoZPelYvfg37v-UrLOk8ED-Lddo1vN4K9YDsVncH-M5GcNCciGWBeDE-QxkQWRxSKSjPuGpjloneHbegyZzKSGI4H8hS_kOBpCNfe2bsc-2ZweW7mtmDiwM2b36pVnxttnJY3UIfpPfKF39y9WM5lKShKnLWSD3UnBSyWLjnG_NFri4njRY4QXYvoojwOFy2M_tWG7aTa6X1tvCrd8WC4JIcx_EZPdL8ur"
                alt="Serene Suite"
              />
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-2">Serene Suite</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Modern · Bedroom</p>
          </Link>

          {/* Project 04 */}
          <Link href="/portfolio/4" className="md:col-span-8 group cursor-pointer md:-mt-24 block">
            <div className="relative overflow-hidden aspect-[16/9] bg-surface-container mb-6">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCplgvd7o-IgH4ZPyiKcV4ih9Tqjg9kPAYUAy1ywZop8jhVU9LEoyjXYiAr9YqO54NJ-r11WQ8sWEf-sOuprjtIsNkmSSMXRMpfymdZh8NDMzUB00i7Vkou6L_iQH3AHQu9AU1B4FYtxHC43lFtpXDjdVPIvc9BRyQPsuHXrJpxnXFp8QsYjk6Fg1ZJD0E0fknWaDJzxkM1CNBWYebvUr0c-OIi8UlXQ54Wb6pxQY819YYb-TT5hBNGQpNMut_I2tPur_6DUkH4u6R6"
                alt="The Penthouse Loft"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-sm text-headline-sm mb-2">The Penthouse Loft</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Modern · Living Room</p>
              </div>
              <div className="font-label-caps text-label-caps border border-outline-variant px-3 py-1">2024</div>
            </div>
          </Link>

          {/* Project 05 */}
          <Link href="/portfolio/5" className="md:col-span-6 group cursor-pointer block">
            <div className="relative overflow-hidden aspect-[4/5] bg-surface-container mb-6">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwmViR13A2-zStzDPNNw6qzqfz2D3uq1c3Ie9qHD1s3hG56BgKpPjR7mwctlgNLZCHrlUb3HS-aHT4qQb4Y7kO-dIg1ciIsAmzTiLgB_zGULFov9PQsgdJZMIJfDNDfpqgy-Eknq_pJD4pWNGcBsXkWDqN9N_7v4aKreDaZ0vHqgd4i5mPoNTb1JbqtwQSvs0m-e7LECHqocz03wABAcKuM_aTlhGB1U169PNK1TrzgLWJlnFBJzDufBk98tqRrJwx7ttSnWYgx-W9"
                alt="Monolith Bath"
              />
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-2">Monolith Bath</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Minimalist · Bathroom</p>
          </Link>

          {/* Project 06 */}
          <Link href="/portfolio/6" className="md:col-span-6 group cursor-pointer md:mt-24 block">
            <div className="relative overflow-hidden aspect-[4/5] bg-surface-container mb-6">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF8XUgB_m9GkhaugkhNwkmrwGO1a89ua3K3ZPbX6djBdiLrUwdfHYL7TOASr-5masfqZtoC5NrzDrF24JlzyNq2WRhxVkGisdaxJWv0euD7MxvS37RWzywXaz0ij7QUCNnOZbT5leeLpfyoZCbH4Ub0xY4zkgbUbGUHk5G-ky5T0UJDg61wQMn5Ub4Ey1I4L2aAss517W-9eWCBvk3vX_Mgvl8EbOq_tz1kzsltMzmIBGGz1HeLq3en9uu_k4mqoOWzkRugX5ki8OS"
                alt="The Archive Study"
              />
            </div>
            <h3 className="font-headline-sm text-headline-sm mb-2">The Archive Study</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Classic · Library</p>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface-container py-section-gap">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-display-lg text-headline-md md:text-headline-md mb-8">Have a project in mind?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-xl mx-auto">
            Let's collaborate to create a space that reflects your vision and enhances your daily ritual.
          </p>
          <button className="bg-primary text-on-primary px-10 py-4 font-button text-button hover:bg-secondary transition-all duration-300">
            Book a Consultation
          </button>
        </div>
      </section>
    </>
  );
}
