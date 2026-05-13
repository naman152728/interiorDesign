export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative h-[calc(100vh-6rem)] w-full overflow-hidden -mt-24">
        <div className="absolute inset-0 bg-primary/20 z-10"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="A sprawling contemporary living room"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPdh1Aly4PR6h28IPIr8RJIwZ-y5hIXlwtagj8W7T1MfUmGCiiFQXDzqHa0BGxiR89H8Fcu8U8npkbREc4AzKWdk-cmDHG8jCHc0ru85XQ3N6-XcWK37SfgnE02vcvqTHxaLu8hEqzuObr4Dv3isfgrLoPtKTAt9Vqfrp86l59Zuh53OidHyIhUHkRjDt9eFAfOtnb9fa5KsqCKNADePlL0IfEx1swhp52MBKvC8KtDb5nuzp4dMATlnK8tKaWgdZNnSe6bCd1I3xl"
        />
        <div className="relative z-20 h-full flex flex-col justify-end px-margin-mobile md:px-margin-desktop pb-section-gap max-w-container-max mx-auto">
          <div className="max-w-2xl">
            <p className="font-label-caps text-label-caps text-on-primary uppercase tracking-[0.2em] mb-4">Signature Project No. 24</p>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-6 leading-tight">
              Where Precision Meets Purpose.
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary max-w-xl mb-8">
              Award-winning interior architecture, structural engineering, and meticulous design for Shimla's most exclusive residential and commercial spaces.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-on-primary"></div>
                <span className="font-button text-button text-on-primary uppercase tracking-widest cursor-pointer hover:opacity-70 transition-opacity">View Project</span>
              </div>
              <div className="font-label-caps text-label-caps text-on-primary bg-primary/40 backdrop-blur-sm px-4 py-2 border border-on-primary/20 inline-block">
                ⭐️⭐️⭐️⭐️⭐️ 5.0 RATED BY 110+ CLIENTS IN SHIMLA
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 mb-12 md:mb-0">
            <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-6">Our Philosophy</p>
            <h2 className="font-display-lg text-headline-md md:text-headline-md mb-8 text-primary">Mastery in Every Detail.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-md leading-relaxed">
              We don’t just design spaces; we engineer environments. From structural integrity and Vastu-compliant town planning to the final texture of your interior finishes, Our Space Studio delivers a seamless, holistic architectural experience. Our commitment is simple: absolute precision and visually stunning execution.
            </p>
            <button className="border border-primary text-primary px-8 py-3 font-button text-button uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300">
              Discover Our Process
            </button>
          </div>
          <div className="md:col-span-7 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                className="w-full aspect-[4/5] object-cover"
                alt="A detailed shot of a minimalist home office"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAody5QCwMqnKJjdokOynDgMe93o6zbtkml1okZ2Mz9TvMb0hlL2gD2UbDEyxHfZ5bj_4lKjeKk3ktfOcV8puvI4cyXg7-oawkJ42QP-kEmTeKGtAteOCvp9EILeeKtdcVa8s5DEF_QitPtOvN9F1VW5PqIcChTrDTeEorzqi0lWCEIj8O_AocJTBrX1R4vnpPEJnddLEabTMKuBuVYkKphX9PofPdtiVI8kRHBMsjkFMqujXi7IqLgmUb5BOE_cRj_zJdDBWt3qofh"
              />
              <img
                className="w-full aspect-[4/5] object-cover mt-12"
                alt="A minimalist architectural detail showing a staircase"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxopUQEh0UTgzPJALnhLnGNIjbIV5-tG-O2uiAnuYZsIXpA2AcFXdvUlI3HceRmW25CkkxyZ_ed8U4y48ucRcbxc0rza3wV0IJveqEGddrXdA5EXJ6oAn0BrvItePMEfnxRfZ3DFTPE0hq7me9CVgUyHMjX5RqKsIw-W7rc_9DGEU4wVtDlCKySkIqJyplUnh1zcaTohJY47Hr_vZzFGCojQvYzrEDt4OJNmG8pBDle9EPqprZRKB5bm7WLaIEziKCP_Jg1DM3EzTT"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Grid */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-4">Portfolio</p>
              <h2 className="font-display-lg text-headline-md text-primary">Featured Works</h2>
            </div>
            <button className="font-button text-button text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity">
              View All Projects
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Project Card 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-surface-container-highest">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="A modern kitchen design"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNyMncv5l6AlxrYU49uuc7pYPBKhkz040KBNIQ0tEaqDxC7IS6-Ks31-YnaRql1Ilr_LKc3qKqRoEfrdr2DJjj-o4JbpLP-qUOD8SvtJDOEUbD-CmLFBhKGCv-zHvGdpym2PY86Bi7eCsdn73eq9eUqjTvI-pM40kD_LnZ4bWzpWtmtiJhZ_O5rvEMWC3W8p-Jsskfi7kWKAX4XwltBXavTsy57LqccZ4VtF64ZENcV4rO73by94ncEuNhHDg00myqT9m7ndRiXVgX"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Mesa Residence</h3>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Residential · Los Angeles</p>
                </div>
                <span className="material-symbols-outlined text-primary">arrow_outward</span>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="group cursor-pointer lg:mt-12">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-surface-container-highest">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="A high-end commercial office lounge area"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhzcjRS1wCSWCJSGfLlc4g1AVV1ORr1ontkJrxJzoEOvv1acUDIhyfbAJrpOW1ZCM-GXKBt881v29-aW8J5hWxNikHTmaxogA18XOAwmo_-f87txZAgk2rIa6z0mHuHljKIdab7OS1eSicFCRRt6NmpKhIWBOm4x3oFTiA0Oj-QY7rSeTSc53Jg-GzXWQTFGqtY4cXfTx0R2lfyZqQpZcrwSCJfjASrPhHCVZ9WLoWcUCDQw6LHF88fzX7xQVKdn8WBf0y8jNDrzDO"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1">Foundry Studio</h3>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Commercial · London</p>
                </div>
                <span className="material-symbols-outlined text-primary">arrow_outward</span>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-surface-container-highest">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="A serene bedroom interior"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgTmnM5HglAzpeeCho2beGCI5ri5dHwwcbFRUWbtaEHeitXnTup-j_JvjvrTmGtGceBtJWd1IdKB-7Goabl4Wh72mPh4-HueE0hpIrkJUl9ym-binacbjgvhgZxxqHXD8BCZbJ5gafAYzKdh4V_bV-R-BvZurIzf0myRNXs5-Wm1m9zg_oB0y7eZr7isXyrT1VvS2srgXZhhds0eC0fyqdFQ35h8ZssBbSOQjG-t0pODdim7xf9Y9V__PaRqioH6g1N44IrUXjXMhb"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-1">The Nordic Flat</h3>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Residential · Copenhagen</p>
                </div>
                <span className="material-symbols-outlined text-primary">arrow_outward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em] mb-4">Kind Words</p>
          <h2 className="font-display-lg text-headline-md text-primary">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="p-10 bg-surface-container border border-tertiary-fixed">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            <blockquote className="font-display-lg text-headline-sm text-primary mb-8 leading-relaxed italic">
              "Thoughtful interior detailing created a space that is both functional and visually stunning. Highly recommended for anyone seeking excellence in design and execution."
            </blockquote>
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">— Happy Homeowner, Shimla</p>
          </div>
          <div className="p-10 bg-surface-container border border-tertiary-fixed">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
            <blockquote className="font-display-lg text-headline-sm text-primary mb-8 leading-relaxed italic">
              "Both of them know their job extremely well and are committed to their profession. They look into every detail minutely and do all planning with precision."
            </blockquote>
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">— Satisfied Client, Shimla</p>
          </div>
        </div>
      </section>

      {/* Start Your Project CTA */}
      <section className="py-section-gap bg-primary text-on-primary">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
          <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md mb-8">Ready to define your space?</h2>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-xl mx-auto mb-12 opacity-90">
            Each journey begins with a conversation. Let's discuss your vision and how we can bring it to life through intentional design.
          </p>
          <button className="bg-surface text-primary px-10 py-4 font-button text-button uppercase tracking-widest hover:bg-secondary-fixed transition-colors duration-300">
            Start Your Project
          </button>
        </div>
      </section>
    </>
  );
}
