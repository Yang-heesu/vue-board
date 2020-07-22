<template>
    <div>
        <input v-model="writer" placeholder="글쓴이"/>
        <input v-model="title" placeholder="제목"/>
        <textarea v-model="content" placeholder="내용"/>
        <button @click="writer">작성</button>
    </div>
</template>
<script>
    import data from '../data'

    export default {
        name: 'Create',
        data() {
            return {
                data: data,
                writer: "",
                title: "",
                content: ""
            }
        }
    }
</script>