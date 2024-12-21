"use client";

import { createContext, useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(true);
  const [userId, setId] = useState("");
  const [show, setShow] = useState(false);
  const [publishId, setUpPId] = useState();
  const [AnnounceID, setAnnounceId] = useState();
  const [countries, setCountry] = useState([]);
  const [Regions, setRegion] = useState([]);
  const [CountryCode, setCountryCode] = useState("AF");
  const [sessy, setSession] = useState([]);

  const fetchUserData = async () => {
    try {
      const { data } = await axiosInstance.get("vote-users/user/profile/");
      setUserData(data);
    } catch (error) {}
  };

  async function getUsers() {
    try {
      const { data } = await axiosInstance.get("/vote-users/users/");
      setUsers(data);
    } catch (error) {}
  }

  // synchronous Action
  useEffect(() => {
    fetchUserData();
    getUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        open,
        show,
        userData,
        userId,
        publishId,
        AnnounceID,
        countries,
        Regions,
        CountryCode,
        sessy,
        setCountryCode,
        setAnnounceId,
        setUpPId,
        setOpen,
        setId,
        setShow,
        setUserData,
        // functions
        fetchUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
