<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import Input from "~/components/UiComponents/Input.vue";
import { useRouter } from "vue-router";
import type { Database } from "~/types/database.types";
import { useGlobalStore } from "~/store/globalStore";

// const client = useSupabaseClient<Database>()
// const user = useSupabaseUser();

const router = useRouter();
const route = useRoute();

const globalStore = useGlobalStore();

const isUserSigned = computed(() => Boolean(sessionStorage.getItem('token')))

const searchText: Ref<string> = ref("");

const handleSearch = async () => {
  router.push({
    path: "/search",
    query: { search: `${searchText.value}` },
  });

  const { data, error } = apiFetch("/movies", {
    params: {
      search: route.query?.search,
    },
  });
  if (error.value) {
    console.log(error.value, "error");
    return;
  }

  globalStore.searchedMovies = data?.value?.results;

  console.log();

  setTimeout(() => {
    searchText.value = "";
  }, 1000);
};

// const logout = async () => {
//     try{
//         const { error } = await client.auth.signOut();
//         if(error) throw error;
//         router.push("/")
//     } catch(error){
//         console.log(error);
//     } finally{
//         console.log("~")
//     }
// }
</script>

<template>
  <div class="header">
    <!-- logo -->
    <NuxtLink to="/" class="header__logo">
      <img src="../../../assets/images/moviespacelogo.png" />
    </NuxtLink>

    <!-- other stuff -->
    <div class="header__content">
      <NuxtLink class="header__link" to="/movies">ფილმები</NuxtLink>
      <NuxtLink class="header__link" to="/genres">ჟანრები</NuxtLink>
      <NuxtLink v-if="isUserSigned" class="header__link" to="/profile">პროფილი</NuxtLink>
      <Input
        placeholder="ძებნა..."
        input-type="text"
        :modelValue="searchText"
        @update:modelValue="(e: string) => searchText = e"
        @keydown.enter="handleSearch"
      />
      <NuxtLink v-if="!isUserSigned" class="header__link" to="/login">შესვლა</NuxtLink>
            <!-- <UiComponentsButton v-if="user" title="log out" @click="logout"/> -->
    </div>
  </div>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba($color: #cccbf5, $alpha: 0.7);
  padding: 30px;
  position: relative;
  top: 0;
  left: 0;

  &__logo {
    height: 50px;
    width: 100px;

    img {
      height: 100%;
      width: 100%;
    }
  }

  &__content {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  &__link {
    font-size: 24px;
    text-transform: uppercase;
  }
}
</style>
