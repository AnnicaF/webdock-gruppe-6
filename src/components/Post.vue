<template>
      <div class="post-container">
        <div class="post">
            <div class="post-content">
                <h2 class="title">{{ post.title }}</h2>
                <p class="description">{{ post.description }}</p>
                <hr>
                <div class="user_date_box">
                    <p class="small-text">{{ post.user }}</p>
                    <p class="small-text">{{ post.date }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>

.post-container {
  display: flex;
  background-color: var(--grey-mid);
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.post {
  height: 170px;
}
  
  .post-content {
    padding: 20px;
  }

  .title{
    font-size: 25px;
    padding-bottom: 20px;
  }

  .description{
    font-size:18px
  }

  hr{
    margin-top: 15px;
    margin-bottom: 15px;
    width: 150px;
    border: 1px solid var(--green-primary);
  }

  .user_date_box{
    display: flex;
    flex-direction: row;

  }

  .small-text{
    font-size: 14px;
    padding-right: 20px;
  }
  </style>