
import { defineStore } from 'pinia'
const apiCategory = 'https://api.themoviedb.org/3/discover/movie?api_key=edec2e4b160092b90853622233ecf72c';
export const useMovieStoreCategory = defineStore('movieCategory', {
    state: () => ({
        loading: false,
        categoryMovie: [],
        page: 1,
        hasMore: true
    }),
    actions: {
        async getCategoryMovie(id) {
            try {
                this.loading = true
                const response = await fetch(`${apiCategory}&language=ru-RU&with_genres=${id}&page=${this.page}`)
                const data = await response.json()
                if (data.results.length > 0) {
                    this.categoryMovie.push(...data.results)
                    this.page++
                } else {
                    this.hasMore = false
                }

            } catch (err) {
                console.log(err)
            }
            finally {
                this.loading = false
            }
        },
        resetLazy() {
            this.categoryMovie = []
            this.page = 1
            this.hasMore = true
        }
    }
})
