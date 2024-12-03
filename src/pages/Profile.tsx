import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

interface ProfileFormInputs {
  name: string;
  email: string;
  bio: string;
  profilePicture: FileList;
}

const Profile: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormInputs>();
  const [isEditing, setIsEditing] = useState(false);
  const [profilePicture, setProfilePicture] = useState<string | ArrayBuffer | null>(null);

  const onSubmit = (data: ProfileFormInputs) => {
    console.log(data);
    setIsEditing(false);
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      className="container mx-auto p-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-blue-500 to-purple-600">Profile</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {isEditing ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                id="bio"
                {...register('bio')}
                className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">Profile Picture</label>
              <input
                id="profilePicture"
                type="file"
                {...register('profilePicture')}
                onChange={handleProfilePictureChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {profilePicture && (
                <img src={profilePicture as string} alt="Profile" className="mt-2 w-32 h-32 rounded-full" />
              )}
            </div>
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-lg w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Save
            </motion.button>
          </form>
        ) : (
          <div>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john.doe@example.com</p>
            <p><strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            {profilePicture && (
              <img src={profilePicture as string} alt="Profile" className="mt-2 w-32 h-32 rounded-full" />
            )}
            <motion.button
              onClick={() => setIsEditing(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-lg mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Edit Profile
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Profile;