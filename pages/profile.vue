<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import DefaultSlider from '~/components/DefaultSlider/DefaultSlider.vue';

import type { Database } from '~/types/database.types';

import { movies } from '../data/movies'

const router = useRouter();
const client = useSupabaseClient<Database>()
const user = useSupabaseUser();

const toWatch = ref([]);
const favorites = ref([])
const categories = ref([]);

const getMovies = async () => {
    const { data } = await client.from('movies').select('movie_id, name').eq('user_id', user?.value?.id).order('created_at');

    const favs = await client.from('movies').select('movie_id').eq('name', 'favorites').order('created_at');
    const watchs = await client.from('movies').select('movie_id').eq('name', 'towatch').order('created_at');

    let temp: any[] = [];
    let tempfavMovies: any[] = []
    let tempwatchMovies: any[] = []

    if(!data.length) return;

    data.forEach((el: any) => {
        // @ts-ignore
        temp.push(el?.name)

    });
    // @ts-ignore
    categories.value = [...new Set(temp)]
    if(favs.data.length){
        tempfavMovies = [...favs.data]

        tempfavMovies.forEach((el) => {
            movies.forEach((e: any) => {
                if(e.id === el.movie_id){
                    // @ts-ignore
                    favorites.value.push(e)
                }
            })
        })
    }

    if(watchs.data.length){
        tempwatchMovies = [...watchs.data]

        tempwatchMovies.forEach((el) => {
            movies.forEach((e: any) => {
                if(e.id === el.movie_id){
                    // @ts-ignore
                    toWatch.value.push(e)
                }
            })
        })
    }
}

const logout = async () => {
    try{
        const { error } = await client.auth.signOut();
        if(error) throw error;
        router.push("/")
    } catch(error){
        console.log(error);
    } finally{
        console.log("~")
    }
}

// const addMovie = async () => {

// }

onMounted(() => {
    if(!user.value){
        router.push("/login")
    }

    getMovies();

})
</script>

<template>
    <div class="profile">
        <div class="container">
            <p>{{ user?.email }}</p>
            <p>{{ user?.user_metadata?.first_name }}</p>
            
            <UiComponentsButton class="profile__logout" title="logout" @click="logout"/>
        </div>
        <!-- <UiComponentsButton class="profile__add" title="add movie" @click="addMovie"/> -->

        <div class="profile__lists">
            <div v-for="(item, index) in categories" :key="index">
                <DefaultSlider v-if="item == 'favorites'" title="ფავორიტები" :content-data="favorites" button-title="წაშლა"/>
                <DefaultSlider v-else title="სანახავი" :content-data="toWatch" button-title="წაშლა"/>
                <!-- <DefaultSlider :content-data="item === 'favorites' ? favorites : toWatch" :title="item == 'favorites' ? 'ფავორიტები' : 'სანახავი'"/> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.profile{
    color: white;

    &__logout, &__add{
        width: fit-content;
        margin-top: 20px;
    }
}
</style>