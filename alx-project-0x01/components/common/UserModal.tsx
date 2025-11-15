import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit, }) => {
  const [user, setUser] = useState<UserData>({
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name in user) {
      setUser({ ...user, [name]: value });
      return;
    }

    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setUser({
        ...user,
        address: { ...user.address, [field]: value },
      });
      return;
    }

    if (name.startsWith("geo.")) {
      const field = name.split(".")[1];
      setUser({
        ...user,
        address: {
          ...user.address,
          geo: { ...user.address.geo, [field]: value },
        },
      });
      return;
    }

    if (name.startsWith("company.")) {
      const field = name.split(".")[1];
      setUser({
        ...user,
        company: { ...user.company, [field]: value },
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={user.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="text"
            name="website"
            placeholder="Website"
            value={user.website}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          {/* Address section */}
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="address.street"
              placeholder="Street"
              value={user.address.street}
              onChange={handleChange}
              className="px-4 py-2 border rounded-lg"
            />

            <input
              type="text"
              name="address.city"
              placeholder="City"
              value={user.address.city}
              onChange={handleChange}
              className="px-4 py-2 border rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="geo.lat"
              placeholder="Latitude"
              value={user.address.geo.lat}
              onChange={handleChange}
              className="px-4 py-2 border rounded-lg"
            />

            <input
              type="text"
              name="geo.lng"
              placeholder="Longitude"
              value={user.address.geo.lng}
              onChange={handleChange}
              className="px-4 py-2 border rounded-lg"
            />
          </div>

          {/* Company */}
          <input
            type="text"
            name="company.name"
            placeholder="Company Name"
            value={user.company.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
