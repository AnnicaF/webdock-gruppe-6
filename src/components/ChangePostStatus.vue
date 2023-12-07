<template>
  <div :class="{ showDropdown: showDropdown }" class="dropdown-container">
    <button @click="toggleDropdown" class="statusButton">
      Under Review<font-awesome-icon
        class="fa-cd"
        icon="fa-solid fa-caret-down"
      />
    </button>
    <div
      v-show="showDropdown"
      @click.stop="handleDropdownItemClick"
      class="dropdown-content"
    >
      <ul>
        <li v-for="(item, index) in dropdownItems" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
      dropdownItems: ["Planned", "In progress", "Complete"],
    };
  },
  mounted() {
    document.addEventListener("click", this.closeDropdownOnOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdownOnOutsideClick);
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    handleDropdownItemClick() {
      // Handle dropdown item click logic here
      // You can use this method to perform actions when a dropdown item is clicked
      this.showDropdown = false; // Close the dropdown after an item is clicked
    },
    closeDropdownOnOutsideClick(event) {
      // Close dropdown if the click is outside the dropdown
      if (this.showDropdown && !this.$el.contains(event.target)) {
        this.showDropdown = false;
      }
    },
  },
};
</script>

<style scoped>
div > .showDropdown ul {
  position: relative;
  display: inline-block;
}

div ul {
  display: none;
  position: absolute;
  z-index: 1;
  list-style: none;
  margin: 0;
}

.fa-cd {
  padding-left: 5px;
  margin: 0px;
}
.dropdown-container {
  position: relative;
  display: inline-block;
  margin: 0px;
}

.statusButton {
  color: black;
  font-size: 16px;
  padding: 12px;
  margin: 0px;
  cursor: pointer;
}

button {
  background: white;
  border: 1px solid black;
  border-radius: 5px;
}

button:hover {
  background-color: var(--grey-mid);
}

.dropdown-content {
  color: black;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.dropdown-content ul {
  padding: 0;
}

.dropdown-content li {
  list-style: none;
  text-decoration: none;
  padding: 18px;
  margin: 0px;
  cursor: pointer;
}

.dropdown-content li:hover {
  background-color: #f1f1f1; /* Grey background on hover */
}
</style>
