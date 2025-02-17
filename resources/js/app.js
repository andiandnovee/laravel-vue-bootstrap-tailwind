// Load JavaScript dependencies including Vue and other libraries
import './bootstrap';
import { createApp } from 'vue';

// Register global components
import ExampleComponent from './components/ExampleComponent.vue';
import Sidebar from './components/Sidebar.vue';

// Create a Vue application instance
const app = createApp({});

// Register components with the application instance
const globalComponents = {
    'example-component': ExampleComponent,
    'sidebar': Sidebar,
};

Object.entries(globalComponents).forEach(([name, component]) => {
    app.component(name, component);
});

// Auto-register components (if needed)
// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

// Mount the application to the HTML element with an "id" attribute of "app"
app.mount('#app');
