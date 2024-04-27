<script setup>
// import { getMaxListeners } from 'events';
import { useSnackStore } from '~/stores/snack';
let snack = useSnackStore();
let env = useRuntimeConfig().public.backend
let config = useRuntimeConfig().public;

let orders = ref([]);
let limit = ref(10)
let page = ref(1)
let count = ref(0)
let selectedStatus = ref()
let selectedType = ref()
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
let status = ref(['completed', 'pending', 'cancelled']);
let search = ref('')

onMounted(() => {
  	let token = localStorage.getItem('token');

	if (!token) {
		return navigateTo('/admin');
	}
  fetchOrders();
});

watch([selectedStatus,selectedType,search,page,limit],fetchOrders)


async function fetchOrders() {
  try {
   const token = localStorage.getItem('token')
    const queryParams = new URLSearchParams({
      limit: limit.value || "10",
      page: page.value || "1",
      search: search.value || "",
      status: selectedStatus.value || "",
      type: selectedType.value || ""
    });

    const res = await fetch(`${env}/orders?${queryParams}`,{
      method:'GET',
      headers: {
			Authorization: `Bearer ${token}`,
		},
    });
    const json = await res.json();
    console.log(json);
    orders.value = json.orders;
    count.value = json.count;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
}



async function updateStatus(order,status) {
const token = localStorage.getItem('token')
	let res = await fetch(`${env}/orders/${order._id}`, {
		method: 'PATCH',
		 headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
		body: JSON.stringify({
			status: status,
		}),
	});

	let json = await res.json();
	if (!res.ok) {
		return snack.error(json.message);
	}
	snack.success(json.message);
}

let totalPages = computed(()=>Math.ceil(count.value/limit.value))


</script>

<template>
  <div>
    <!-- <Header /> -->
    <h1 class="mx-auto text-center">Orders</h1>
    <v-container>
  <div class="d-flex">
      <v-text-field label="Enter Name/Title/Description/Phone/Email" v-model="search" variant="outlined"></v-text-field>
<!-- <v-select
  label="Type"
  v-model="selectedType"
  :items="types"
></v-select> -->
    <v-select
  label="Status"
  v-model="selectedStatus"
  :items="status"
  clearable
  

></v-select>
  </div>
   
      <v-table>
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">Glass</th>
            <th class="text-left">Color</th>
            <th class="text-left">Price</th>
            <th class="text-left">Size</th>
            <th class="text-left">quantity</th>
            <th class="text-left">Name</th>
            <th class="text-left">Phone</th>
            <th class="text-left">Email</th>
            <th class="text-left">Gender</th>
            <th class="text-left">Status</th>
            <th class="text-left">Address</th>
            <th class="text-left">Country</th>
            <th class="text-left">City</th>
            <th class="text-left">State</th>
            <th class="text-left">Zip</th>
            <th class="text-left">Created At</th>
            <!-- <th class="text-left">Updated At</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="e of orders" :key="e._id">
            <td>{{ e._id }}</td>
            <td>
              <nuxt-link :to="`/admin/products/${e.glass}`">{{ e.glass }}</nuxt-link>
            </td>
            <td>{{ e.color }}</td>
            <td>{{ e.price }}</td>
            <td>{{ e.size }}</td>
            <td>{{ e.quantity }}</td>
            <td>{{ e.name }}</td>
            <td>{{ e.phone }}</td>
            <td>{{ e.email }}</td>
            <td>{{ e.gender }}</td>
          
              <v-select
                style="width:150px"
                :items="['completed', 'pending', 'cancelled']"
                variant="solo"
              @update:model-value ="data=>updateStatus(e,data)"
								:value="e.status"
                density="compact"
                class="mt-6"
                ></v-select
              >
          
            <td>{{ e.address }}</td>
            <td>{{ e.country }}</td>
            <td>{{ e.city }}</td>
            <td>{{ e.state }}</td>
            <td>{{ e.zip }}</td>
            <td>{{ e.updatedAt }}</td>
          </tr>
        </tbody>

      </v-table>
       <v-pagination
      v-model="page"
      :length="totalPages"
      rounded="circle"
    ></v-pagination>
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

.status{
	max-width: 200px;
}
</style>
