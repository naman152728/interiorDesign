export default function About() {
  return (
    <>
      {/* Hero / Header Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap pt-12">
        <div className="md:w-2/3">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">CURIOSITY &amp; INTENTION</span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-8">
            Designing spaces that reflect the soul of the dweller.
          </h1>
        </div>
      </section>

      {/* About the Designer Section (Asymmetric Layout) */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          {/* Image Container */}
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container overflow-hidden">
              <img
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA81UyxLNW9D4gkeju-asKMQE5R5TMCGz_DcGZSR40YjgoFvP73ZTGWK0b1qHpAx1KGmCjq4IofqubZZNt3BTlkKr58wYrG7rJdfYn6-9jwSUHfsbaQ0SDA1et9Wicn8T6Pd44f4swHgJZd73r2VQDm25v9yAOaOC4WFOwfI9-3kQWIkJTzvFzuTytISICL_laEbqwudUX2pmiuqnNEyVRZTKdkDLi7LG6Yk-0VhxMXh8RnKNtPj_hHx6nxKlhj15Y6LTCLCBcJEoTA"
                alt="Meet Vanessa Vance"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary-fixed-dim -z-10 hidden md:block"></div>
          </div>
          {/* Bio Content */}
          <div className="md:col-start-7 md:col-span-6 mt-12 md:mt-0">
            <h2 className="font-headline-md text-headline-md text-primary mb-6">Meet Our Space Studio</h2>
            <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
              <p>
                With over a decade of experience in high-end residential and commercial design, Our Space Studio has cultivated a signature style that balances architectural precision with organic warmth.
              </p>
              <p>
                Our Space Studio was founded on the belief that a well-designed space is not just a visual achievement, but a profound contributor to one's well-being. Every project begins with an exploration of the client's lifestyle, ensuring the final environment is as functional as it is beautiful.
              </p>
              <p>
                Based in Shimla, our team of dedicated designers and engineers share a commitment to timelessness, Vastu compliance, and meticulous craftsmanship.
              </p>
            </div>
            <div className="mt-10 flex gap-gutter">
              <div className="flex flex-col">
                <span className="font-display-lg text-headline-md text-primary">12+</span>
                <span className="font-label-caps text-label-caps text-secondary">YEARS EXPERIENCE</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display-lg text-headline-md text-primary">150+</span>
                <span className="font-label-caps text-label-caps text-secondary">PROJECTS COMPLETED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Bento Grid */}
      <section className="bg-surface-container-low py-section-gap">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16">
            <span className="font-label-caps text-label-caps text-secondary mb-2 block">OUR ETHOS</span>
            <h2 className="font-headline-md text-headline-md text-primary">Our Space Studio Philosophy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Bento Item 1 */}
            <div className="bg-surface p-10 flex flex-col justify-between border border-outline-variant/20 h-80">
              <span className="material-symbols-outlined text-secondary text-4xl">architecture</span>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Spatial Precision</h3>
                <p className="font-body-md text-on-surface-variant">We prioritize flow and proportion to create environments that feel natural and intuitive.</p>
              </div>
            </div>
            {/* Bento Item 2 */}
            <div className="bg-primary text-on-primary p-10 flex flex-col justify-between h-80">
              <span className="material-symbols-outlined text-secondary-fixed text-4xl">spa</span>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-primary mb-3">Organic Warmth</h3>
                <p className="font-body-md text-on-primary-container">Soft textures and natural palettes ensure that even the most modern spaces feel like home.</p>
              </div>
            </div>
            {/* Bento Item 3 */}
            <div className="bg-surface p-10 flex flex-col justify-between border border-outline-variant/20 h-80">
              <span className="material-symbols-outlined text-secondary text-4xl">inventory_2</span>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Curated Detail</h3>
                <p className="font-body-md text-on-surface-variant">Every object and finish is selected with intentionality to tell a cohesive story.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Contact Info */}
          <div>
            <h2 className="font-display-lg text-headline-md text-primary mb-8">Start a Conversation</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
              Whether you're planning a full-scale renovation or looking for a design consultation, we'd love to hear from you.
            </p>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-secondary mt-1">location_on</span>
                <div>
                  <h4 className="font-label-caps text-label-caps text-primary mb-1">STUDIO</h4>
                  <p className="font-body-md text-on-surface-variant">
                    Saligram Bhawan, Khalini<br />Shimla, HP 171002
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-secondary mt-1">mail</span>
                <div>
                  <h4 className="font-label-caps text-label-caps text-primary mb-1">INQUIRIES</h4>
                  <p className="font-body-md text-on-surface-variant">hello@ourspacestudio.in</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-secondary mt-1">call</span>
                <div>
                  <h4 className="font-label-caps text-label-caps text-primary mb-1">PHONE</h4>
                  <p className="font-body-md text-on-surface-variant">088944 94722</p>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-12 border-t border-outline-variant/30">
              <h4 className="font-label-caps text-label-caps text-secondary mb-6">FOLLOW THE JOURNEY</h4>
              <div className="flex gap-6">
                <a className="font-body-md text-primary hover:text-secondary transition-colors underline underline-offset-4" href="#">Instagram</a>
                <a className="font-body-md text-primary hover:text-secondary transition-colors underline underline-offset-4" href="#">Pinterest</a>
                <a className="font-body-md text-primary hover:text-secondary transition-colors underline underline-offset-4" href="#">LinkedIn</a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-surface p-8 md:p-12 border border-outline-variant/20 shadow-sm">
            <form className="space-y-8">
              <div className="relative">
                <label className="font-label-caps text-label-caps text-secondary block mb-2">FULL NAME</label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-2 transition-colors"
                  placeholder="Jane Doe"
                  type="text"
                />
              </div>
              <div className="relative">
                <label className="font-label-caps text-label-caps text-secondary block mb-2">EMAIL ADDRESS</label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-2 transition-colors"
                  placeholder="jane@example.com"
                  type="email"
                />
              </div>
              <div className="relative">
                <label className="font-label-caps text-label-caps text-secondary block mb-2">PROJECT TYPE</label>
                <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-2 transition-colors appearance-none">
                  <option>Residential Full Design</option>
                  <option>Commercial / Hospitality</option>
                  <option>Interior Styling</option>
                  <option>Consultation Only</option>
                </select>
              </div>
              <div className="relative">
                <label className="font-label-caps text-label-caps text-secondary block mb-2">PROJECT DETAILS</label>
                <textarea
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary px-0 py-2 transition-colors resize-none"
                  placeholder="Tell us about your space and vision..."
                  rows={4}
                ></textarea>
              </div>
              <button
                className="w-full bg-primary text-on-primary py-4 font-button text-button hover:bg-primary-container transition-all duration-300"
                type="submit"
              >
                SEND INQUIRY
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
