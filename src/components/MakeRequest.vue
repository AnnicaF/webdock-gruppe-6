<template>
    <p>title</p>
    <input id="input" type="text">
    <button onclick="submitData">Submit</button>
</template>

<script>
    let data = getElementById("input").value;
    function submitData(){
        console.log(data);
    }
</script>

<style>

</style>