<template>
    <div>
        <table>
            <tr>
                <td>글쓴이</td>
                <td>제목</td>
                <td>내용</td>
            </tr>
            <tr :key="index" v-for="(item, index) in data">
                <td>{{item.writer}}</td>
                <td>{{item.title}}</td>
                <td>{{item.content}}</td>
            </tr>
        </table>
        <button @click="write">글쓰기</button>
    </div>
</template>
<script>
    import data from '../data'
    //아래와 같음
    //@/data
    //../data/index.js

    export default {
        name: 'Read',
        data(){
            console.log(data)
            return {
                data: data
            }
        },
        methods: {
            write() {
                this.$router.push({
                    path: 'create'
                })
            }
        }
    }
</script>