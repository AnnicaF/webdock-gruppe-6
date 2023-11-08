<script setup>
import Modal         from '../components/Modal.vue'
</script>

<template>
    <div class="line-container">
      <hr class="line" />
    </div>
        <div class="filter_container">
            <button @click="openModal()">Create Post</button>
            <Modal/>
            <div>
                <ul class="filter_bar">
                    <li :class="{ 'selected': activeTab === 'New' }" @click="setActiveTab('New')">New</li>
                    <li :class="{ 'selected': activeTab === 'Top' }" @click="setActiveTab('Top')">Top</li>
                    <li :class="{ 'selected': activeTab === 'trending' }" @click="setActiveTab('trending')">Trending</li>
                    <li>
                    <label for="categorySelect">{{ categoryLabel }}</label>
                    <select id="categorySelect" @change="selectCategory">
                        <option value="">All Categories</option>
                        <option value="Category 1">Category 1</option>
                        <option value="Category 2">Category 2</option>
                        <option value="Category 3">Category 3</option>
                    </select>
                    </li>
                </ul>
            </div>
        </div>
    <div class="line-container">
      <hr class="line" />
    </div>
</template>

<script>
export default {
    data() {
    return {
      activeTab: 'top', 
    };
  },
    components: {
        Modal,
    },
    methods: {
        openModal() {
            const modal = document.getElementById("modal");
            modal.classList.add("show");
        },
        setActiveTab(tabName) {
            this.activeTab = tabName;
        },
    },
};

</script>

<style scoped>
@import '@/assets/base.css';
.filter_container {
    display: flex;
    justify-content: center;
}

.filter_bar {
    display: flex;
}

.filter_bar {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

.filter_bar li {
  cursor: pointer;
  font-size: 18px;
  color: #000; 
  text-decoration: none;
  padding: 10px;
  padding-left: 30px;
}

.filter_bar li.selected {
  text-decoration: underline;
}

button{
   background-color:var(--green-primary);
   color: var(--white);
   border-radius: 10px; 
   font-size: 16px;
   padding: 8px 18px;
   border: none; 
   cursor: pointer;
}

.line-container {
  display: flex;
  justify-content: center;
}

.line {
  width: 600px;
  border: none;
  border-top: 2px solid var(--grey-mid); 
  margin: 10px 0;
}

select{
    border: none;
    font-size: 18px;
}
label{
    font-size: 18px;
}


</style>
