export async function login(email, password) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
    const responseData = await response.json();

    console.log(responseData);
    // utilisation du hook custom ici
    localStorage.setItem("token", responseData.token);

  } catch (error) {
    throw new Error(`Erreur lors de la connexion : ${error.message}`);
  }
}

export async function register(data) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/ld+json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        plainPassword: data.password,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
      }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(`Erreur lors de la création : ${error.message}`);
  }
}
