import { useEffect, useState } from "react";
import Branding from "../components/Branding";

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

const WeightInput = ({ comp, weight }) => {
	return (
		<label className="inline-flex items-center space-x-2 mb-2">
			<span>Weight</span>
			<input
				className="mt-0
    block
    w-full
    px-0.5
    border-0 border-b-2 border-gray-200
    focus:ring-0 focus:border-black dark:focus:border-sky-700 bg-transparent"
				type="text"
				placeholder="25.0"
			></input>
		</label>
	);
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
				placeholder="69.42"
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

const Toggler = ({ comp, handler, isEnable }) => {
	return (
		<div>
			<label className="inline-flex items-center">
				<input
					className="form-checkbox"
					type="checkbox"
					onChange={() => handler(!isEnable)}
				/>
				<span className="ml-2">{comp}</span>
			</label>
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

	const handleClearInput = (e) => {
		addToHomeworks([]);
		addToQuizzes([]);
		addToMidterms([]);
		addToLabs([]);
		addToFinals([]);
	};

	const handlePassMark = (e) => {
		let mark = parseFloat(e.target.value);
		if (mark < 0.0 || isNaN(mark)) setPassMark("");
		if (mark > 100.0) setPassMark(100.0);
		setPassMark(mark);
		console.log(mark);
	};

	return (
		<div className="font-['Be_Vietnam_Pro'] p-2 md:p-0 md:m-0 h-screen w-screen overflow-x-hidden md:py-8 md:px-8 bg-white text-slate-500 dark:bg-neutral-900 dark:text-white leading-8 flex flex-col align-center">
			<Branding></Branding>
			<h1 className="text-2xl">Suspended development until I need to procrastinate again 🥶</h1>
			<div id="toggler" className="mt-8 flex-wrap flex justify-evenly space-x-2">
				<h2 className="text-xl dark:text-pink-400">Toggle Competency Components:</h2>
				<Toggler comp="Homework" handler={toggleHomework} isEnable={isHomework}></Toggler>
				<Toggler comp="Quizzes" handler={toggleQuiz} isEnable={isQuiz}></Toggler>
				<Toggler comp="Midterms" handler={toggleMidterm} isEnable={isMidterm}></Toggler>
				<Toggler comp="Labs" handler={toggleLab} isEnable={isLab}></Toggler>
				<Toggler comp="Finals" handler={toggleFinal} isEnable={isFinal}></Toggler>
			</div>
			<div
				id="user-input"
				className="flex flex-wrap md:space-y-0 space-y-2 justify-evenly mt-8"
			>
				{isHomework ? (
					<div
						id="homework"
						className="flex flex-col flex-wrap rounded-md border dark:border-green-500 border-neutral-800 p-2 min-w-[15vw]"
					>
						<h2 className="text-2xl text-center">Homework</h2>
						<WeightInput></WeightInput>
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
						<WeightInput></WeightInput>

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
						<WeightInput></WeightInput>

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
						<WeightInput></WeightInput>

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
						<WeightInput></WeightInput>

						<CompMapper db={finals}></CompMapper>
						<AddComp handler={addToFinals} compList={finals}></AddComp>
					</div>
				) : null}
			</div>

			<div className="mt-12 flex justify-evenly w-full flex-wrap md:space-y-0 space-y-2 items-center">
				<div id="cut-off" className="mt-12 ">
					<h2 className="text-2xl">Pass/Fail Point</h2>
					<label className="inline-flex items-center">
						<input
							className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black dark:focus:border-sky-700 bg-transparent"
							type="text"
							onChange={handlePassMark}
							placeholder={60.0}
						/>
					</label>
				</div>

				<div className="flex flex-wrap items-center">
					<button
						onClick={handleClearInput}
						className="rounded-full p-2 text-pink-400 hover:text-pink-500 border-2 border-pink-400 hover:border-pink-500 transition-all ease-in-out"
					>
						Clear All Input
					</button>
				</div>

				<div
					id="result"
					className="text-2xl md:text-4xl flex flex-wrap items-center space-x-4"
				>
					<button
						className="text-xl rounded-full bg-transparent border border-slate-500 dark:bg-slate-500 p-4"
						onClick={() => setPass(!willPass)}
					>
						Debug: Result
					</button>

					<span className={willPass ? "text-green-500" : "text-slate-500"}>Pass</span>
					<span>/</span>
					<span className={willPass ? "text-slate-500" : "text-red-500"}>Fail</span>
				</div>
			</div>
		</div>
	);
}
