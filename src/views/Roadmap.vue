
<script setup>
import Nav from '../components/Nav.vue'
</script>

<template>
    <Nav/>
    <div class="roadmapSpacer">
    </div>
    <div class="contentContainer">
        <div class="contentInnerContainer">
            <div class="roadmapContainer">
        <div class="roadmapColumn">
            <div class="roadmapHeader">
            <h3>Planned</h3>
        </div>
            <div class="scrollContainer">
                <div class="postList">
                <p>link to post will appear here</p>
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>
    
</template>

<style>

.contentContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.contentInnerContainer {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
}

.roadmapSpacer {
    padding: 50px;
}

.roadmapContainer {
    display: grid;
    justify-items: start;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-auto-rows: auto;
    padding: 10px;
    justify-content: center;
    align-content: center;
}

.postList {
    padding: 20px;
}

.roadmapColumn {
    border: 1px solid gray;
    background-color: E5E5E5;
    border-radius: 10px;
}
.scrollContainer {
    width: 100%;
    overflow-y: auto;
}

.postList {
    margin: 0px;
    display: flex;
    flex-direction: column;
}

.roadmapHeader {
    padding: 20px;
    font-weight: bold;
    background-color: rgb(89, 134, 198);
    color: white;
    text-align: left;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 1px solid rgb(89, 134, 198);
}


</style>

<script>


</script>