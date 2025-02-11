<script setup>
import { ref } from 'vue';

const isCollapsed = ref(false);
const dropdownOpen = ref(false);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};
</script>
<template>
  <div class="sidebar-container">
    <!-- Toggle Button untuk Mobile -->
    <button class="btn btn-toggle d-lg-none" @click="toggleSidebar">
      <i class="fas fa-bars"></i>
    </button>

    <!-- Sidebar -->
    <div class="sidebar" :class="{ 'collapsed': isCollapsed }">
      <!-- Menu Items -->
      <div class="sidebar-menu">
        <div class="logo-container">
          <h3 class="logo">Admin Panel</h3>
        </div>

        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">
              <i class="fas fa-home mr-2"></i> Dashboard
            </router-link>
          </li>

          <!-- Dropdown Menu -->
          <li class="nav-item dropdown" @click="toggleDropdown">
            <a class="nav-link dropdown-toggle">
              <i class="fas fa-users-cog mr-2"></i> User Management
            </a>
            <ul class="dropdown-menu" :class="{ show: dropdownOpen }">
              <li><router-link to="/users" class="dropdown-item">Users</router-link></li>
              <li><router-link to="/roles" class="dropdown-item">Roles</router-link></li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link to="/posts" class="nav-link">
              <i class="fas fa-file-alt mr-2"></i> Posts
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/categories" class="nav-link">
              <i class="fas fa-tags mr-2"></i> Categories
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/settings" class="nav-link">
              <i class="fas fa-cog mr-2"></i> Settings
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/reports" class="nav-link">
              <i class="fas fa-chart-bar mr-2"></i> Reports
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
      dropdownOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background: #2c3e50;
  transition: all 0.3s;
  position: fixed;
  z-index: 1000;
}

.sidebar.collapsed {
  margin-left: -250px;
}

.logo-container {
  padding: 20px;
  color: white;
  text-align: center;
  border-bottom: 1px solid #34495e;
}

.nav-link {
  color: #bdc3c7;
  padding: 15px 25px;
  transition: all 0.3s;
}

.nav-link:hover {
  background: #34495e;
  color: #ecf0f1;
}

.nav-link.router-link-exact-active {
  background: #3498db;
  color: white;
}

.dropdown-menu {
  background: #34495e;
  border: none;
}

.dropdown-item {
  color: #bdc3c7;
  padding: 10px 25px;
}

.dropdown-item:hover {
  background: #2c3e50;
  color: white;
}

.btn-toggle {
  position: fixed;
  left: 10px;
  top: 10px;
  z-index: 9999;
}

@media (min-width: 992px) {
  .btn-toggle {
    display: none;
  }
}
</style>