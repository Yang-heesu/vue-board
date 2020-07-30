<template>
    <div>
        <b-input v-model="subject" placeholder="제목을 입력해 주세요"/>
        <b-form-textarea id="textarea"
                         v-model="context"
                         placeholder="Enter something..."
                         rows="3"
                         max-rows="6"/>
        <b-button>저장</b-button>
        <b-button @click="cancel">취소</b-button>
    </div>
</template>
<script>
    //import data from '../data'

    export default {
        name: 'Create',
        data() {
            return {
                subject: '',
                context: ''
            }
        },
        methods: {
            cancel() {
                this.$router.push({
                    path: '/board/free'
                })
            }
        }
    }
</script>