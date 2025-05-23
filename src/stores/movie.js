
import { defineStore } from 'pinia'
const api = 'https://api.themoviedb.org/3/genre/movie/list?api_key=edec2e4b160092b90853622233ecf72c';
export const useMovieStore = defineStore('movie', {
     state: () => ({
        category :null,
        loading: false,
        movie: [],
        movieTop: null
    }),
    actions:{
       async getCategory(){
            try{
                this.loading = true
                const response = await fetch(`${api}&language=ru-RU`)
                const data = await response.json()
                this.category = data.genres
            } catch (err){
                console.log(err)
            } 
            finally {
                this.loading = false
            }
        },
        async getMovieInfo(id){
            try{
                this.loading = true
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=edec2e4b160092b90853622233ecf72c&language=ru-RU`)
                const data = await response.json()
                this.movie = data

            } catch (err){
                console.log(err)

            } finally{
                this.loading = false
            }
        },
        async getPopularMovie(){
            try{
                this.loading= true
                const response = await fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=edec2e4b160092b90853622233ecf72c&language=ru-RU`)
                const data = await response.json()
                this.movieTop = data.results
            } catch (err){
                console.log(err)
            } finally{
                this.loading = false
            }
        }


    }
})
