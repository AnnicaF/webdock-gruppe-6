<template>
    <p>title</p>
    <input v-model="inputData" type="text">
    <button @click="submitData">Submit</button>
</template>

<script>
    export default {
        data() {
            return {
                inputData: "",
            };
        },
    methods: {
        async submitData() {
        const response = await fetch("/api/insertData", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: this.inputData }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Data sent to the server:", data);
        } else {
            console.error("Error sending data:", response.statusText);
        }
        },
    },
};
</script>

<style>

</style>