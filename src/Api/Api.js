class ApiProvider {
  //POST login & passwd data to the API
  userLogIn = async (login, password, remember) => {
    const connexion = { email: login, password: password };
    const settings = {
      method: "POST",
      body: JSON.stringify(connexion),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/user/login`,
        settings
      );
      const data = await response.json();
      if (data.body.token) {
        if (remember) {
          sessionStorage.setItem("jwtToken", data.body.token);
        }
      }

      return data;
    } catch (e) {
      return e;
    }
  };

  // POST JwToken to the API and keep user information
  getUserProfile = async (jwToken) => {
    const settings = {
      method: "POST",
      headers: {
        Authorization: `Bearer ` + jwToken,
      },
    };
    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/user/profile`,
        settings
      );
      const data = await response.json();
      return data;
    } catch (e) {
      return e;
    }
  };

  // PUT data firstname and lastname update to the API
  setUserProfile = async (firstName, lastName, jwToken) => {
    const name = { firstName: firstName, lastName: lastName };
    const settings = {
      method: "PUT",
      body: JSON.stringify(name),
      headers: {
        Authorization: `Bearer ` + jwToken,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        `http://localhost:3001/api/v1/user/profile`,
        settings
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (e) {
      return e;
    }
  };
}

export default ApiProvider;
