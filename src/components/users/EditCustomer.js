import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditCustomer = () => {
  const { id } = useParams();
  const [user,setCustomer] = useState({
    name: "",
    phone: "",
    timestamp: "",
  });

  useEffect(() => {
    displayCustomer();
  }, []);

  const displayCustomer = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setCustomer(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Customer</h2>
      </div>
    </div>
  );
};

export default EditCustomer;
