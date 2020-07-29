<template>
    <div>
        <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
</template>
<script>
    import data from '../data'
    //아래와 같음
    //@/data
    //../data/index.js

    let items = data.Content.sort((a,b)=>{ return b.content_id - a.content_id})
    export default {
        name: 'Board',
        data(){
            return {
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
                    }
                ],
                items: items
            }
        }
    }
</script>