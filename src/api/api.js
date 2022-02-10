import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "b240e74b-4cb5-4947-b4be-31896ad1063d"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'

})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage} &count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId) {
        console.warn('Obsolete method.Please profileApi object.')
        return profileAPI.getProfile(`profile/` + userId)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {})
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status} );
    }
}

export const aythAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });

    }
}





