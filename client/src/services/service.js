import * as api from '../api/requester';

export const login = (i, data) => {
    return api.post(`/login`, data);
};

export const register = (i, data) => {
    return api.post(`/register`, data);
};

export const logout = () => {
    return api.get(`/logout`);
};

export const getAllRecipes = (query) => {
    return api.get(`/recipe/${query}`);
};

export const getRecipe = (id) => {
    return api.get(`/recipe/${id}`);
};

export const createRecipe = (i, data) => {
    return api.post('/recipe', data)
};

export const editRecipe = (id, data) => {
    return api.put(`/recipe/${id}`, data);
};

export const deleteRecipe = (id) => {
    return api.del(`/recipe/${id}`);
};

export const rateRecipe = (id) => {
    return api.get(`/recipe/${id}/stars`);
};

export const saveRecipe = (id) => {
    return api.get(`/recipe/${id}/saves`);
};

export const unSaveRecipe = (id) => {
    return api.put(`/recipe/${id}/saves`, {_id: id})
};

export const commentRecipe = (id, data) => {
    return api.post(`/recipe/${id}/comments`, data);
};

export const editComment = (id, data) => {
    return api.put(`/recipe/${id}/comments`, data);
};

export const deleteComment = (id, data) => {
    return api.del(`/recipe/${id}/comments`, data);
};

export const getUser = (id) => {
    return api.get(`/user/${id}`);
};

export const editUser = (id, data) => {
    return api.put(`/user/${id}`, data);
};

export const getSeenNotifications = (id) => {
    return api.get(`/user/${id}/notifications/seen`);
};

export const getNotifications = (id) => {
    return api.get(`/user/${id}/notifications`);
};