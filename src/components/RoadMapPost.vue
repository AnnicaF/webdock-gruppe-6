<template>
  <div>
    <div class="roadmapSpacer"></div>

    <!-- Planned section -->
    <div class="contentContainer">
      <div class="columnContainer">
        <div class="contentInnerContainer">
          <div class="roadmapContainer">
            <div class="roadmapColumn">
              <div class="roadmapHeader planned">
                <h3 class="roadmapTitle">Planned</h3>
              </div>
              <div class="scrollContainer">
                <div v-for="(post, index) in posts" :key="index">
                  <div v-if="post.Status.name=='Planned'" class="postContainer">
                    <div class="upvoteContainer">
                      <button @click="upvote(post)" class="upvote-button">
                        <font-awesome-icon
                          class="fa-lg"
                          icon="fa-solid fa-caret-up"
                        />
                        {{ post.upvoteCount }}
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
              <div class="roadmapHeader progress">
                <h3 class="roadmapTitle">In progress</h3>
              </div>
              <div class="scrollContainer">
                <div v-for="(post, index) in posts" :key="index">
                  <div v-if="post.Status.name=='In Progress'" class="postContainer">
                    <div class="upvoteContainer">
                      <button @click="upvote(post)" class="upvote-button">
                        <font-awesome-icon
                          class="fa-lg"
                          icon="fa-solid fa-caret-up"
                        />
                        {{ post.upvoteCount }}
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
              <div class="roadmapHeader complete">
                <h3 class="roadmapTitle">Complete</h3>
              </div>
              <div class="scrollContainer">
                <div v-for="(post, index) in posts" :key="index">
                  <div v-if="post.Status.name=='Completed'" class="postContainer">
                    <div class="upvoteContainer">
                      <button @click="upvote(post)" class="upvote-button">
                        <font-awesome-icon
                          class="fa-lg"
                          icon="fa-solid fa-caret-up"
                        />
                        {{ post.upvoteCount }}
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  grid-auto-rows: auto;
  align-items: center;
  width: 100%;
}

.columnContainer {
  margin: 0;
  align-items: center;
}

.roadmapSpacer {
  padding: 50px;
}

.roadmapContainer {
  align-items: center;
  padding: 10px;
  justify-content: center;
  align-content: center;
}

.roadmapColumn {
  border: 1px solid gray;
  border-radius: 10px;
  width: 100%;
}
.scrollContainer {
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

.planned {
  background-color: #0076c5;
}
.progress {
  background-color: #a259ff;
}
.complete {
  background-color: var(--green-primary);
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

h3 {
  margin-left: 10px;
}

@media screen and (max-width: 600px) {
  .contentContainer {
    grid-template-columns: 1fr;
  }

  .roadmapColumn {
    width: 80%;
    margin-bottom: 20px;
  }

  .scrollContainer {
    height: auto;
    max-height: 300px;
  }
}
</style>
