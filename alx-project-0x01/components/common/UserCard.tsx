import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="w-80 h-96 shadow-lg my-6 bg-white rounded-lg hover:shadow-xl transition-shadow duration-300">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold p-4">{name}</h2>
        </div>
        <div className="p-4">
          <p className="text-gray-600">{username}</p>
          <span>Post ID: {id}</span>
          <div className="mt-2 grid grid-cols-1">
            <span className="text-sm">User Email: {email}</span>
            <span className="text-sm">User Phone: {phone}</span>
            <span className="text-sm">User Website: {website}</span>
            <span className="text-sm">User Company: {company?.name}</span>
            <div>
              <p className="text-sm">Street: {address?.street}</p>
              <p className="text-sm">City: {address?.city}</p>
              <p className="text-sm">Zip: {address?.zipcode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
