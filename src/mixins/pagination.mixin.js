import _ from 'lodash'

export default {
  data() {
    return {
      pageCount: 0,
      prevText: 'Назад',
      nextText: 'Вперед',
      containerClass: 'pagination',
      pageClass: 'waves-effect',
      page: +this.$route.query.page || 1,
      pageSize: 5,
      allItems: [],
      items: []
    }
  },
  methods: {
    paginationHandler(page) {
      this.$router.push(`${this.$route.path}?page=${page}`)
      this.items = this.allItems[page - 1] || this.allItems[0]
    },
    paginationSetup(allItems) {
      this.allItems = _.chunk(allItems, this.pageSize)
      this.pageCount = _.size(this.allItems)
      this.items = this.allItems[this.page - 1] || this.allItems[0]
    }
  }
}
