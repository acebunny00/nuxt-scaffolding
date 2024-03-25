import { defineStore } from "pinia";

export const useTodos = defineStore("todos", {
	state: () => ({
		/** @type {{ text: string, id: number, isFinished: boolean }[]} */
		todos: [],
		/** @type {'all' | 'finished' | 'unfinished'} */
		filter: "all",
		filterMenu: ["all", "finished", "unfinished"],
		// filterMenu: {
		// 	all: "전체",
		// 	finished: "완료",
		// 	unfinished: "미완료",
		// },
		// 유형은 자동으로 숫자로 유추됨
		nextId: 0,
	}),
	getters: {
		finishedTodos(state) {
			// 자동 완성! ✨
			return state.todos.filter((todo) => todo.isFinished);
		},
		unfinishedTodos(state) {
			return state.todos.filter((todo) => !todo.isFinished);
		},
		/**
		 * @returns {{ text: string, id: number, isFinished: boolean }[]}
		 */
		filteredTodos(state) {
			if (this.filter === "finished") {
				// 자동 완성 기능으로 다른 getters 호출 ✨
				return this.finishedTodos;
			} else if (this.filter === "unfinished") {
				return this.unfinishedTodos;
			}
			return this.todos;
		},
	},
	actions: {
		// 인자의 양에 관계없이 promise를 반환할지 여부
		addTodo(text) {
			// 상태를 직접 변경할 수 있음
			this.todos.push({ text, id: this.nextId++, isFinished: false });
		},
	},
});
