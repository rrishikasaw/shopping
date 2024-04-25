<script setup>
import { useSnackStore } from '~/stores/snack';
let snack = useSnackStore()
let env = useRuntimeConfig().public.backend

let title = ref('');
let description = ref('');
let price = ref();
let discount = ref(0);
let selectedSizes = ref();
let selectedType = ref('');
let selectedGender = ref();

let sizes = ref(['small','medium','large', 'free-size']);
let gender = ref(['male','female','kid', 'all']);

let type = ref(['round-eye','cat-eye','wayfarer','aviator','pantos','club-master','wrap','biker','shield','oval','square','pilot','butterfly','heart','goggles','mirrored','full-view','polarized']);

onMounted(() => {
	if(!localStorage.getItem('token')) {
		return navigateTo('/login')
	}
})

async function addGlass() {
	const token = localStorage.getItem('token')
	let res = await fetch(`${env}/glasses/`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			authorization: `Bearer ${token}`
		},
		body: JSON.stringify({
			title: title.value,
			description: description.value,
			price: +price.value,
			discount: +discount.value,
			size: selectedSizes.value,
			gender: selectedGender.value,
			type: selectedType.value,
		})
	})
	const json = await res.json()
	if(!res.ok) {
		return snack.error(json.message)
	}
	snack.success('Product added successfully')
	navigateTo(`/admin/products/${json.glass._id}`)
}
</script>

<template>
	<Header />
	<h1 class="mx-auto text-center">Add Glass</h1>
	<div>
		<v-container class="max-width mx-auto">

			<v-text-field density="compact" label="Title" variant="solo" v-model="title"></v-text-field>

			<v-textarea density="compact" label="Description" variant="solo" v-model="description"></v-textarea>
		
			<v-text-field density="compact" type="number" label="Price" variant="solo" v-model="price"></v-text-field>

			<v-text-field density="compact" type="number" label="Discount" variant="solo" v-model="discount"></v-text-field>

			<v-select variant="solo" clearable  :items="sizes" multiple chips density="compact" label="Size" v-model="selectedSizes"></v-select>

			<v-select variant="solo" clearable :items="gender" multiple chips density="compact" label="Gender" v-model="selectedGender"></v-select>

			

			<v-select :items="type"  clearable  variant="solo" density="compact" label="Categories" v-model="selectedType"></v-select>

			<v-btn class="button ms-auto d-block mb-4" @click="addGlass()">Add</v-btn>
		</v-container>
	</div>
</template>

<style>
h1 {
	color: rgb(4, 70, 145);
	background-color: rgb(175, 209, 249);
	padding: 10px;
}
.button {
	color: white;
	background-color: rgb(4, 70, 145);
	padding-inline: 60px;
}
.color {
	width: 80px;
	height: 80px;
	border-radius: 50%;
}
.max-width {
	max-width: 800px;
}
</style>
