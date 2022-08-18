const app =  Vue.createApp({
    data() {
        return {
            url:'http://thenetninja.co.uk',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfus', img: 'assets/1.jpg', isFav: true },
                { title: 'the way of the kings', author: 'bradnon sanderson', img: 'assets/2.jpg', isFav: false  },
                { title: 'the final empire', author: 'bradnon sanderson', img: 'assets/3.jpg', isFav: true  }
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleIsFav(book) {
            book.isFav = !book.isFav;
        }

    }
})

app.mount('#app')