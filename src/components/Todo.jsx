import { useState } from "react";

function Todo() {
	const [newTask, setNewTask] = useState("");
	const [newList, setNewList] = useState([]);

	function addTask() {
		setNewList([...newList, newTask]);
		setNewTask("");
	}

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "400px",
			}}
		>
			<h2>To Do List</h2>
			<form
				style={{ display: "flex", gap: "15px" }}
				onSubmit={(e) => {
					e.preventDefault();
					if (newTask.trim() !== "") {
						addTask();
					}
				}}
			>
				<input
					type="text"
					required
					style={{ width: "250px" }}
					value={newTask}
					placeholder="New Task..."
					onChange={(e) => setNewTask(e.target.value)}
				/>
				<button type="submit">Add task</button>
			</form>
			<ul
				style={{
					textAlign: "left",
					width: "100%",
					height: "300px",
					overflowY: "auto",
					padding: "0",
				}}
			>
				{newList.map((task, key) => {
					return (
						<div style={{ display: "flex", gap: "4px", textAlign: "left" }}>
							<input type="checkbox"></input>
							<li style={{ listStyle: "none" }} key={key}>
								{task}
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
}

export default Todo;
