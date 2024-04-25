<script setup>
const route = useRoute();
import { useSnackStore } from '~/stores/snack';
let snack = useSnackStore();
let env = useRuntimeConfig().public.backend
console.log(route.params.productId);

let colors = ref([]);
let selectedColor = ref();
let selectedImage = ref();
let pickedColor = ref();
let colorDialog = ref(false);
let imageDialog = ref(false);

function addColor() {
  if (!pickedColor.value) {
    return;
  }

  colors.value.push(pickedColor.value);
  pickedColor.value = undefined;
  colorDialog.value = false;
}

let title = ref();
let description = ref();
let price = ref();
let discount = ref();
let types = ref([
  'round-eye',
  'cat-eye',
  'wayfarer',
  'aviator',
  'pantos',
  'clubmaster',
  'wrap',
  'biker',
  'shield',
  'oval',
  'square',
  'pilot',
  'butterfly',
  'heart',
  'goggles',
  'mirrored',
  'ful-vue',
  'polarized',
]);
let type = ref('');
let size = ref();
let selectedGender = ref();
let selectedSizes = ref([]);
let selectedType = ref();

let sizes = ref(['small', 'medium', 'large', 'free-size']);
let genders = ref(['male', 'female', 'kid', 'all']);

let images = ref([]);

onMounted(() => {
  if (!localStorage.getItem('token')) {
    return navigateTo('/admin/login');
  }
  fetchProduct();
});

