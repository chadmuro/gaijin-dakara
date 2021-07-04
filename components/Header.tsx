import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
	const router = useRouter();
	const [view, setView] = useState<string>(router.pathname);

	return (
		<>
			<header className="h-20 w-full max-w-4xl flex justify-between items-center">
				<h2 className="text-xl">Gaijin Dakara</h2>
				<div>
					<button className="bg-red-300 hover:bg-red-500 text-black px-2 py-1 rounded outline-none focus:outline-none focus:ring-2 focus:ring-white mr-3">
						Login
					</button>
					<button className="bg-red-300 hover:bg-red-500 text-black px-2 py-1 rounded outline-none focus:outline-none focus:ring-2 focus:ring-white">
						Sign up
					</button>
				</div>
			</header>
			<div>
				<h3 className="text-xl text-center italic">
					Helping foreigners understand the unwritten rules of Japan.
				</h3>
			</div>
			<div className="mt-4">
				<ul className="flex">
					<li className="mx-4" onClick={() => setView('/random')}>
						<Link href="/random">Random</Link>
						{view === '/' && <div className="h-1 w-full bg-red-300" />}
						{view === '/random' && <div className="h-1 w-full bg-red-300" />}
					</li>

					<li className="mx-4" onClick={() => setView('/categories')}>
						<Link href="/categories">Categories</Link>
						{view === '/categories' && (
							<div className="h-1 w-full bg-red-300" />
						)}
					</li>
					<li className="mx-4" onClick={() => setView('/contribute')}>
						<Link href="/contribute">Contribute</Link>
						{view === '/contribute' && (
							<div className="h-1 w-full bg-red-300" />
						)}
					</li>
				</ul>
			</div>
		</>
	);
}
