<script setup>

</script>

<template>
    <div class="lower">
        <p>
            {{ new Date(date).toLocaleDateString("en-GB") }}
        </p>
        <button v-if="isAuthenticated" class="smallbtn" @click="showText">Reply</button>              
    </div>
    <div v-show="tshow">
        <textarea id="replyText" placeholder="Leave a reply"></textarea>
        <div>
            <button class="submitbtn" @click="createReply(commentId)">Submit</button>
            <button class="cancelbtn"  @click="showText">Cancel</button>
        </div>
    </div>
    
    <div class="replybox" v-for="reply in replies" :key="reply.id">
        <p>    
            <strong id="bob">{{ reply.User.name }}</strong> <br>
            {{ reply.bodyText }} <br>
            <hr>
            <div>
                {{ new Date(reply.createdAt).toLocaleDateString("en-GB") }}
                <button v-if="isAuthenticated" class="smallbtn" @click="getInnerHTML($event)">Reply</button>
            </div>
        </p>
    </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
    props: {
        date: String,
        replies: Array,
        commentId: Number,
    },
    computed: {
        ...mapState(["isAuthenticated"]),
    },
    data() {
        return{
            tshow: false
        }
    },
    methods: {
        createReply(num){
            this.showText()
            let data = {
                bodyText: document.getElementById("replyText").value,
                userID: localStorage.getItem("userId"),
                commentID: num,
            }
            axios
            .post(`http://localhost:3000/api/v1/request/comment/${num}/reply`, data)
            .then((response) => {
            console.log("Response:", response.data);
            this.$parent.$emit("callLoad");
            })
            .catch((error) => {
            console.error("Error:", error);
            });
        },
        getInnerHTML(event) {
            if(!this.tshow){
                this.showText();
            }
            const name = event.target.closest('.replybox').querySelector('strong').innerHTML;
            document.getElementById("replyText").value = "To " + name + ": ";
        },
        showText(){
            this.tshow = !this.tshow;
            let RT = document.getElementById("replyText")
            if(!this.tshow){
                RT.value = "";
            }
        }
    }
}
</script>

<style scoped>
.lower{
  display: flex;
  justify-items: center;
  gap: 10px;
}

.lower p{
  margin-top: auto;
  margin-bottom: auto;
}

.smallbtn{
  font-size: smaller;
  padding: 2px;
  margin: 2px;
  margin-top: auto;
  margin-bottom: auto;
  border: 0px;
  cursor: pointer;
}

textarea{
    width: 100%;
    resize: none;
}

.submitbtn{
  background-color: var(--green-primary);
  border-style: none;
  border-radius: 4px;
  color: var(--white);
  font-size: 12px;
  cursor: pointer;
  margin: 3px;
  padding: 6px 11px;
}
.cancelbtn{
  border-radius: 4px;
  padding: 4px 9px;
  font-size: 12px;
  cursor: pointer;
  margin: 3px;
}

.replybox{
    margin-top: 10px;
    margin-left: 20px;
    font-size: 14px;
}
.replybox div{
    display: flex;
    gap: 8px;
}
</style>