<template>
	<div>
		<label>Input file</label>
		<br />
		<Input type="file" @change="onChangeFile" />

		<label>Input other</label>
		<br />
		<input type="text" v-model="other" placeholder="Enter text" />
		<input type="number" v-model="num" placeholder="Enter number" />
		<pre>{{ file?.name }}</pre>
		<Button @click="onSubmit">Submit</Button>
	</div>
</template>

<script setup lang="ts">
	const file = ref<File | null>(null);
	const other = ref("");
	const num = ref(0);

	const onChangeFile = (event) => {
		const [_file] = (event.target as HTMLInputElement).files as FileList;
		file.value = _file;
	};
	const onSubmit = async () => {
		try {
			// if (!file.value) {
			// 	alert("Please select a file");
			// 	return;
			// }

			const body = new FormData();
			body.append("file", file.value, file.value.name);
			body.append("other", other.value);
			body.append("num", num.value);

			await useFetch("/api/uploadFile1", {
				method: "POST",
				body,
			});
		} catch (err) {
			console.error(err);
			alert(err);
		}
	};
</script>
