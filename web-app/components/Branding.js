import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";

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

export default function Branding() {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		document.documentElement.classList.add("dark");
		localStorage.setItem("theme", "dark");
	});

	return (
		<div id="logo" className="flex justify-between align-center items-center">
			<div className="align-center">
				<h1 className="text-4xl font-bold">Will I Pass?</h1>
				<p className="dark:text-neutral-200 font-light text-pink-500 hover:cursor-pointer">
					by <Link href="https://github.com/aaanh">Anh Hoang Nguyen</Link>
				</p>
				<div className="flex justify-evenly space-x-2">
					<button
						onClick={(e) => {
							e.preventDefault();
							Router.push("https://www.hoanganh.dev/");
						}}
						className="border-b border-transparent hover:border-b-sky-500"
					>
						Home
					</button>
					<button
						onClick={() => {
							setShowModal(true);
						}}
						className="border-b border-transparent hover:border-b-sky-500"
					>
						About
					</button>
				</div>
			</div>

			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-neutral-900 outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-3xl font-semibold">About</h3>
								</div>
								{/*body*/}
								<div className="relative p-6 flex-auto">
									<p className="my-4 text-slate-500 dark:text-green-400 text-lg leading-relaxed">
										Version: 0.1 Alpha
									</p>
									<p>Rationale:</p>
									<blockquote className="my-4 text-slate-500 text-lg leading-relaxed border-l-2 pl-2 italic">
										&quot;I procrastinated by building this project during my
										final exam reviews. I was wondering whether or not I would
										pass my courses because, damn, I was caught slacking for the
										whole semester. Lol.&quot;
									</blockquote>
									<p>&mdash; Anh, probably, circa 2022</p>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}

			<div className="items-center">
				<ThemeSwitcher />
			</div>
		</div>
	);
}
