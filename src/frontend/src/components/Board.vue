<template>
    <div>
        <b-table striped hover :items="items" :fields="fields" @row-clicked="rowClick" :per-page="perPage" :current-page="currentPage"/>
        <b-pagination v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    align="center"/>
        <b-button @click="writeContent">글쓰기</b-button>
    </div>
</template>
<script>
    import data from '../data'
    //아래와 같음
    //@/data
    //../data/index.js

    export default {
        name: 'Board',
        data(){
            let items = data.Content.sort((a,b)=>{ return b.content_id - a.content_id})
            items = items.map(contentItems => {return {...contentItems, user_name: data.User.filter(userItems => userItems.user_id === contentItems.user_id)[0].name}})
            return {
                currentPage: 1,
                perPage: 10,
                fields: [
                    {
                        key: 'content_id',
                        label: '글번호'
                    },
                    {
                        key: 'title',
                        label: '제목'
                    },
                    {
                        key: 'created_at',
                        label: '작성일'
                    },
                    {
                        key: 'user_name',
                        label: '글쓴이'
                    }
                ],
                items: items
            }
        },
        methods: {
            rowClick(item) {
                this.$router.push({
                    path: `/board/free/detail/${item.content_id}`
                })
            },
            writeContent() {
                this.$router.push({
                    path: '/board/free/create'
                })
            }
        },
        computed: {
            rows() {
                return this.items.length
            }
        }
    }
</script>