<template>
    <p>title</p>
    <input v-model="inputData" type="text">
    <button @click="submitData">Submit</button>
</template>

<script>
    console.log("a");
    export default {
        data() {
            return {
                inputData: "",
            };
            console.log("b");
        },
    methods: {
        async submitData() {
        const response = await fetch("http://localhost:3005/api/insertData", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: this.inputData }),
        });
        console.log("c");
        if (response.ok) {
            const data = await response.json();
            console.log("Data sent to the server:", data);
            console.log("d");
        } else {
            console.error("Error sending data:", response.statusText);
            console.log("e");
        }
        console.log("f");
        },
    },
};
console.log("g");
</script>

<style>

</style>