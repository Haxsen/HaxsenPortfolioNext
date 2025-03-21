import Link from 'next/link';

export default function Hero() {
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg mt-4">Discover my projects and skills.</p>
        <Link href="#projects">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
            Explore Projects
          </a>
        </Link>
      </div>
    </div>
  );
}
