// src/store/authStore.js
import { create } from "zustand";

export const useAuthStore = create(set => ({
  user: null,

  login: (email, password) => {
    // fake login
    const role = email === "admin@gmail.com" ? "admin" : "user";
    set({ user: { email, role } });
  },

  logout: () => set({ user: null })
}));
