import { useState, useEffect } from "react";

function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if there's a user token in local storage
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      // Make an API request to validate the token and retrieve the user data
      fetch("/api/auth/verify", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Authentication failed");
          }
        })
        .then((userData) => {
          setUser(userData);
        })
        .catch((error) => {
          console.error(error);
          setUser(null);
        });
    } else {
      setUser(null);
    }
  }, []);

  return user;
}

export default useAuth;
