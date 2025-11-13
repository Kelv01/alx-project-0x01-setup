import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import React from "react";

const Users: React.FC<UserProps[]> = ({ posts }) => {
  // console.log(posts)
  
  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="p-4">
          <h1 className="text-2xl font-semibold">User Details</h1>
        </div>
        <div className="grid grid-cols-3 grid-rows-1 justify-center items-center gap-2">
          {posts.map(
            (
              { name, username, id, email, company, phone, address, website }: UserProps,
              key: number
            ) => (
              <UserCard
                name={name}
                username={username}
                email={email}
                company={company}
                website={website}
                phone={phone}
                address={address}
                id={id}
                key={key}
              />
            )
          )}
        </div>
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
