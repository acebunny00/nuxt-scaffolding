<template>
	<div class="card flex flex-column md:flex-row gap-3">
		<InputGroup>
			<InputGroupAddon>
				<i class="pi pi-user"></i>
			</InputGroupAddon>
			<InputText placeholder="Username" />
		</InputGroup>

		<InputGroup>
			<InputGroupAddon>$</InputGroupAddon>
			<InputNumber placeholder="Price" />
			<InputGroupAddon>.00</InputGroupAddon>
		</InputGroup>

		<InputGroup>
			<InputGroupAddon>www</InputGroupAddon>
			<InputText placeholder="Website" />
		</InputGroup>
	</div>
</template>
