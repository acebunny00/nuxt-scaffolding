<template>
	<div>
		<Button type="button" label="Primevue" @click="toggle" />
		<TieredMenu ref="menu" :model="items" popup />
	</div>
</template>

<script setup>
	import TieredMenu from "primevue/tieredmenu";
	const menu = ref();
	const toggle = () => menu.value.toggle(event);
	const items = ref([
		{
			label: "Form",
			items: [
				{
					label: "AutoComplete",
					url: "/examples/primevue/AutoComplete",
				},
				{
					label: "Calendar",
					url: "/examples/primevue/Calendar",
				},
				{
					label: "CascadeSelect",
					url: "/examples/primevue/CascadeSelect",
				},
				{
					label: "Checkbox",
					url: "/examples/primevue/Checkbox",
				},
				{
					label: "Chips",
					url: "/examples/primevue/Chips",
				},
				{
					label: "ColorPicker",
					url: "/examples/primevue/ColorPicker",
				},
				{
					label: "Dropdown",
					url: "/examples/primevue/Dropdown",
				},
				{
					label: "Editor",
					url: "/examples/primevue/Editor",
				},
				{
					label: "FloatLabel",
					url: "/examples/primevue/FloatLabel",
				},
				{
					label: "IconField",
					url: "/examples/primevue/IconField",
				},
				{
					label: "InputGroup",
					url: "/examples/primevue/InputGroup",
				},
				{
					label: "InputMask",
					url: "/examples/primevue/InputMask",
				},
				{
					label: "InputNumber",
					url: "/examples/primevue/InputNumber",
				},
				{
					label: "InputOtp",
					url: "/examples/primevue/InputOtp",
				},
				{
					label: "InputSwitch",
					url: "/examples/primevue/InputSwitch",
				},
				{
					label: "InputText",
					url: "/examples/primevue/InputText",
				},
				{
					label: "Knob",
					url: "/examples/primevue/Knob",
				},
				{
					label: "Listbox",
					url: "/examples/primevue/Listbox",
				},
				{
					label: "MultiSelect",
					url: "/examples/primevue/MultiSelect",
				},
				{
					label: "Password",
					url: "/examples/primevue/Password",
				},
				{
					label: "RadioButton",
					url: "/examples/primevue/RadioButton",
				},
				{
					label: "Rating",
					url: "/examples/primevue/Rating",
				},
				{
					label: "SelectButton",
					url: "/examples/primevue/SelectButton",
				},
				{
					label: "Slider",
					url: "/examples/primevue/Slider",
				},
				{
					label: "Textarea",
					url: "/examples/primevue/Textarea",
				},
				{
					label: "ToggleButton",
					url: "/examples/primevue/ToggleButton",
				},
				{
					label: "TreeSelect",
					url: "/examples/primevue/TreeSelect",
				},
				{
					label: "TriStateCheckbox",
					url: "/examples/primevue/TriStateCheckbox",
				},
			],
		},
		{
			label: "Button",
			items: [
				{
					label: "Button",
					url: "/examples/primevue/Button",
				},
				{
					label: "Speed Dial",
					url: "/examples/primevue/Speed Dial",
				},
				{
					label: "SplitButton",
					url: "/examples/primevue/SplitButton",
				},
			],
		},
		{
			label: "Data",
			items: [
				{
					label: "DataTable",
					url: "/examples/primevue/DataTable",
				},
				{
					label: "DataView",
					url: "/examples/primevue/DataView",
				},
				{
					label: "OrderList",
					url: "/examples/primevue/OrderList",
				},
				{
					label: "Org Chart",
					url: "/examples/primevue/Org Chart",
				},
				{
					label: "Paginator",
					url: "/examples/primevue/Paginator",
				},
				{
					label: "PickList",
					url: "/examples/primevue/PickList",
				},
				{
					label: "Tree",
					url: "/examples/primevue/Tree",
				},
				{
					label: "TreeTable",
					url: "/examples/primevue/TreeTable",
				},
				{
					label: "Timeline",
					url: "/examples/primevue/Timeline",
				},
				{
					label: "VirtualScroller",
					url: "/examples/primevue/VirtualScroller",
				},
			],
		},
		{
			label: "Panel",
			items: [
				{
					label: "Accordion",
					url: "/examples/primevue/Accordion",
				},
				{
					label: "Card",
					url: "/examples/primevue/Card",
				},
				{
					label: "Deferred",
					url: "/examples/primevue/Deferred",
				},
				{
					label: "Divider",
					url: "/examples/primevue/Divider",
				},
				{
					label: "Fieldset",
					url: "/examples/primevue/Fieldset",
				},
				{
					label: "Panel",
					url: "/examples/primevue/Panel",
				},
				{
					label: "ScrollPanel",
					url: "/examples/primevue/ScrollPanel",
				},
				{
					label: "Splitter",
					url: "/examples/primevue/Splitter",
				},
				{
					label: "Stepper",
					url: "/examples/primevue/Stepper",
				},
				{
					label: "TabView",
					url: "/examples/primevue/TabView",
				},
				{
					label: "Toolbar",
					url: "/examples/primevue/Toolbar",
				},
			],
		},
		{
			label: "Overlay",
			items: [
				{
					label: "ConfirmDialog",
					url: "/examples/primevue/ConfirmDialog",
				},
				{
					label: "ConfirmPopup",
					url: "/examples/primevue/ConfirmPopup",
				},
				{
					label: "Dialog",
					url: "/examples/primevue/Dialog",
				},
				{
					label: "DynamicDialog",
					url: "/examples/primevue/DynamicDialog",
				},
				{
					label: "OverlayPanel",
					url: "/examples/primevue/OverlayPanel",
				},
				{
					label: "Sidebar",
					url: "/examples/primevue/Sidebar",
				},
				{
					label: "Tooltip",
					url: "/examples/primevue/Tooltip",
				},
			],
		},
		{
			label: "File",
			items: [
				{
					label: "Upload",
					url: "/examples/primevue/Upload",
				},
			],
		},
		{
			label: "Menu",
			items: [
				{
					label: "Breadcrumb",
					url: "/examples/primevue/Breadcrumb",
				},
				{
					label: "ContextMenu",
					url: "/examples/primevue/ContextMenu",
				},
				{
					label: "Dock",
					url: "/examples/primevue/Dock",
				},
				{
					label: "Menu",
					url: "/examples/primevue/Menu",
				},
				{
					label: "Menubar",
					url: "/examples/primevue/Menubar",
				},
				{
					label: "MegaMenu",
					url: "/examples/primevue/MegaMenu",
				},
				{
					label: "PanelMenu",
					url: "/examples/primevue/PanelMenu",
				},
				{
					label: "Steps",
					url: "/examples/primevue/Steps",
				},
				{
					label: "TabMenu",
					url: "/examples/primevue/TabMenu",
				},
				{
					label: "TieredMenu",
					url: "/examples/primevue/TieredMenu",
				},
			],
		},
		{
			label: "Chart",
			items: [
				{
					label: "Chart.js",
					url: "/examples/primevue/Chart.js",
				},
			],
		},
		{
			label: "Messages",
			items: [
				{
					label: "Message",
					url: "/examples/primevue/Message",
				},
				{
					label: "InlineMessage",
					url: "/examples/primevue/InlineMessage",
				},
				{
					label: "Toast",
					url: "/examples/primevue/Toast",
				},
			],
		},
		{
			label: "Media",
			items: [
				{
					label: "Carousel",
					url: "/examples/primevue/Carousel",
				},
				{
					label: "Galleria",
					url: "/examples/primevue/Galleria",
				},
				{
					label: "Image",
					url: "/examples/primevue/Image",
				},
			],
		},
		{
			label: "Misc",
			items: [
				{
					label: "Avatar",
					url: "/examples/primevue/Avatar",
				},
				{
					label: "Badge",
					url: "/examples/primevue/Badge",
				},
				{
					label: "BlockUI",
					url: "/examples/primevue/BlockUI",
				},
				{
					label: "Chip",
					url: "/examples/primevue/Chip",
				},
				{
					label: "FocusTrap",
					url: "/examples/primevue/FocusTrap",
				},
				{
					label: "Inplace",
					url: "/examples/primevue/Inplace",
				},
				{
					label: "MeterGroup",
					url: "/examples/primevue/MeterGroup",
				},
				{
					label: "ScrollTop",
					url: "/examples/primevue/ScrollTop",
				},
				{
					label: "Skeleton",
					url: "/examples/primevue/Skeleton",
				},
				{
					label: "ProgressBar",
					url: "/examples/primevue/ProgressBar",
				},
				{
					label: "ProgressSpinner",
					url: "/examples/primevue/ProgressSpinner",
				},
				{
					label: "AnimateOnScroll",
					url: "/examples/primevue/AnimateOnScroll",
				},
				{
					label: "Ripple",
					url: "/examples/primevue/Ripple",
				},
				{
					label: "StyleClass",
					url: "/examples/primevue/StyleClass",
				},
				{
					label: "Tag",
					url: "/examples/primevue/Tag",
				},
				{
					label: "Terminal",
					url: "/examples/primevue/Terminal",
				},
			],
		},
	]);
</script>
