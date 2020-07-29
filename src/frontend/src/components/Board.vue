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

    export default {
        name: 'Board',
        data(){
            return {
                fields: ['content_id', 'title', 'created_at'],
                items: data.Content
            }
        }
    }
</script>