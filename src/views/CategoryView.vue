<script setup>
import Header from '@/components/Header.vue'
import { useMovieStoreCategory } from '@/stores/movieCategory'
import { onMounted } from 'vue'
import { useRoute,useRouter } from 'vue-router'

import MovieCategory from '@/components/MovieCategory.vue'

const route = useRoute()
const router = useRouter()
const movieStoreCategory = useMovieStoreCategory()
const CategoriaName = route.params.id

const goToMovieDetails = (id) =>{
      router.push(`/movie/${id}`)
}
onMounted(() => {
    if (parseInt(CategoriaName)) {
         movieStoreCategory.resetLazy()
        movieStoreCategory.getCategoryMovie(CategoriaName)
    }
   
})
</script>
<template>
    <Header />
    <div class="container">
        <h2 class="category__title"></h2>
        <MovieCategory v-for="movie in movieStoreCategory.categoryMovie" :key="movie.id" :movie="movie" @movieId ="goToMovieDetails" />
        <div class="movie_btn">
                    <button v-if="movieStoreCategory.hasMore && !movieStoreCategory.loading" @click="movieStoreCategory.getCategoryMovie(CategoriaName)" class="btn">Загрузить еще</button>
        </div>

        <div v-if="movieStoreCategory.loading" class="loading">Загрузка...</div>
    </div>
</template>