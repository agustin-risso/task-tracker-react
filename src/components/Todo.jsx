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

	function deleteTask(id) {
		const filteredList = todoList.filter((task) => task.id !== id);
		setTodoList(filteredList);
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
					display: "flex",
					flexDirection: "column",
					alignItems: "start",
					gap: "4px",
					height: "300px",
					overflowY: "auto",
					padding: "0",
				}}
			>
				{todoList.map((task, key) => (
					<li
						style={{
							listStyle: "none",
							display: "flex",
							width: "100%",
							alignItems: "center",
							width: "100%",
						}}
						key={key}
					>
						<input type="checkbox"></input>
						{task.taskName}
						<button
							style={{
								color: "white",
								backgroundColor: "red",
								padding: "3px 6px",
								marginLeft: "auto",
								fontSize: ".75rem",
							}}
							onClick={() => deleteTask(task.id)}
						>
							delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Todo;
