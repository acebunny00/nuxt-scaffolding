import { defineStore } from "pinia";
import { computed, ref } from "vue";

// todo: setup()
export const useCounterStore = defineStore("counter", () => {
	const count = ref(0);
	const name = ref("Eduardo");
	const doubleCount = computed(() => count.value * 2);
	const increment = () => {
		count.value++;
	};
	const randomizeCounter = () => {
		count.value = Math.round(100 * Math.random());
	};
	const $reset = () => {
		count.value = 0;
	};
	return { count, name, doubleCount, increment, randomizeCounter, $reset };
});
// todo: options
// export const useCounterStore = defineStore("counter", {
// 	state: () => ({ count: 0 }),

// 	actions: {
// 		increment() {
// 			this.count++;
// 		},
// 	},
// });
