import { useState } from "react";

function Todo() {
	const [newTask, setNewTask] = useState("");
	const [todoList, setTodoList] = useState([]);

	function addTask() {
		let lastId;

		todoList.length === 0
			? (lastId = 0)
			: (lastId = todoList[todoList.length - 1].id);

		setTodoList([...todoList, { id: lastId + 1, taskName: newTask }]);
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
			<div style={{ display: "flex", gap: "15px" }}>
				<input
					type="text"
					required
					style={{ width: "250px" }}
					value={newTask}
					placeholder="New Task..."
					onChange={(e) => setNewTask(e.target.value)}
				/>
				<button onClick={addTask} disabled={!newTask}>
					Add task
				</button>
			</div>
			<ul
				style={{
					textAlign: "left",
					width: "100%",
					height: "300px",
					overflowY: "auto",
					padding: "0",
				}}
			>
				{todoList.map((task, key) => (
					<li style={{ listStyle: "none" }} key={key}>
						<input type="checkbox"></input>
						{task.taskName}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Todo;
