// https://sidebase.io/nuxt-auth/server-side/jwt-access
import { getToken } from "#auth";

// export default eventHandler(async (event) => {
// 	const token = await getToken({ event });
// 	return token || "no token present";
// });

export default eventHandler((event) => getToken({ event }));
