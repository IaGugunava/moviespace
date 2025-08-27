<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import DefaultSlider from "~/components/DefaultSlider/DefaultSlider.vue";

import { useGlobalStore } from "~/store/globalStore.js";

const router = useRouter();

const globalStore = useGlobalStore();

const user = ref();

const toWatch = ref([]);
const watched = ref([]);
const favorites = ref([]);
const categories = ref([
    {name: 'სანახავი', active: false, value: 'towatch' },
    {name: 'ნანახი', active: false, value: 'watched' },
    {name: 'ფავორიტი', active: false, value: 'favorites' }
])

const activeCategory = ref({name: 'ფავორიტი', active: false, value: 'favorites' });

const getUserInfo = async () => {
  const { data, error } = await apiFetch(
    "/auth/user",
    {
      headers: {
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    },
    "profile"
  );

  if (error.value) {
    console.log(error.value, "error");
    return;
  }

  user.value = data.value;

  console.log(user.value?.favorites, "user");

  await getFavorites();
  await getToWatch();
  await getWatched();
};

const getFavorites = async () => {
  const favoriteIds = user.value?.favorites || [];

  const { data, error } = await apiFetch("/movies/id", {
    method: "POST",
    body: {
      ids: favoriteIds,
    },
  });

  if (error.value) {
    console.log(error.value, "error fetching favorite movies");
    return;
  }

  favorites.value = data.value || [];
};

const getToWatch = async () => {
  const toWatchIds = user.value?.toWatch || [];

  const { data, error } = await apiFetch("/movies/id", {
    method: "POST",
    body: {
      ids: toWatchIds,
    },
  });

  if (error.value) {
    console.log(error.value, "error fetching toWatch movies");
    return;
  }

  toWatch.value = data.value || [];
};

const getWatched = async () => {
  const watchedIds = user.value?.watched || [];

  const { data, error } = await apiFetch("/movies/id", {
    method: "POST",
    body: {
      ids: watchedIds,
    },
  });

  if (error.value) {
    console.log(error.value, "error fetching toWatch movies");
    return;
  }

  watched.value = data.value || [];
};

const handleLogout = () => {
  sessionStorage.removeItem("token");
  router.push("/login");
};

const switchCategory = (value: any) => {
    activeCategory.value = value;
}

onMounted(() => {
  globalStore.getUserToken();

  if (!globalStore.isSigned) {
    router.push("login");
  }
  getUserInfo();
});
</script>

<template>
  <div class="profile">
    <div class="container">
        <div class="profile__header">
            <div>
                <p class="profile__text">email: {{ user?.email }}</p>
                <p class="profile__text">username: {{ user?.username }}</p>
            </div>

            <UiComponentsButton class="profile__logout" title="გამოსვლა" @click="handleLogout" />
        </div>
      <div class="profile__lists">
        <div v-for="(item, index) in categories" :key="index">
          <UiComponentsButton class="adding-modal__button" :title="item?.name" :active="item.value == activeCategory.value" @click="switchCategory(item)" />
        </div>
      </div>

    </div>
    <DefaultSlider
      v-if="favorites.length && activeCategory?.value === 'favorites'"
      title="ფავორიტები"
      :content-data="favorites"
      button-title="წაშლა"
    />
    <DefaultSlider
      v-if="toWatch.length && activeCategory?.value === 'towatch'"
      title="სანახავი"
      :content-data="toWatch"
      button-title="წაშლა"
    />
    <DefaultSlider
      v-if="watched.length && activeCategory?.value === 'watched'"
      title="ნანახი"
      :content-data="watched"
      button-title="წაშლა"
    />
  </div>
</template>

<style lang="scss">
.profile {
  color: white;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
  }

  &__lists {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    flex-wrap: wrap;
  }

  &__logout,
  &__add {
    width: fit-content;
    margin-top: 20px;
  }

  &__text {
    font-size: 20px;
    margin-top: 20px;
  }
}
</style>
