export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop pb-section-gap pt-12 max-w-container-max mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row items-end gap-gutter">
          <div className="w-full md:w-3/5">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-8">
              Curating space for <span className="italic">intentional</span> living.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              We transform environments through a lens of architectural precision and organic warmth, offering bespoke design solutions tailored to your unique rhythm of life.
            </p>
          </div>
          <div className="hidden md:block w-full md:w-2/5 aspect-[4/5] bg-tertiary-fixed relative overflow-hidden">
            <img
              alt="Interior Design Hero"
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDpbYpb7bKE_hOHUIDwwrWFXCOP6jf6Fs6MZoPa6QZt8dVOBWCPDgawwWkQe0-hHcubsDZwxaDBt3be6PF_Z-5IiimmhKaxfAexoDpDZi2K-j_2ZiTm2kQk8KyJCVPh-Jh-AmokGlGBhtpEvq7htH4TeWV4OVbQcMKlreJ6NUbKI3h5MWFDgmo26uIZITwv26Yree0s0qurxKMiYKaLT5ro_AZSXsVAFU0p8_xKavlyUiLQl-wLwOlP6MvnRh5W8_4h6VGklSHMBsN"
            />
          </div>
        </div>
      </section>

      {/* Services Offering Bento Grid */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <div className="mb-section-gap">
            <span className="font-label-caps text-label-caps text-secondary block mb-4">OUR OFFERINGS</span>
            <h2 className="font-display-lg text-headline-md md:text-display-lg">Tailored design pathways.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Full-Scale Renovations */}
            <div className="md:col-span-8 group">
              <div className="relative overflow-hidden aspect-[16/9] mb-6">
                <img
                  alt="Renovation Project"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtLVeu0xXMI1syTl9cp4aAv57Mg91rGlgJxwRri4L3GJfhhNEks0QwAgu7jXw3J-_9aSbgeUWEHsPi_fLG3iSGlqjBMWImg9NDxLuGsDPPZnF3JTW8VS6nAGPzFZ3jSsMsk9nMxN1RIfBl_caHDJev7-OHWcqqUP8okU3olA74LfYPCQ3b4ggkEs-dCp_Hy0fxMah-vygvx4JziK6wCOPK4lv-PGcnxATuLMJw0QHAv-xA4_CJ0fiQ--aZTyzChwRa68ul4GSiVcxm"
                />
              </div>
              <h3 className="font-headline-md text-headline-md mb-4">Interior & Architectural Design</h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mb-6">
                Curating highly functional, visually stunning environments tailored to your rhythm of life. We handle everything from spatial planning and architectural detailing to final installation.
              </p>
              <ul className="flex flex-wrap gap-4 mb-8">
                <li className="bg-secondary-fixed-dim/30 px-4 py-1 font-label-caps text-label-caps rounded-lg">Spatial Planning</li>
                <li className="bg-secondary-fixed-dim/30 px-4 py-1 font-label-caps text-label-caps rounded-lg">CAD Drafting</li>
                <li className="bg-secondary-fixed-dim/30 px-4 py-1 font-label-caps text-label-caps rounded-lg">Project Management</li>
              </ul>
            </div>
            {/* Room Styling */}
            <div className="md:col-span-4 flex flex-col justify-between border-t border-outline-variant pt-8">
              <div>
                <h3 className="font-headline-sm text-headline-sm mb-4">Structural & Engineering Design</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  The invisible strength behind the beauty. Flawless technical drawings and structural integrity.
                </p>
              </div>
              <div className="aspect-square bg-tertiary-fixed mb-6">
                <img
                  alt="Room Styling"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbvF84-1EFlxgJz86udsvj2d0_fz_qs8YN581jvKWZOwlFykRs82R3IPRc4OCUgQHl8jZp8_C-Q_ZNNVGq07srYmUBm_fg2xm-zsTLhNqkDqOFGEXU6j8nzsNJEUKUCd8qaxQ84n_VyDpGLg5ev1RolorcA0Xuf4dA-xMln1ozetk_iEicLhAVt2v8jMvvI2jhu8g9jekaNkEA0CYgEL4yG5YYSngXnjq9SVNSkui7q-MSL-VpoldU_EqxXEvd7WSnqzR4LHLOWLQ6"
                />
              </div>
            </div>
            {/* Virtual Consultations */}
            <div className="md:col-span-4 border-t border-outline-variant pt-8">
              <h3 className="font-headline-sm text-headline-sm mb-4">Landscape & Town Planning</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Harmonizing human habitation with Shimla's breathtaking natural topography and Vastu-compliant town planning.
              </p>
              <button className="flex items-center gap-2 font-button text-button group">
                BOOK A SESSION
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
            {/* Decorative Divider */}
            <div className="hidden md:block md:col-span-8 border-t border-outline-variant pt-8 relative">
              <div className="absolute right-0 top-0 h-full w-[1px] bg-outline-variant/30"></div>
              <div className="flex h-full items-center justify-center italic font-display-lg text-headline-md text-outline">
                "Detail is the soul of a room."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-section-gap items-center">
          <h2 className="font-display-lg text-headline-md md:text-display-lg">
            The Our Space Studio <span className="italic">Process</span>.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Our methodical approach ensures transparency, creativity, and precision at every stage of the journey from concept to completion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {/* Step 1 */}
          <div className="relative">
            <div className="mb-8 flex items-baseline">
              <span className="font-display-lg text-display-lg-mobile text-secondary-fixed-dim mr-4">01</span>
              <h4 className="font-headline-sm text-headline-sm">Discovery</h4>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              An initial deep-dive into your lifestyle, aesthetic preferences, and the functional requirements of your space.
            </p>
            <span className="material-symbols-outlined text-outline">architecture</span>
          </div>
          {/* Step 2 */}
          <div className="relative">
            <div className="mb-8 flex items-baseline">
              <span className="font-display-lg text-display-lg-mobile text-secondary-fixed-dim mr-4">02</span>
              <h4 className="font-headline-sm text-headline-sm">Concept</h4>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Developing a cohesive visual narrative through mood boards, material palettes, and preliminary floor plans.
            </p>
            <span className="material-symbols-outlined text-outline">palette</span>
          </div>
          {/* Step 3 */}
          <div className="relative">
            <div className="mb-8 flex items-baseline">
              <span className="font-display-lg text-display-lg-mobile text-secondary-fixed-dim mr-4">03</span>
              <h4 className="font-headline-sm text-headline-sm">Refinement</h4>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Detailed technical drawings, final material selection, and procurement of furniture and fixtures.
            </p>
            <span className="material-symbols-outlined text-outline">layers</span>
          </div>
          {/* Step 4 */}
          <div className="relative">
            <div className="mb-8 flex items-baseline">
              <span className="font-display-lg text-display-lg-mobile text-secondary-fixed-dim mr-4">04</span>
              <h4 className="font-headline-sm text-headline-sm">Realization</h4>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              White-glove installation and styling to bring the vision to life, down to the very last textural detail.
            </p>
            <span className="material-symbols-outlined text-outline">check_circle</span>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto flex flex-col items-center text-center">
          <h2 className="font-display-lg text-headline-md md:text-display-lg mb-8 max-w-2xl">
            Ready to redefine your perspective on home?
          </h2>
          <button className="px-12 py-4 border border-on-primary font-button text-button hover:bg-on-primary hover:text-primary transition-all duration-300">
            START YOUR PROJECT
          </button>
        </div>
      </section>
    </>
  );
}
