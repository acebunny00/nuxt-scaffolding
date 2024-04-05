export default defineEventHandler((event) =>
	event.context.prisma.user.findUnique({
		where: {
			id: 2,
		},
	})
);
