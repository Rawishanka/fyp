import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-blue-800 text-white py-4">
      <nav className="container mx-auto flex justify-between">
        <ul className="flex space-x-4">
          <li><Link href="#introduction" className="hover:underline">Introduction</Link></li>
          <li><Link href="#motivation" className="hover:underline">Motivation</Link></li>
          <li><Link href="#problem-statement" className="hover:underline">Problem Statement</Link></li>
          <li><Link href="#objectives" className="hover:underline">Objectives</Link></li>
        </ul>
      </nav>
    </header>
  );
};
