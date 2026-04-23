import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:1337/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const productAPI = {
    getAll: async (params) => {
        // For when Strapi backend is complete
        // const res = await apiClient.get('/products', { params: { populate: '*', ...params } });
        // return res.data.data;
        return []; // mock while unintegrated
    },
    getOne: async (id) => {
        // const res = await apiClient.get(`/products/${id}`, { params: { populate: '*' } });
        // return res.data.data;
        return null;
    }
};

export const orderAPI = {
    create: async (orderData) => {
        // const res = await apiClient.post('/orders', { data: orderData });
        // return res.data.data;
        return { id: 1 };
    }
}

export default apiClient;
