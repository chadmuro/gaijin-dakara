export default function Header() {
	return (
		<>
			<header className="h-20 w-full max-w-2xl flex justify-between items-center">
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
		</>
	);
}