async function fetchProduct() {
  try {
    const token = localStorage.getItem('token');
    let res = await fetch(
      `${env}/glasses/${route.params.productId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const json = await res.json();
    console.log(json);
    if (!res.ok) {
      return console.log('product not found');
    }
    title.value = json.glass.title;
    description.value = json.glass.description;
    price.value = json.glass.price;
    discount.value = json.glass.discount;
    selectedType.value = json.glass.type;
    selectedSizes.value = json.glass.size;
    selectedGender.value = json.glass.gender;
    images.value = json.glass.images;
    colors.value = [
      ...new Set(json.glass.images.filter((e) => e.color).map((e) => e.color)),
    ];
  } catch (error) {
    console.log(error);
  }
}

async function deleteImage(image) {
  const token = localStorage.getItem('token');
  let res = await fetch(
    `${env}/glasses/${route.params.productId}/image`,
    {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        imageId: image._id,
      }),
    }
  );
  const json = await res.json();
  if (!res.ok) {
    return snack.error(json.message);
  }
  // images.value = json.glass.images.filter((e) => e !== image);
  // snack.success('Image removed successfully');
  alert('Image removed successfully');
}

async function updateProduct(image) {
  const token = localStorage.getItem('token');
  let res = await fetch(
    `${env}/glasses/${route.params.productId}`,
    {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        title: title.value,
        description: description.value,
        price: +price.value,
        discount: +discount.value,
        type: selectedType.value,
        size: selectedSizes.value,
        gender: selectedGender.value,
      }),
    }
  );
  const json = await res.json();
  if (!res.ok) {
    return snack.error(json.message);
  }
  snack.success('Glass updated successfully');
}

async function uploadImage(e) {
  const file = e.target.files[0];
  if (!file) {
    return;
  }

  const token = localStorage.getItem('token');
  const formData = new FormData();
  formData.append('image', file);
  if (selectedColor.value) {
    formData.append('color', selectedColor.value);
  }
  let res = await fetch(
    `${env}/glasses/${route.params.productId}/image`,
    {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );
  const json = await res.json();
  if (!res.ok) {
    return snack.error(json.message);
  }
  images.value.push(json.image);
  snack.success('Image added successfully');
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="4">
        <div class="d-flex flex-wrap">
          <p
            v-for="e of colors"
            :key="e"
            class="rounded-circle m-1 color"
            :style="{
              backgroundColor: e,
              border: selectedColor === e ? `5px double white` : undefined,
            }"
            @click="selectedColor = selectedColor === e ? undefined : e"
          ></p>

          <v-btn
            icon="mdi-plus"
            size="small"
            color="black m-1 text"
            @click="colorDialog = true"
          ></v-btn>
        </div>
        <div class="mt-2 mb-5 mx-4">
          <v-btn
            class="d-block ms-auto px-7"
            :color="selectedColor || 'black'"
            size="small"
            rounded="pill"
          >
            <label for="image">Upload Image</label>
          </v-btn>
          <input
            id="image"
            @change="uploadImage"
            type="file"
            accept="image/*"
            hidden
          />
        </div>
        <div class="d-flex flex-wrap">
          <div v-for="e of images" :key="e._id" class="m-1">
            <img
              :src="e.image"
              alt="Product Image"
              class="image"
              @click="
                selectedImage = e;
                imageDialog = true;
              "
            />
            <div>
              <v-btn
                class="mt-1 px-8 me-1 py-4"
                :color="e.color || undefined"
                size="x-small"
                rounded="pill"
              ></v-btn>
              <v-btn
                color="black"
                class="text-small"
                icon="mdi-trash-can-outline"
                size="x-small"
                @click="deleteImage(e)"
              ></v-btn>
            </div>
          </div>
        </div>
      </v-col>

      <v-col>
        <v-text-field
          label="Title"
          v-model="title"
          density="compact"
          variant="solo"
        ></v-text-field>

        <v-textarea
          label="Description"
          variant="solo"
          v-model="description"
        ></v-textarea>

        <v-text-field
          label="Price"
          v-model="price"
          density="compact"
          type="number"
          variant="solo"
        ></v-text-field>

        <v-text-field
          label="Discount"
          v-model="discount"
          density="compact"
          type="number"
          variant="solo"
        ></v-text-field>

        <v-select
          variant="solo"
          :items="types"
        
          chips
          density="compact"
          label="Type"
          v-model="selectedType"
          clearable
        ></v-select>

         <v-select
          variant="solo"
          :items="genders"
         
          chips
           multiple
          density="compact"
          label="Gender"
          v-model="selectedGender"
          clearable
        ></v-select>

        <v-select
          variant="solo"
          :items="sizes"
           
          multiple
          chips
          density="compact"
          label="Size"
          v-model="selectedSizes"
          clearable
        ></v-select>

        <v-btn class="button ms-auto d-block mb-4" @click="updateProduct()"
          >Save</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
  <v-dialog v-model="colorDialog" width="auto">
    <v-card>
      <v-container class="m-10">
        <v-color-picker v-model="pickedColor"></v-color-picker>
        <v-btn
          size="small"
          class="d-block ms-auto bg-blue mt-5"
          :disabled="!pickedColor"
          @click="addColor"
        >
          Add Color
        </v-btn>
      </v-container>
    </v-card>
  </v-dialog>

  <v-dialog v-model="imageDialog" width="auto">
    <v-card>
      <v-container class="m-10">
        <img
          :src="config.backendUploads + selectedImage?.image"
          alt="Image"
          style="max-width: 800px"
        />
      </v-container>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.close-button {
  position: absolute;
  bottom: 35px;
  left: 80px;
}

.outer-colse-button {
  position: relative;
}

.size {
  border-radius: 10px solid black;
  padding-inline: 15px;
  padding-block: 10px;
  border: 1px solid rgb(161, 158, 158);
}

.text-filed {
  width: 300px;
}

.add {
  border: 1px solid black;
}

.card {
  border: 1px solid rgb(209, 7, 108);
}

.address {
  color: blueviolet;
  background-color: rgb(221, 191, 249);
}

.selected {
  border: 3px solid hotpink;
}

.color {
  width: 40px;
  height: 40px;
}

.image {
  width: 100%;
  height: 100%;
  max-width: 90px;
  max-height: 90px;
  object-fit: cover;
}

.image2 {
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 500px;
  object-fit: cover;
}

.iframe {
  width: 500px;
  height: 280px;
}

.dialog {
  width: 100%;
  max-width: 800px;
}

.box {
  width: 40px;
  height: 40px;
  background-color: rgb(244, 216, 180);
}
</style>

<!-- <script setup>
import { useSnackStore } from '~/stores/snack';

let glass = ref();
let colors = ref([]);
let selectedColor = ref();
let selectedImage = ref();
let pickedColor = ref();
let colorDialog = ref(false);
let imageDialog = ref(false);
let sizes = ref(['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL', '6XL', 'Free Size']);
let categories = ref([
	'Lehenga',
	'Saree saga Handwork Casual',
	'Indo - western',
	'Natural dye collection',
	'Wedding collection',
	'Hand paint collection',
]);
let addOns = ref([])
let addOnTitle = ref('')
let addOnPrice = ref()

const route = useRoute();
const config = useRuntimeConfig().public;
const snack = useSnackStore();

onMounted(() => {
	if (!localStorage.getItem('token')) {
		return navigateTo('/admin/login');
	}
	fetchProduct();
});

async function fetchProduct() {
	const token = localStorage.getItem('token');
	let res = await fetch(`http://localhost:5000/api/glasses/${route.params.productId}`, {
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
	const json = await res.json();
	if (!res.ok) {
		return snack.error(json.message);
	}
	product.value = json.product;
	addOns.value = product.value.addOns || []
	colors.value = [...new Set(product.value.images.filter((e) => e.color).map((e) => e.color))];
}

function addColor() {
	if (!pickedColor.value) {
		return;
	}

	colors.value.push(pickedColor.value);
	pickedColor.value = undefined;
	colorDialog.value = false;
}

async function uploadImage(e) {
	const file = e.target.files[0];
	if (!file) {
		return;
	}

	const token = localStorage.getItem('token');
	const formData = new FormData();
	formData.append('image', file);
	if (selectedColor.value) {
		formData.append('color', selectedColor.value);
	}
	let res = await fetch(config.backend + `/products/${route.params.productId}/image`, {
		method: 'PUT',
		headers: {
			authorization: `Bearer ${token}`,
		},
		body: formData,
	});
	const json = await res.json();
	if (!res.ok) {
		return snack.error(json.message);
	}
	product.value.images.push(json.image);
	snack.success('Image added successfully');
}

async function deleteImage(image) {
	const token = localStorage.getItem('token');
	let res = await fetch(config.backend + `/products/${route.params.productId}/image`, {
		method: 'DELETE',
		headers: {
			authorization: `Bearer ${token}`,
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			imageId: image._id,
		}),
	});
	const json = await res.json();
	if (!res.ok) {
		return snack.error(json.message);
	}
	product.value.images = product.value.images.filter((e) => e !== image);
	snack.success('Image removed successfully');
}

async function updateProduct(image) {
	const token = localStorage.getItem('token');
	let res = await fetch(config.backend + `/products/${route.params.productId}`, {
		method: 'PATCH',
		headers: {
			authorization: `Bearer ${token}`,
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			title: product.value.title,
			description: product.value.description,
			price: +product.value.price,
			discount: +product.value.discount,
			shipping: product.value.shipping,
			category: product.value.category,
			disabled: product.value.disabled,
			soldOut: product.value.soldOut,
			sizes: product.value.sizes,
			addOns: addOns.value.map(e => ({title: e.title, price: e.price}))
		}),
	});
	const json = await res.json();
	if (!res.ok) {
		return snack.error(json.message);
	}
	snack.success('Product updated successfully');
}


