import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";
import React, { useState } from "react";

interface UsersPageProps {
  posts: UserData[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [users, setUsers] = useState<UserData[]>(posts);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    setUsers([newUser, ...users]); // add user to list
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">User Details</h1>

          {/* Add User Button */}
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => setModalOpen(true)}
          >
            Add User
          </button>
        </div>

        {/* Grid of User Cards */}
        <div className="grid grid-cols-3 gap-2">
          {users.map((user: UserData) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              company={user.company}
              website={user.website}
              phone={user.phone}
              address={user.address}
              street={user.address.street}
            />
          ))}
        </div>

        {/* User Modal */}
        <UserModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
