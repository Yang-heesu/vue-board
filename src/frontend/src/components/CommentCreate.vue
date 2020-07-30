<template>
    <div>
        <b-input-group :prepend="name" class="mt-3">
            <b-form-textarea id="textarea"
                            v-model="context"
                            :placeholder="'코멘트를 달아주세요~!'"
                            rows="3"
                            max-rows="6"/>
            <b-input-group-addon>
                <b-button variant="info" @click="createComment">작성하기</b-button>
            </b-input-group-addon>
        </b-input-group>
    </div>
</template>

<script>
    import data from '../data'

    export default {
        name: "CommentCreate",
        props: {
            contentId: Number,
            reloadComment: Function
        },
        data() {
            return {
                name: "르라나",
                context: ""
            }
        },
        methods: {
            createComment() {
                data.Comment.push({
                    comment_id: data.Comment[data.Comment.length - 1].comment_id + 1,
                    user_id: 1,
                    content_id: this.contentId,
                    context: this.context,
                    created_at: '2019-04-29 14:11:11',
                    updated_at: null
                })
                this.reloadComment()
                this.context = ""
            }
        }
    }
</script>

<style scoped>

</style>