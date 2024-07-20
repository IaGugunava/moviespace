<script setup lang="ts">
/**
 * @author Ia Gugunava
 */
import type { Database } from '~/types/database.types';

const router = useRouter();
const client = useSupabaseClient<Database>()
const user = useSupabaseUser();

console.log(user.value);

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

const addMovie = async () => {

}

onMounted(() => {
    if(!user.value){
        router.push("/login")
    }
})
</script>

<template>
    <div class="profile">
        <div class="container">
            <p>{{ user?.email }}</p>
            <p>{{ user?.user_metadata?.first_name }}</p>
    
            <UiComponentsButton class="profile__logout" title="logout" @click="logout"/>
            <!-- <UiComponentsButton class="profile__add" title="add movie" @click="addMovie"/> -->
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