import Link from "next/link";

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[819px] overflow-hidden bg-surface-container-highest -mt-24">
        <img
          alt="The Ethereal Penthouse Living Room"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwg1pdGtL4vaJpgL1iH5PN8tA2DTCFe3qZGwdAQOt51VjGVVWLodxpFwgW-OFLNQ4-eMNMxO1ZS5mB23Y6dm2OgQSmD4qr5OCDMVG9DQp1r4YD9-bRs7rt8t6MWtrhNkSF8KJhjotVTzegL5ZDI7gcyuAvJe3Ut_HaV_pRP9n6L-ezmo2ZT37hUBWfUT5qrDfwb-UDkS0l4-08xewaPsWN0J0ViLBwbfX9miubPDuovyZIJRHSpTPggnwRB4hFUZ0e9J6k3ipMfhpR"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent flex items-end">
          <div className="px-margin-mobile md:px-margin-desktop pb-section-gap max-w-container-max mx-auto w-full">
            <span className="font-label-caps text-label-caps text-on-primary/80 mb-4 block">RESIDENTIAL · 2024</span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary max-w-3xl">
              The Ethereal Penthouse: A Study in Light &amp; Texture
            </h1>
          </div>
        </div>
      </section>

      {/* Project Overview & Narrative */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 border-l border-outline-variant pl-8 mb-12 md:mb-0">
            <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase tracking-[0.2em]">Project Details</h3>
            <div className="space-y-6">
              <div>
                <p className="font-label-caps text-label-caps text-secondary mb-1">LOCATION</p>
                <p className="font-body-md text-body-md">Chelsea, New York City</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-secondary mb-1">SCOPE</p>
                <p className="font-body-md text-body-md">Full Renovation &amp; Furnishing</p>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-secondary mb-1">CLIENT</p>
                <p className="font-body-md text-body-md">Private Art Collector</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-headline-md text-headline-md mb-8 text-primary">The Vision</h2>
            <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6 max-w-2xl">
              <p>
                For this 3,400 square foot penthouse, the objective was to create a sanctuary that felt both expansive and intimate. We moved away from the typical 'white box' luxury aesthetic, instead embracing a tonal hierarchy of bone, charcoal, and sand.
              </p>
              <p>
                The design narrative centers on "tactile minimalism"—a philosophy where every surface invites touch, from the hand-applied plaster walls to the reclaimed timber accents. By stripping away visual noise, we allowed the client's significant contemporary art collection to breathe, creating a gallery-like experience that remains fundamentally a home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Comparison */}
      <section className="bg-surface-container py-section-gap overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Metamorphosis</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">The transition from a dated industrial loft to a refined residential sanctuary.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="group relative overflow-hidden bg-surface-dim">
              <img
                alt="Before Renovation"
                className="w-full h-[500px] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA94nx7SnaAkZQXLc3V7rToC7inzoH2wqHhDO9rpPFS0tI3SliXjYsUFJCLrGN1aHtWBIesRFFStmXc7TjLgna2yoWSjmNRxMHMadtlqOrkJGpg_CV8tVAywTbGIw-JVd071FPPj95VT_wPEmLNk05HeUrANv0cfy_zXBpTiynvtoB0jfHeKkgnZYtRMyA85Kbm7s9FxLI7gSROuh7dCfGIs6BB3jSHnd_vxRxb0IUFVPwK5T2Y64lAj93AZkh0JEvQqZBkw1Wo3xPt"
              />
              <div className="absolute top-6 left-6 bg-primary/20 backdrop-blur-sm px-4 py-1">
                <span className="font-label-caps text-label-caps text-on-primary">BEFORE</span>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-surface-bright">
              <img
                alt="After Renovation"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCueIOUbz-A0bBJG5D69rdLLCwfRbYCTVJehAbGT257COCk1aXgV69k2h60E_OcUHd8ztsKxS-F6EXGDMnnmIqOlZL4cJVV7jvAI61Td9mMH9-j9N0UZ4wrWsZ0KppzYM3xuUp2uw36cJAVj7AsSGm3QYa-YFQj-ttJtTAUdoueFIu1-X-E496E6GhrmIR0mu3XAo9_8T3tcKOoeIy0dxD0GDh22Apjua1GUqepVWwC-uiCqNmJYP3G60ou76dWkqD6yUiQdU8-DfEe"
              />
              <div className="absolute top-6 left-6 bg-primary px-4 py-1">
                <span className="font-label-caps text-label-caps text-on-primary">AFTER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material & Color Palette Section (Bento Style) */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16">
          <h2 className="font-headline-md text-headline-md text-primary">The Materiality</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">A curated selection of tactile elements defining the project's soul.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Color 1 */}
          <div className="bg-[#F9F8F6] p-8 flex flex-col justify-end border border-outline-variant/30">
            <span className="font-label-caps text-label-caps text-on-surface-variant mb-2">BONE</span>
            <p className="font-body-md text-body-md text-on-surface-variant opacity-70">Main Wall Finish</p>
          </div>
          {/* Material 1 */}
          <div className="md:col-span-2 relative overflow-hidden bg-surface-container">
            <img
              alt="Italian Travertine Texture"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR3KHU-ZIPvX6-w3EBzZZGmM0t8xWZrGPLbjjRVZkWcNmFwiysAv50IrwuLYoQpBYx0SEaGwWESTqDbaMMs5JPo30QNbOHb4Ywb1h0FRpySL8aixxmAPRU9Vm5-Lj-f-ggZl5SiNQQ4_xMwiOJ8Psvh_YlOqLr55fapVRabgI1_QNaEPzmuf7-uwDoM1UamE42rkqK485RICXVaIl3fuocfmCoNM8hjalTKz1eS8bWctlOfX-1L7sXtBHq4TcAtqjwmlbJq9yQVF2E"
            />
            <div className="absolute inset-0 bg-primary/10 hover:bg-transparent transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6">
              <p className="font-label-caps text-label-caps text-on-primary bg-primary/40 backdrop-blur-sm px-3 py-1">TRAVERTINE NORE</p>
            </div>
          </div>
          {/* Color 2 */}
          <div className="bg-[#2C2C2C] p-8 flex flex-col justify-end">
            <span className="font-label-caps text-label-caps text-on-primary mb-2">CHARCOAL</span>
            <p className="font-body-md text-body-md text-on-primary opacity-60">Architectural Accents</p>
          </div>
          {/* Material 2 */}
          <div className="md:col-span-2 relative overflow-hidden bg-surface-container">
            <img
              alt="Brushed Walnut Grain"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKGVj9XaMj4kQmcpXMgvYMt4QGFO9dy87JG3QEQyBBBGb6PzyPONiHgNDKmV04ty5qWxN9Dx97NzQcanQ04c-Bfqd354S7t0e5RKWTHupYncRzOpiZbUiuoFJNy8w_BGukcJol_I-t-uVzy_rE1La_48y2QZ6XHBuMQpvtJSvPzHxdq2TLZHOqIe7xGqxVUDqO97rfEs2avamZVisKjSyKsySWcNGZucWG4q2_TZGeZsPok6bX_w13inXLHtz8UKFKoE19QmJNFCfU"
            />
            <div className="absolute bottom-6 left-6">
              <p className="font-label-caps text-label-caps text-on-primary bg-primary/40 backdrop-blur-sm px-3 py-1">BRUSHED WALNUT</p>
            </div>
          </div>
          {/* Color 3 */}
          <div className="bg-[#D8C3A5] p-8 flex flex-col justify-end">
            <span className="font-label-caps text-label-caps text-on-surface-variant mb-2">SAND</span>
            <p className="font-body-md text-body-md text-on-surface-variant opacity-70">Textile Palette</p>
          </div>
          {/* Material 3 */}
          <div className="relative overflow-hidden bg-surface-container">
            <img
              alt="Belgian Linen"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn-UVSH0l4DX3MnxKIsf07c-o66S8O5cP-7NAHRvf8EXGLV_bGd5S1w8u3Fv0bOu1Qj_26aKps0yf-S5SYJp5X90YEFPf5RQ_zCdYyBICaARdXQuAWPgmMx0C78439GRA7iOiG7nkQAWDuGAbXEaSFQ7HWBtip657CR0INOVPfilbkPvPbHhCD_U0oZrDXNZhZZKpJbk9AKFr2SUJvLgQDrcTqC5BhvSLvBBw2Mo1lhCTR7okG5I05rD9QTw6TCW6SEM5tqsvER7yl"
            />
            <div className="absolute bottom-6 left-6">
              <p className="font-label-caps text-label-caps text-on-primary bg-primary/40 backdrop-blur-sm px-3 py-1">RAW LINEN</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery (Asymmetric) */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 aspect-[4/5] overflow-hidden bg-surface-container">
            <img
              alt="Penthouse Master Bedroom"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC70EuYhkdmYKFGN2DJCb924tq9Ug_nBnfQbh8u4bBzaA20Ha7QakGSX-XCJffSXxaaoxWJg09jf0XFFLwuQtL-YZkeOoKFhtbnnWCTMkFjXGTOe6IkIsggOr3VLytcOjbwii1spSriTXTkhZFCi4T5jb33vPAiK_DCAnYMnv651aKIjndBJ8muSWjPhGHc4aE4iAoY7LW1lAHTnS9jAZSAIOt9vl0yqaXpXGvUdTTazPoNc1_w5xuonKcxT7oGxWUin8AJL2x4fbvU"
            />
          </div>
          <div className="md:col-span-5 pt-0 md:pt-32 space-y-8">
            <div className="aspect-square overflow-hidden bg-surface-container">
              <img
                alt="Luxury Bathroom Detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGsMqP3yUkLNqYXpGixd2qHIyZkjhvc4i68dBSAltNoCxoVb34FBk4buSZC5aWqaWAcl1Mp2Tz7SN3vcBO21WykfwL65wc8PDsE4-i44MpDuOX674rkWHAWtFmGMTMPsc-nnUtU0mvhFskKFqHjUAb8h8FtV5eO5AQ9fhR00UVmdovXqH0nABwpX8C841Ttmem4HcWXOqoh4Cl7J2z5BaXqL0cyxoxNhkXTDNCMGVYsKXWJMRIjpDJq42C41QhCdT44ZzV85Ip2CYu"
              />
            </div>
            <div className="bg-surface-container-low p-12 border-t-2 border-secondary">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">format_quote</span>
              <blockquote className="font-display-lg text-headline-sm text-primary mb-8 leading-relaxed italic">
              "Our Space Studio didn't just design a house; they curated a feeling. Every morning when the light hits the plaster, I'm reminded why we chose them."
            </blockquote>
              <p className="font-label-caps text-label-caps text-secondary">— ELENA R., HOMEOWNER</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Preview */}
      <section className="py-section-gap border-t border-outline-variant/30 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase tracking-[0.3em]">Next Project</p>
        <Link className="group inline-block" href={`/portfolio/${Number(id) + 1}`}>
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary hover:text-secondary transition-colors duration-300">
            The Obsidian Villa
          </h2>
          <div className="h-1 w-0 group-hover:w-full bg-secondary mx-auto transition-all duration-500 mt-2"></div>
        </Link>
      </section>
    </>
  );
}
