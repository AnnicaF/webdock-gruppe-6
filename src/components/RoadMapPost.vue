<template>
  <div>
    <div class="roadmapSpacer"></div>

    <!-- Planned section -->
    <div class="contentContainer">
      <div class="columnContainer">
        <div class="contentInnerContainer">
          <div class="roadmapContainer">
            <div class="roadmapColumn">
              <div class="roadmapHeader">
                <h3 class="roadmapTitle">Planned</h3>
              </div>
              <div class="scrollContainer">
                <div v-for="(post, index) in posts" :key="index">
                  <div class="postContainer">
                    <div class="upvoteContainer">
                      
                      <button @click="upvote(post)" class="upvote-button">
                        <font-awesome-icon class="fa-lg" icon="fa-solid fa-caret-up"/>
                        <p class="upvoteCount">{{ post.upvoteCount }}</p>
                      </button>  
                    </div>
                    <h3>{{ post.title }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- In progress section -->
      <div class="columnContainer">
        <div class="contentInnerContainer">
          <div class="roadmapContainer">
            <div class="roadmapColumn">
              <div class="roadmapHeader">
                <h3 class="roadmapTitle">In progress</h3>
              </div>
              <div class="scrollContainer">
                <div v-for="(post, index) in posts" :key="index">
                  <div class="postContainer">
                    <div class="upvoteContainer">
                      <button @click="upvote(post)" class="upvote-button">
                        <font-awesome-icon class="fa-lg" icon="fa-solid fa-caret-up"/>
                        <p class="upvoteCount">{{ post.upvoteCount }}</p>
                      </button>
                    </div>
                    <h3>{{ post.title }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Complete section-->
      <div class="columnContainer">
        <div class="contentInnerContainer">
          <div class="roadmapContainer">
            <div class="roadmapColumn">
              <div class="roadmapHeader">
                <h3 class="roadmapTitle">Complete</h3>
              </div>
              <div class="scrollContainer">
                <div v-for="(post, index) in posts" :key="index">
                  <div class="postContainer">
                    <div class="upvoteContainer">
                      <button @click="upvote(post)" class="upvote-button">
                        <font-awesome-icon class="fa-lg" icon="fa-solid fa-caret-up"/>
                        <p class="upvoteCount">{{ post.upvoteCount }}</p>
                      </button>
                    </div>
                    <h3>{{ post.title }}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array,
  },
  methods: {
    upvote(post) {
      post.upvoteCount += 1;
    },
  },
};
</script>

<style scoped>
.contentContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

.columnContainer {
  flex: 1;
  margin: 10px;
}

.roadmapSpacer {
  padding: 50px;
}

.roadmapContainer {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  padding: 10px;
  justify-content: center;
  align-content: center;
}

.roadmapColumn {
  border: 1px solid gray;
  border-radius: 10px;
}
.scrollContainer {
  width: 100%;
  overflow-y: auto;
  height: 500px;
}

.roadmapHeader {
  padding: 10px;
  background-color: rgb(89, 134, 198);
  text-align: left;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.roadmapTitle {
  color: white;
}

.postContainer {
  display: inline-flex;
  padding: 20px;
}

.upvoteContainer {
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  width: 35px;
  height: 45px;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.upvote-button {
  border: none;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  align-self: center;
}

.upvoteCount {
  color: black;
  align-self: center;
  font-size: 16px;
}

.fa-lg {
  color: grey;
}
</style>
