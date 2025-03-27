import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Defender
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">About</Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-400">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
