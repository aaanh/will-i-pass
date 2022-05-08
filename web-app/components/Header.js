import Link from "next/link";

const ThemeSwitcher = () => {
	return (
		<div className="flex border border-gray-900 text-slate justify-center dark:transparent dark:border-gray-500 rounded-3xl p-2">
			<button
				type="button"
				aria-label="Use Dark Mode"
				onClick={() => {
					document.documentElement.classList.add("dark");
					localStorage.setItem("theme", "dark");
				}}
				className="flex items-center pr-2 dark:bg-primary rounded-3xl justify-center align-center p-2 w-24 h-10 transition dark:text-pink-600"
			>
				Dark
			</button>

			<button
				type="button"
				aria-label="Use Light Mode"
				onClick={() => {
					document.documentElement.classList.remove("dark");
					localStorage.setItem("theme", "light");
				}}
				className="flex items-center pr-2 bg-primary dark:bg-transparent rounded-3xl justify-center align-center p-2 w-24 h-10 transition dark:text-white text-pink-600"
			>
				Light
			</button>
		</div>
	);
};

export default function Header() {
	return (
		<div id="logo" className="flex justify-between align-center items-center">
			<div className="align-center">
				<h1 className="text-4xl font-bold">Will I Pass?</h1>
				<p className="dark:text-neutral-200 font-light text-pink-500">
					by <Link href="https://github.com/aaanh">Anh Hoang Nguyen</Link>
				</p>
			</div>
			<div className="items-center">
				<ThemeSwitcher />
			</div>
		</div>
	);
}
