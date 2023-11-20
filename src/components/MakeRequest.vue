<template>
    <p>title</p>
    <input id="input" type="text">
    <button @click="submitData">Submit</button>
    <br>
    <button @click="getData">Get</button>
    <ul>
        <li v-for="request in requests" :key="request.id">{{request.title}}, {{request.bodyText}}</li>
    </ul>
    
</template>

<script setup>
    import axios from "axios";
    import {ref} from "vue";

    const requests = ref(null);

    function submitData(){
        let data = {
            title: document.getElementById("input").value,
            bodyText: document.getElementById("input").value
        }; 

        fetch('http://localhost:3000/api/v1/request', {
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

    axios.get('http://localhost:3000/api/v1/request')
        
        .then(response => requests.value = response.data)
        .then(console.log(requests))

        .catch(err => {
            console.log("error: " + err);
        });

</script>

<style>

</style>