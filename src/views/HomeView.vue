<script setup>
import topFilm from '@/components/topFilm.vue';
import Header from '@/components/Header.vue';
import Category from '@/components/Category.vue';
import { useMovieStore } from '@/stores/movie';
import { onMounted } from 'vue';
import { useRouter }  from 'vue-router'

const router = useRouter()
const goToMovie = (id) =>{
  router.push(`categoria/${id}`)
}
const MovieStore = useMovieStore()

const movieTopId = (id) =>{
  router.push(`movie/${id}`)
}
onMounted(() => {
  MovieStore.getCategory()
  MovieStore.getPopularMovie()
})
</script>

<template>
  <header>
    <Header />
  </header>
  <div class="container">
    <div v-if="MovieStore.loading" class="loading">Loading...</div>
    <div class="categoria">
      <h2 class="categoria-film__title">Категории фильмов </h2>
      <div class="category-film">
        <div class="category-movie__inner">
          <Category v-for="categoria in MovieStore.category" :key="categoria.id" :categoria="categoria" @movieId="goToMovie" />
        </div>

      </div>
    </div>
    <div class="top-film">
      <h3 class="top-film__title">Топ 10 фильмов с большим рейтингом </h3>
      <div class="top-film__inner">
        <topFilm v-for="movieTop in MovieStore.movieTop" :key="movieTop.id" :movieTop="movieTop" @goMovie = movieTopId />
      </div>
    </div>
  </div>
</template>
