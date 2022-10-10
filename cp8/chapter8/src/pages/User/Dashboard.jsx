import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [cookies] = useCookies(["accessToken"]);
  const navigate = useNavigate();

  useEffect(() => {
    /**
     * 1. cek apakah akses token ada atau tidak
     * 2. cek apakah akses token decode strukturnya valid apa tidak
     * 3. cek server apakah akses token valid apa tidak
     */
    if (!cookies.accessToken) {
      navigate("/blogs");
    }
  }, []);

  return (
    <div>Ini adalah dashboard user, tidak bisa diakses kalo tidak login</div>
  );
};

export default Dashboard;
