import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUserId } from "../../Services/userId.service";
import Header from "../../Components/Header/Header";
import PatientTable from "./components/PatientTable";
import InventoryTable from "./components/InventoryTable";

const BloodBank = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const getDonorInfo = async (id) => {
      try {
        const response = await axios.get(`/users/bloodbanks/${id}`);
        if (response.status === 200) {
          setUsername(response.data.name);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const currentUserId = getUserId();
    getDonorInfo(currentUserId);
  }, []);
  return (
    <>
      <Header head={`Welcome Back ${username}`} />
      <div>
        <div>
          <h2>Patients</h2>
          <PatientTable />
        </div>
        <div>
          <h2>Inventories</h2>
          <InventoryTable />
        </div>
      </div>
    </>
  );
};

export default BloodBank;