</script>

<template>
	<div>
		<Header />
		<h1 class="text-center my-3">Glass</h1>
		<v-container v-if="glass">
			<v-row>
				<v-col cols="12" lg="4">
					<div class="d-flex flex-wrap">
						<p
							v-for="e of colors"
							:key="e"
							class="rounded-circle m-1 color"
							:style="{
								backgroundColor: e,
								border: selectedColor === e ? `5px double white` : undefined,
							}"
							@click="selectedColor = selectedColor === e ? undefined : e"
						></p>
						<v-btn icon="mdi-plus" size="small" color="black m-1 text" @click="colorDialog = true"></v-btn>
					</div>
					<div class="mt-2 mb-5 mx-4">
						<v-btn class="d-block ms-auto px-7" :color="selectedColor || 'black'" size="small" rounded="pill">
							<label for="image">Upload Image</label>
						</v-btn>
						<input id="image" @change="uploadImage" type="file" accept="image/*" hidden />
					</div>
					<div class="d-flex flex-wrap">
						<div v-for="e of glass.images" :key="e._id" class="m-1">
							<img
								:src="config.backendUploads + e.image"
								alt="Product Image"
								class="image"
								@click="
									selectedImage = e;
									imageDialog = true;
								"
							/>
							<div>
								<v-btn class="mt-1 px-8 me-1 py-4" :color="e.color || undefined" size="x-small" rounded="pill"></v-btn>
								<v-btn
									color="black"
									class="text-small"
									icon="mdi-trash-can-outline"
									size="x-small"
									@click="deleteImage(e)"
								></v-btn>
							</div>
						</div>
					</div>
				</v-col>
				<v-col cols="12" lg="8">
					<p class="text"><b>ID:</b> {{ product._id }}</p>

					<div class="d-flex justify-center">
						<v-switch color="red" v-model="product.disabled" hide-details label="Disabled" size="small">Ok</v-switch>
						<v-switch color="red" v-model="product.soldOut" hide-details label="Sold Out"></v-switch>
					</div>

					<v-text-field label="Title" v-model="product.title" variant="solo" density="compact"></v-text-field>

					<v-textarea label="Description" v-model="product.description" variant="solo" density="compact"></v-textarea>

					<v-textarea label="Shipping" v-model="product.shipping" variant="solo" density="compact"></v-textarea>

					<v-textarea label="Description" v-model="product.description" variant="solo" density="compact"></v-textarea>

					<v-text-field
						label="Price"
						type="number"
						v-model="product.price"
						variant="solo"
						density="compact"
					></v-text-field>

					<v-text-field label="Discount" v-model="product.discount" variant="solo" density="compact"></v-text-field>

					<v-select
						:items="categories"
						variant="solo"
						v-model="product.category"
						density="compact"
						label="Category"
					></v-select>

					<v-select
						:items="sizes"
						density="compact"
						v-model="product.sizes"
						label="Size"
						variant="solo"
						multiple
						chips
					></v-select>

					<div class="mb-6">
					<v-chip
          closable
					color="blue-darken-3"
						class="me-2"
						v-for="e of addOns"
						:key="e.title"
						@click:close="addOns = addOns.filter((c) => c !== e)"
					>
						{{ e.title }} - ₹{{ e.price }}
					</v-chip>

					<div class="d-flex justify-end align-center mt-7">
						<v-text-field density="compact" label="Add On Title" hide-details variant="solo" class="me-4" v-model="addOnTitle"></v-text-field>
						<v-text-field density="compact" label="Add On Price" type="number" hide-details variant="solo" class="me-4" v-model="addOnPrice"></v-text-field>
						<v-btn icon="mdi-plus" size="small" class="bg-blue-darken-2" style="font-size: 15px" @click="!disabledAddOnButton && addAddOn()"></v-btn>
					</div>
				</div>

					<v-btn class="ms-auto px-15 d-block button" @click="updateProduct">Save</v-btn>
				</v-col>
			</v-row>
		</v-container>

		<v-dialog v-model="colorDialog" width="auto">
			<v-card>
				<v-container class="m-10">
					<v-color-picker v-model="pickedColor"></v-color-picker>
					<v-btn size="small" class="d-block ms-auto bg-blue mt-5" :disabled="!pickedColor" @click="addColor">
						Add Color
					</v-btn>
				</v-container>
			</v-card>
		</v-dialog>

		<v-dialog v-model="imageDialog" width="auto">
			<v-card>
				<v-container class="m-10">
					<img :src="config.backendUploads + selectedImage?.image" alt="Image" style="max-width: 800px" />
				</v-container>
			</v-card>
		</v-dialog>
	</div>
