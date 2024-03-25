<script setup>
	import { useCounterStore } from "@/stores/counter";
	import { useTodos } from "@/stores/todo";
	const counter = useCounterStore();
	const todos = useTodos();
	let text = "";

	setTimeout(() => {
		counter.increment();
	}, 1000);
	// 스토어에서 직접 상태에 액세스

	// counter.count++;
	// // 자동 완성 기능 ✨
	// counter.$patch({ count: counter.count + 1 });
	// // 또는 actions 사용
	// counter.increment();
</script>

<template>
	<!-- 스토어에서 직접 상태에 액세스 -->
	<UAlert icon="i-heroicons-bell-alert" color="primary" title="주의" description="새로고침시 이름 외의 데이터(브라우저 활동 기록) 사라짐" />
	<div>이름: {{ counter.name }}</div>
	<div>현재 카운트: {{ counter.count }}</div>
	<div>더블 카운트: {{ counter.doubleCount }}</div>
	<div><UButton @click="counter.increment()">카운트 증가</UButton></div>
	<div><UButton @click="counter.randomizeCounter()">랜덤 카운트</UButton></div>
	<div><UButton @click="counter.$reset()">카운트 초기화</UButton></div>
	<div>
		<UFormGroup label="할 일 제목 작성하기">
			<UInput v-model="text" placeholder="할 일을 입력하세요" />
		</UFormGroup>
		<UButton @click="todos.addTodo(text)">할 일 추가</UButton>
		<UFormGroup label="할 일 목록">
			<USelectMenu v-model="todos.filter" :options="todos.filterMenu" class="w-full lg:w-48" />
			<UTable v-model="selectedRows" v-model:sort="id" :rows="todos.filteredTodos" :columns="columnsTable" sort-asc-icon="i-heroicons-arrow-up" sort-desc-icon="i-heroicons-arrow-down" sort-mode="auto" class="w-full" :ui="{ td: { base: 'max-w-[0] truncate' } }" @select="select" />
		</UFormGroup>
	</div>
	<hr />
</template>
