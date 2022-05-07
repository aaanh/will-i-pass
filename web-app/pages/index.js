import Link from "next/link";

import { useEffect, useState } from "react";

const CompMapper = ({ db }) => {
	console.table(db);

	return db.map((element, index) => (
		<div key={index}>
			<p className="font-mono text-sky-600 dark:text-sky-300">
				#{index} - {element}
			</p>
		</div>
	));
};

const AddComp = ({ handler, compList }) => {
	const handleAddComp = (e) => {
		e.preventDefault();
		handler(() => compList.concat(parseFloat(e.target.score.value)));
	};

	return (
		<form className="flex space-x-2 justify-evenly" onSubmit={handleAddComp}>
			<input
				type="text"
				className="mt-0
                  block
                  w-full
                  px-0.5
                  border-0 border-b-2 border-gray-200
                  focus:ring-0 focus:border-black dark:focus:border-sky-700 bg-transparent"
				name="score"
				placeholder="6.90"
			></input>
			<button type="submit">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
				</svg>
			</button>
		</form>
	);
};

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
				className="flex items-center h-full pr-2 dark:bg-primary rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition dark:text-pink-600"
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
				className="flex items-center h-full pr-2 bg-primary dark:bg-transparent rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition dark:text-white text-pink-600"
			>
				Light
			</button>
		</div>
	);
};

export default function Home() {
	const [isHomework, toggleHomework] = useState(false);
	const [isQuiz, toggleQuiz] = useState(false);
	const [isMidterm, toggleMidterm] = useState(false);
	const [isLab, toggleLab] = useState(false);
	const [isFinal, toggleFinal] = useState(false);

	const [homeworks, addToHomeworks] = useState([]);
	const [quizzes, addToQuizzes] = useState([]);
	const [midterms, addToMidterms] = useState([]);
	const [labs, addToLabs] = useState([]);
	const [finals, addToFinals] = useState([]);

	const [passMark, setPassMark] = useState();

	const [willPass, setPass] = useState(false);

	const handlePassMark = (e) => {
		let mark = parseFloat(e.target.value);
		if (mark < 0.0 || isNaN(mark)) setPassMark("");
		if (mark > 100.0) setPassMark(100.0);
		setPassMark(mark);
		console.log(mark);
	};

	return (
		<div className="font-['Be_Vietnam_Pro'] p-0 m-0 h-screen w-screen overflow-x-hidden md:py-8 md:px-8 bg-white text-slate-500 dark:bg-neutral-900 dark:text-white leading-8 flex flex-col align-center">
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
			<div id="toggler" className="mt-8 flex-wrap flex justify-evenly">
				<h2 className="text-xl dark:text-pink-400">Toggle Competency Components:</h2>
				<div>
					<label className="inline-flex items-center">
						<input
							className="form-checkbox"
							type="checkbox"
							onChange={() => toggleHomework(!isHomework)}
						/>
						<span className="ml-2">Homework</span>
					</label>
				</div>
				<div>
					<label className="inline-flex items-center">
						<input
							className="form-checkbox"
							type="checkbox"
							onChange={() => toggleQuiz(!isQuiz)}
						/>
						<span className="ml-2">Quiz</span>
					</label>
				</div>
				<div>
					<label className="inline-flex items-center">
						<input
							className="form-checkbox"
							type="checkbox"
							onChange={() => toggleMidterm(!isMidterm)}
						/>
						<span className="ml-2">Midterm</span>
					</label>
				</div>
				<div>
					<label className="inline-flex items-center">
						<input
							className="form-checkbox"
							type="checkbox"
							onChange={() => toggleLab(!isLab)}
						/>
						<span className="ml-2">Lab</span>
					</label>
				</div>
				<div>
					<label className="inline-flex items-center">
						<input
							className="form-checkbox"
							type="checkbox"
							onChange={() => toggleFinal(!isFinal)}
						/>
						<span className="ml-2">Final</span>
					</label>
				</div>
			</div>

			<div id="user-input" className="flex flex-wrap justify-evenly mt-8">
				{isHomework ? (
					<div
						id="homework"
						className="flex flex-col flex-wrap rounded-md border dark:border-green-500 border-neutral-800 p-2 min-w-[15vw]"
					>
						<h2 className="text-2xl text-center">Homework</h2>
						<label className="inline-flex items-center space-x-2">
							<span>Weight</span>
							<input className="form-input" type="text"></input>
						</label>

						<CompMapper db={homeworks}></CompMapper>
						<AddComp handler={addToHomeworks} compList={homeworks}></AddComp>
					</div>
				) : null}
				{isQuiz ? (
					<div
						id="quiz"
						className="flex flex-col flex-wrap rounded-md border dark:border-green-500 border-neutral-800 p-2 min-w-[15vw]"
					>
						<h2 className="text-2xl text-center">Quizzes</h2>
						<CompMapper db={quizzes}></CompMapper>
						<AddComp handler={addToQuizzes} compList={quizzes}></AddComp>
					</div>
				) : null}
				{isMidterm ? (
					<div
						id="midterm"
						className="flex flex-col flex-wrap rounded-md border dark:border-green-500 border-neutral-800 p-2 min-w-[15vw]"
					>
						<h2 className="text-2xl text-center">Midterms</h2>
						<CompMapper db={midterms}></CompMapper>
						<AddComp handler={addToMidterms} compList={midterms}></AddComp>
					</div>
				) : null}
				{isLab ? (
					<div
						id="homework"
						className="flex flex-col flex-wrap rounded-md border dark:border-green-500 border-neutral-800 p-2 min-w-[15vw]"
					>
						<h2 className="text-2xl text-center">Labs</h2>
						<CompMapper db={labs}></CompMapper>
						<AddComp handler={addToLabs} compList={labs}></AddComp>
					</div>
				) : null}
				{isFinal ? (
					<div
						id="homework"
						className="flex flex-col flex-wrap rounded-md border dark:border-green-500 border-neutral-800 p-2 min-w-[15vw]"
					>
						<h2 className="text-2xl text-center">Finals</h2>
						<CompMapper db={finals}></CompMapper>
						<AddComp handler={addToFinals} compList={finals}></AddComp>
					</div>
				) : null}
			</div>
			<div id="cut-off" className="mt-12 fixed bottom-8">
				<h2 className="text-2xl">Pass/Fail Point</h2>
				<label className="inline-flex items-center">
					<input className="" type="text" onChange={handlePassMark} placeholder={60.0} />
				</label>
			</div>
			<div id="calculate"></div>

			<div
				id="result"
				className="fixed bottom-4 right-4 text-8xl inline-flex items-center space-x-4"
			>
				<button
					className="text-2xl rounded-full bg-transparent border border-slate-500 dark:bg-slate-500 p-4"
					onClick={() => setPass(!willPass)}
				>
					Debug: Result
				</button>

				<span className={willPass ? "text-green-500" : "text-slate-500"}>Pass</span>
				<span>/</span>
				<span className={willPass ? "text-slate-500" : "text-red-500"}>Fail</span>
			</div>
		</div>
	);
}
