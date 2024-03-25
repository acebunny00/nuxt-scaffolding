<template>
	<div class="max-w-5xl mx-auto mt-5 px-5">
		<div class="overflow-x-auto relative rounded">
			<table class="w-full text-sm text-left text-gray-400">
				<thead class="text-xs uppercase bg-gray-700 text-gray-400">
					<tr>
						<th scope="col" class="py-3 px-6">Route</th>
						<th scope="col" class="py-3 px-6">Method</th>
						<th scope="col" class="py-3 px-6">Link</th>
					</tr>
				</thead>
				<tbody>
					<ExamplesAuthComponentsAPITableRow route="/session" method="get" link="/api/auth/session" />
					<ExamplesAuthComponentsAPITableRow route="/csrf" method="get" link="/api/auth/csrf" />
					<ExamplesAuthComponentsAPITableRow route="/providers" method="get" link="/api/auth/providers" />
					<ExamplesAuthComponentsAPITableRow route="/signin" method="get" link="/api/auth/signin" />
					<ExamplesAuthComponentsAPITableRow route="/signin/:provider" method="post" link="/api/auth/signin/github" />
					<ExamplesAuthComponentsAPITableRow route="/callback/:provider" method="get & post" link="/api/auth/callback/github" />
					<ExamplesAuthComponentsAPITableRow route="/signout" method="get & post" link="/api/auth/signout" />
					<ExamplesAuthComponentsAPITableRow route="/api/auth/token" method="get" link="/api/auth/token" />
				</tbody>
			</table>
		</div>
		<br />
		<div><b>logined token:</b> {{ token || "no token present, are you logged in?" }}</div>
	</div>
</template>

<script setup>
	definePageMeta({ colorMode: "light", layout: "auth" });
	const headers = useRequestHeaders(["cookie"]);
	const { data: token } = await useFetch("/api/auth/token", { headers });
</script>