</template>

<style scoped>
.button {
	color: white;
	background-color: rgb(4, 70, 145);
	padding-inline: 60px;
}

.text {
	font-size: 20px;
}
.text-small {
	font-size: 12px;
}

.color {
	width: 40px;
	height: 40px;
}

.image {
	width: 100px;
	height: 100px;
	object-fit: cover;
}
</style> -->

<!-- <v-col cols="12" lg="6">
        <v-sheet class="mx-auto pt-7" elevation="8">
          <img
            :src="selectedImage || images[0]"
            alt=""
            class="image d-block mx-auto"
            @click="imageDialog = true"
          />

          <v-slide-group class="pa-4" center-active show-arrows>
            <v-slide-group-item
              v-for="e of images"
              :key="e"
              v-slot="{ isSelected, toggle }"
            >
              <v-card
                :color="isSelected ? 'primary' : 'grey-lighten-1'"
                class="ma-4"
                width="100"
                height="120"
                @click="toggle"
              >
                <div class="d-flex fill-height align-center justify-center">
                 

                     <div class="outer-colse-button">
                         <div class="close-button">
                            <v-btn density="compact" icon="mdi-close" style="color:white; background-color: red;" size="x-medium" ></v-btn>
                        </div>
                     </div>

             
                  <img
                    @click="selectedImage = e"
                    :src="e"
                    alt=""
                    width="100"
                    height="120"
                    style="object-fit: cover"
                  />
                </div>
              </v-card>
            </v-slide-group-item>

            <div class="mt-2 mb-5 mx-4">
              <v-btn
                class="d-block ms-auto px-7"
                :color="selectedColor || 'black'"
                size="small"
                rounded="pill"
              >
                <label for="image">Upload Image</label>
              </v-btn>
              <input
                id="image"
                @change="uploadImage"
                type="file"
                accept="image/*"
                hidden
              />
            </div>
          </v-slide-group>
        </v-sheet>
      </v-col> -->
