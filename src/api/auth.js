import { apiClient } from ".";

export async function login(email, password) {
  const response = await apiClient.post("/api/login", {
    email,
    password,
  });
  localStorage.setItem("token", response.data.token);
}

export async function register(data) {

  const response = await apiClient.post("/users", {
    email: data.email,
    password: data.password,
    username: data.username,
    firstName: data.firstName,
    lastName: data.lastName,
    age: data.age,
  });
  
}
