import { useEffect, useState } from "react";
import { getUserById } from "../services/userService";

const useGetUserData = () => {
  const [userData, setUserData] = useState(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;

      try {
        const data = await getUserById(userId);
        setUserData(data);
      } catch (error) {
        console.error("Error al obtener usuario:", error);
      }
    };

    fetchUser();
  }, [userId]);

  return userData;
};

export default useGetUserData;
