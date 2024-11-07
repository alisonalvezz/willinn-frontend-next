import React from "react";
import Sidebar from "./sidebar";
import UserTable from "./usertable";
import UserForm from "./userform";

const Admin: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="w-3/4 p-10 flex">
        <section className="w-2/3">
        <h1 className="text-3xl font-semibold text-black">Usuarios</h1>
          <UserTable />
        </section>
        <section className="3000w-1/3 ml-10">
          <UserForm />
        </section>
      </main>
    </div>
  );
};

export default Admin;
