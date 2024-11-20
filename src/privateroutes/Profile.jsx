import React, { useContext, useState } from "react";
import { AuthContext } from "../contextapi/ContextApi";
import { updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import swal from 'sweetalert';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleUpdate = async () => {
    if (!name.trim() || !photoURL.trim()) {
      swal("Name and Photo URL cannot be empty.");
      return;
    }

    setLoading(true);
    try {
      await updateProfile(user, { displayName: name, photoURL });
      swal("Profile updated successfully!");
      setEditMode(false); // Exit edit mode
    } catch (error) {
      swal("Failed to update profile. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-6 shadow-lg bg-base-100 rounded-md">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="flex items-center gap-6">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={photoURL || "https://via.placeholder.com/150"}
                alt="Profile"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary">
              {user?.displayName || "Your Name"}
            </h1>
            <p className="text-sm text-gray-600">{user?.email || "Email"}</p>
            <p className="text-sm font-medium text-secondary">
              Role: Career Enthusiast
            </p>
          </div>
        </div>

        {!editMode && (
          <button
            onClick={() => setEditMode(true)}
            className="btn btn-outline btn-primary mt-4 lg:mt-0"
          >
            Edit Profile
          </button>
        )}
      </div>

      <div className="stats stats-vertical lg:stats-horizontal shadow mt-6">
        <div className="stat">
          <div className="stat-title">Sessions Attended</div>
          <div className="stat-value">12</div>
          <div className="stat-desc">5% increase this month</div>
        </div>
        <div className="stat">
          <div className="stat-title">Feedbacks Given</div>
          <div className="stat-value">34</div>
          <div className="stat-desc">Consistent participation</div>
        </div>
        <div className="stat">
          <div className="stat-title">Profile Completion</div>
          <div className="stat-value text-primary">85%</div>
          <div className="stat-desc">Add more details to complete</div>
        </div>
      </div>

      {editMode && (
        <div className="card bg-base-200 shadow-md mt-6 p-4">
          <h2 className="text-lg font-bold mb-4">Edit Your Profile</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
          >
            <div className="mb-4">
              <label className="block font-medium mb-2">Update Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-2">Update Photo URL</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`btn btn-primary ${loading && "loading"}`}
                disabled={loading}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Session History</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Session Name</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Resume Review</td>
                <td>2024-11-15</td>
                <td className="text-success">Completed</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Career Counseling</td>
                <td>2024-11-18</td>
                <td className="text-warning">Pending</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mock Interview</td>
                <td>2024-11-20</td>
                <td className="text-success">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
