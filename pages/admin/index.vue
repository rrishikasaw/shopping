<script setup>
import { useSnackStore } from '~/stores/snack';
let snack = useSnackStore();
let config = useRuntimeConfig().public;

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

onMounted(() => {
  fetchGlasses();
});

async function fetchGlasses(limit, page, search, withGlass, status, category) {
  try {
    // const queryParams = new URLSearchParams({
    //   limit:"10",
    //   page:"1",
    //   search,
    //   withGlass:"true",
    //   status:"pending",
    //   category
    // });

    const res = await fetch(`http://localhost:5000/api/glasses`);
    const json = await res.json();
    console.log(json);
    glasses.value = json.glasses;
  } catch (error) {
    console.log(error);
  }
}

async function deleteGlass(glassId) {
  try {
    let res = await fetch(`http://localhost:5000/api/glasses/${glassId}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      console.log('Failed to delete glass ');
    }

    let json = await res.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

let page = ref(1);
</script>

<template>
  <div>
    <Header />
    <h1 class="mx-auto text-center">Products</h1>
    <v-container>
      <v-btn
        class="my-3 button ms-auto d-block"
        @click="navigateTo('/admin/products/add')"
        >Add Products</v-btn
      >
      <v-table>
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">Title</th>
            <th class="text-left">Description</th>
            <th class="text-left">Price</th>
            <th class="text-left">Discount</th>
            <th class="text-left">Categories</th>

            <th class="text-left">Size</th>
            <th class="text-left">Type</th>
            <th class="text-left">Created At</th>
            <th class="text-left">Updated At</th>
            <th class="text-left">Edit At</th>
            <th class="text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="e of glasses" :key="e._id">
            <td>{{ e._id }}</td>
            <td>
              {{ e.title }}
            </td>

            <td>
              {{ e.description }}
            </td>
            <td>{{ e.price }}</td>
            <td>{{ e.discount }}</td>
            <td>{{ e.category }}</td>
            <td>{{ e.size }}</td>

            <td>{{ e.type }}</td>
            <td>{{ e.createdAt }}</td>
            <td>{{ e.updatedAt }}</td>
            <td>
              <NuxtLink :to="`/admin/products/${e.id}`"
                ><Icon
                  name="material-symbols:info"
                  style="font-size: 30px; color: green"
                  class="mb-3 icon"
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
          :length="4"
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
</style>
