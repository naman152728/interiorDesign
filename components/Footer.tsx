import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-section-gap bg-surface-container">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-gutter">
        <div className="flex flex-col gap-2">
          <div className="font-display-lg text-headline-md text-primary uppercase">Our Space Studio</div>
          <div className="font-body-md text-on-surface-variant max-w-xs opacity-80">Saligram Bhawan, Khalini, Shimla, HP 171002</div>
        </div>
        <div className="flex flex-wrap gap-gutter mt-6 md:mt-0">
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-300 opacity-80 hover:opacity-100">
            Privacy Policy
          </Link>
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-300 opacity-80 hover:opacity-100">
            Terms of Service
          </Link>
          <Link href="/about" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-300 opacity-80 hover:opacity-100">
            Inquiries
          </Link>
          <Link href="#" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-300 opacity-80 hover:opacity-100">
            Instagram
          </Link>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant opacity-60 w-full md:w-auto mt-8 md:mt-0">
          © {new Date().getFullYear()} OUR SPACE STUDIO. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
