import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import FormPage from './components/FormPage.vue';
import AdPage from './pages/AdsPage.vue';
import axios from 'axios';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/form',
    name: 'Form',
    component: FormPage
  },
  {
    path: '/ads',
    name: 'Ads',
    component: AdPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    const secretKey = prompt('Enter the secret key:');
    try {
      const response = await axios.post('http://localhost:5000/auth', { secretKey });
      if (response.data.authenticated) {
        localStorage.setItem('authToken', response.data.token);
        next();
      } else {
        alert('Access denied');
        next(false); // Cancel the navigation
      }
    } catch (error) {
      alert('Error during authentication');
      next(false); // Cancel the navigation
    }
  } else {
    try {
      const response = await axios.post('http://localhost:5000/validate', { token });
      if (response.data.valid) {
        next();
      } else {
        localStorage.removeItem('authToken');
        alert('Session expired. Please re-authenticate.');
        next(false); // Cancel the navigation
      }
    } catch (error) {
      alert('Error during validation');
      next(false); // Cancel the navigation
    }
  }
});

export default router;

