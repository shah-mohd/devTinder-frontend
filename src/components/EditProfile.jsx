import { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({user}) => {
    // const {firstName, lastName, photoUrl, age, gender, about} = user;

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [age, setAge] = useState(user.age)
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [error, setError] = useState("");
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();

    const saveProfile = async () => {
        setError("");
        try{
            const res = await axios.patch(BASE_URL + "/profile/edit", {
                firstName,
                lastName,
                photoUrl,
                age,
                gender,
                about
            }, {withCredentials: true});
            dispatch(addUser(res?.data?.data));
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2000);
        } catch(err) {
            setError(err?.response?.data);
        }
    }

  return (
    <>
        <div className="flex justify-center my-10">
            <div className="flex justify-center mx-10">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Edit Profile</legend>

                        <label className="label">First Name</label>
                        <input 
                        type="email"
                        value={firstName}
                        className="input"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        />

                        <label className="label">Last Name</label>
                        <input 
                        type="email"
                        value={lastName}
                        className="input"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        />

                        <label className="label">Photo URL</label>
                        <input 
                        type="email"
                        value={photoUrl}
                        className="input"
                        placeholder="Photo URL"
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        />

                        <label className="label">Age</label>
                        <input 
                        type="email"
                        value={age}
                        className="input"
                        placeholder="Age"
                        onChange={(e) => setAge(e.target.value)}
                        />

                        <label className="label">Gender</label>
                        <input 
                        type="email"
                        value={gender}
                        className="input"
                        placeholder="Gender"
                        onChange={(e) => setGender(e.target.value)}
                        />

                        <label className="label">About</label>
                        <input 
                        type="email"
                        value={about}
                        className="input"
                        placeholder="About"
                        onChange={(e) => setAbout(e.target.value)}
                        />

                        <p className="text-red-500">{error}</p>
                        <button 
                        className="btn btn-neutral mt-4"
                        onClick={saveProfile}
                        >Save Profile</button>
                    </fieldset>
            </div>

            <UserCard user={{firstName, lastName, photoUrl, age, gender, about}} />
        </div>

        {showToast && <div className="toast toast-top toast-center">
        <div className="alert alert-success">
            <span>Message sent successfully.</span>
        </div>
        </div>}
    </>
  )
}

export default EditProfile