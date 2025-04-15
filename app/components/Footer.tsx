import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-900 text-gray-300">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">MouldMakers</h3>
            <p className="text-sm text-gray-400">
              We are a leading mould making and 3D printing company, providing
              innovative solutions for various industries.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@mouldmakers.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Mould St, Cityville, State 12345</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Mould Makers Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
