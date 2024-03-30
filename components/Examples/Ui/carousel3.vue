<template>
	<UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'snap-end' }">
		<img :src="item" width="200" height="300" />
	</UCarousel>
</template>
