<template>
	<div class="card">
		<PickList v-model="products" listStyle="height:342px" dataKey="id" breakpoint="1400px">
			<template #sourceheader> Available </template>
			<template #targetheader> Selected </template>
			<template #item="slotProps">
				<div class="flex flex-wrap p-2 align-items-center gap-3">
					<img class="w-4rem flex-shrink-0 border-round" :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.item.image" :alt="slotProps.item.name" />
					<div class="flex-1 flex flex-column gap-2">
						<span class="font-bold">{{ slotProps.item.name }}</span>
						<div class="flex align-items-center gap-2">
							<i class="pi pi-tag text-sm"></i>
							<span>{{ slotProps.item.category }}</span>
						</div>
					</div>
					<span class="font-bold">$ {{ slotProps.item.price }}</span>
				</div>
			</template>
		</PickList>
	</div>
</template>

<script setup>
	import { ref, onMounted } from "vue";
	import { ProductService } from "@/service/ProductService";

	const products = ref(null);

	onMounted(() => {
		ProductService.getProductsSmall().then((data) => (products.value = [data, []]));
	});
</script>
