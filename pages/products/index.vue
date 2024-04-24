<script setup>
import { useSnackStore } from '~/stores/snack';
let snack = useSnackStore();
let config = useRuntimeConfig().public;
const router = useRouter();

let glasses = ref([
  {
    id: '1',
    title: 'hello',
    price: '12300',
    category: 'hello word',
    createdAt: 12 / 34 / 5667,
  },
  {
    id: '1',
    title: 'hello',
    price: '12300',
    category: 'hello word',
    createdAt: 12 / 34 / 5667,
  },
  {
    id: '1',
    title: 'hello',
    price: '12300',
    category: 'hello word',
    createdAt: 12 / 34 / 5667,
  },
  {
    id: '1',
    title: 'hello',
    price: '12300',
    category: 'hello word',
    createdAt: 12 / 34 / 5667,
  },
  {
    id: '1',
    title: 'hello',
    price: '12300',
    category: 'hello word',
    createdAt: 12 / 34 / 5667,
  },
  {
    id: '1',
    title: 'hello',
    price: '12300',
    category: 'hello word',
    createdAt: 12 / 34 / 5667,
  },
  {
    id: '1',
    title: 'hello',
    price: '12300',
    category: 'hello word',
    createdAt: 12 / 34 / 5667,
  },
  {
    id: '1',
    title: 'hello',
    price: '12300',
    category: 'hello word',
    createdAt: 12 / 34 / 5667,
  },
  {
    id: '1',
    title: 'hello',
    price: '12300',
    category: 'hello word',
    createdAt: 12 / 34 / 5667,
  },

  {
    id: '1',
    title: 'hello',
    price: '12300',
    category: 'hello word',
    createdAt: 12 / 34 / 5667,
  },

  {
    id: '1',
    title: 'hello',
    price: '12300',
    category: 'hello word',
    createdAt: 12 / 34 / 5667,
  },
]);

let orders = ref([]);
let limit = ref(3);
let page = ref(1);
let type = ref();
let search = ref();
let gender = ref(['male','female','kid','all'])
let count = ref()
let selectedType = ref()
let selectedGender = ref([])
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
let totalPages = computed(()=>Math.ceil(count.value/limit.value))
watch([selectedGender,selectedType,search,page,limit],fetchGlasses)

onMounted(() => {
  let token = localStorage.getItem('token');

  if (!token) {
    return navigateTo('/login');
  }
  fetchGlasses();
});

async function fetchGlasses() {
  try {
    const queryParams = new URLSearchParams({
      limit: limit.value || '10',
      page: page.value || '1',
      search: search.value || '',
      type: selectedType.value || '',
      // gender: selectedGender.value || '',
    });
    const token = localStorage.getItem('token');
    const res = await fetch(`http://localhost:5000/api/glasses?${queryParams}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await res.json();
    console.log(json);
    glasses.value = json.glasses;
    count.value = json.count
  } catch (error) {
    return snack.error(error);
  }
}

async function deleteGlass(glassId) {
  try {
    	const token = localStorage.getItem('token');
    let res = await fetch(`http://localhost:5000/api/glasses/${glassId}`, {
      method: 'DELETE',
      headers: {
			authorization: `Bearer ${token}`,
			'content-type': 'application/json',
		},
    });
    if (!res.ok) {
      return snack.error('Failed to delete glass ');
    }

    let json = await res.json();
    snack.success(json.message);
  } catch (error) {
    return snack.error(error);
  }
}
</script>

<template>
  <div>
    <Header />
    <h1 class="mx-auto text-center">Glasses</h1>
    <v-container>
      <v-btn
        class="my-3 button ms-auto d-block"
        @click="navigateTo('/products/add')"
        >Add Glass</v-btn
      >

       <div class="d-flex">
      <v-text-field label="Enter title/description" v-model="search" variant="outlined"></v-text-field>
<v-select
  label="Categories"
  v-model="selectedType"
  :items="types"
></v-select>
    <v-select
  label="gender"
  v-model="selectedGender"
  :items="gender"
  

></v-select>
  </div>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">Title</th>
            <th class="text-left">Description</th>
            <th class="text-left">Price</th>
            <th class="text-left">Discount</th>


            <th class="text-left">Size</th>
            <th class="text-left">Gender</th>
            <th class="text-left">Categories</th>
            <th class="text-left">Created At</th>
            <th class="text-left">Updated At</th>
            <th class="text-left">Edit At</th>
            <th class="text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="e of glasses" :key="e._id">
            <td>{{ e._id }}</td>
            <td class="size">
              {{ e.title }}
            </td>

            <td class="size">
              {{ e.description }}
            </td>
            <td>{{ e.price }}</td>
            <td>
             <span v-if="e.discount">{{ e.discount }}</span>
               <Icon v-else name="carbon:close-filled" class="fz-11 text-grey" />
            </td>
           

            <td class="size">
            <v-chip
              color="blue"
              size="small"
              class="ma-1"
              v-if="e.size"
              v-for="i of e.size"
              >{{ i }}</v-chip
            >
            <Icon v-else name="carbon:close-filled" class="fz-11 text-grey" />
          </td>

           <td class="size">
            <v-chip
              color="blue"
              size="small"
              class="ma-1"
              v-if="e.gender"
              v-for="i of e.gender"
              >{{ i }}</v-chip
            >
            <Icon v-else name="carbon:close-filled" class="fz-11 text-grey" />
          </td>

            <td class="size">{{ e.type }}</td>
            <td>{{ e.createdAt }}</td>
            <td>{{ e.updatedAt }}</td>
            <td>
              <NuxtLink :to="`/products/${e._id}`"
                ><Icon
                  name="material-symbols:info"
                  style="font-size: 30px; color: green"
                  class="mb-3 icon"
                  @click="navigateTo(`/products/${e._id}`)"
              /></NuxtLink>
            </td>
            <td>
              <Icon
                name="ic:baseline-delete"
                style="font-size: 30px; color: red"
                class="mb-3 icon"
                @click="deleteGlass(e._id)"
              />
            </td>
          </tr>
        </tbody>
      </v-table>
      <div class="d-block mx-auto text-center my-10">
        <v-pagination
          v-model="page"
          :length="totalPages"
          class="mx-auto text-center"
        ></v-pagination>
      </div>
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
}

.icon {
  width: 30px;
  height: 30px;
}
.size {
  min-width: 190px;
}

</style>
