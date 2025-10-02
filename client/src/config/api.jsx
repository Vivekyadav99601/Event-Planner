import axios from "axios"

const api=axios.create({
    baseURL :import.meta.env.VITE_API_URL,
    withCredentials:true,
     headers: {
    Authorization: `Bearer ${cookieStore.get("IdCard")?.value}`
  }
});

export default api;