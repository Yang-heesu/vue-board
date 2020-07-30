<template>
    <div>
        <b-input v-model="subject" placeholder="제목을 입력해 주세요"/>
        <b-form-textarea id="textarea"
                         v-model="context"
                         placeholder="Enter something..."
                         rows="3"
                         max-rows="6"/>
        <b-button @click="updateMode ? updateContent() : uploadContent()">저장</b-button>
        <b-button @click="cancel">취소</b-button>
    </div>
</template>
<script>
    import data from '../data'

    export default {
        name: 'Create',
        data() {
            return {
                subject: '',
                context: '',
                userId: 1,
                createAt: '2019-04-17 11:32:42',
                updateAt: null,
                updateObject: null,
                updateMode: this.$route.params.contentId > 0 ? true : false
            }
        },
        created(){
          if(this.$route.params.contentId > 0) {
              const contentId= Number(this.$route.params.contentId)
              this.updateObject = data.Content.filter(item => item.content_id === contentId)[0]
              this.subject = this.updateObject.title
              this.context = this.updateObject.context
          }
        },
        methods: {
            cancel() {
                this.$router.push({
                    path: '/board/free'
                })
            },
            updateContent() {
                this.updateObject.title = this.subject
                this.updateObject.context = this.context
                this.$router.push({
                    path: '/board/free'
                })
            },
            uploadContent() {
                let items = data.Content.sort((a,b)=>{ return b.content_id - a.content_id})
                const content_id = items[0].content_id + 1
                data.Content.push({
                    content_id: content_id,
                    user_id: this.userId,
                    title: this.subject,
                    context: this.context,
                    created_at: this.createAt,
                    updated_at: this.updateAt
                })
                this.$router.push({
                    path: '/board/free'
                })
            }
        }
    }
</script>