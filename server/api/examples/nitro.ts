import { defineEventHandler, getQuery, readBody } from "h3";

export default defineEventHandler(async () => {
	// Log event. `.toString()` stringifies to a simple string like `[GET] /<path>`
	console.log(`Request: ${useEvent().toString()}`);

	// Parse query parms
	const query = getQuery(useEvent());

	// Try to read request body
	const body = readBody(useEvent()).catch(() => {});

	// Echo back request as response
	return {
		path: useEvent().path,
		method: useEvent().method,
		query,
		body,
	};
});
