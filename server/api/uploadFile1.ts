import { MultiPartData } from "h3";
import { randomUUID } from "crypto";
import { createStorage } from "unstorage";
import fsLiteDriver from "unstorage/drivers/fs-lite";

const storage = createStorage({
	driver: fsLiteDriver({ base: "./uploads" }),
});

const saveFiIe = async (file: MultiPartData) => {
	const [_mime, ext] = String(file.type).split("/");
	const fileName = file.fileName + "__" + randomUUID() + "." + ext;
	await storage.setItemRaw(fileName, file.data);
};

const parseMultipartData = (data: MultiPartData[]) => {
	const result = [] as Record<string, any>;
	for (const item of data)
		if (item.name === "file")
			result.file = {
				fileName: item.filename,
				type: item.type,
				data: item.data,
			};
		else if (item.name === "other") result.other = item.data.toString("utf8");
		else if (item.name === "num") result.num = parseInt(item.data.toString("utf8"));
	return result;
};

export default defineEventHandler(async (event) => {
	try {
		const body = await readMultipartFormData(event);
		const parsedBody = parseMultipartData(body);
		if (parsedBody.file) await saveFiIe(parsedBody.file);

		return { parsedBody };
	} catch (err) {
		console.error(err);
	}
});
