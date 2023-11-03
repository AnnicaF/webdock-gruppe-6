<template>
    <p>title</p>
    <input id="input" type="text">
    <button @click="submitData">Submit</button>
</template>

<script setup>
    function submitData(){
        let data = {
            name: document.getElementById("input").value,
            email: document.getElementById("input").value
        }; 

        fetch('http://localhost:3000/api/v1/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
                })
            .then(responseData => {
                console.log(responseData);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
</script>

<style>

</style>