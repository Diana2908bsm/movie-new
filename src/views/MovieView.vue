<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieStore } from '@/stores/movie.js'
import MovieCard from '@/components/MovieCard.vue'
import Header from '@/components/Header.vue'

const MovieStore = useMovieStore()
const route = useRoute()
const movieId = route.params.id

onMounted(()=>{
    console.log(movieId)
    MovieStore.getMovieInfo(movieId)
})
</script>
<template>
    <Header/>
    <div v-if="MovieStore.loading" class="loading">загрузка...</div>
    <MovieCard  :movie="MovieStore.movie"/>
</template>