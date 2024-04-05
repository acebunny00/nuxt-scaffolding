import { writeFile } from "fs/promises";

export default defineEventHandler(async (event) => {
	const formData: any = await readMultipartFormData(event);
	const file = formData[0];

	const path = "./uploads/" + file.filename;
	await writeFile(path, file.data);

	return { path };
});
