import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { User } from "../types";

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "role", headerName: "Role", width: 200 },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Users List</h1>
      <div className="w-full max-w-5xl bg-white p-8 rounded-xl shadow-xl">
        <DataGrid
          rows={users}
          columns={columns}
          pageSizeOptions={[5, 10]}
          className="bg-gray-50 rounded-lg"
        />
      </div>
    </div>
  );
};

export default UsersPage;
