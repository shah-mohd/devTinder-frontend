import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";


const Login = () => {

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLogInForm, setIsLogInform] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try{
      const res = await axios.post(BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch(err) {
      setError(err?.response?.data  || "Something went wrong!")
    }
  }

  const handleSignUp = async () => {
    try {
      const res = await axios.post(BASE_URL + "/signup", 
        {firstName, lastName, emailId, password},
        {withCredentials: true}
      );
      dispatch(addUser(res?.data?.data));
      navigate("/profile");
    } catch (err) {
      setError(err?.response?.data  || "Something went wrong!")
      console.log(err);
    }
  }


  return (
    <div className="flex justify-center my-10">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">{isLogInForm ? "Login" : "Signup"}</legend>

                {!isLogInForm && <>
                <label className="label">First Name</label>
                <input 
                type="text"
                value={firstName}
                className="input"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                />
                
                <label className="label">Last Name</label>
                <input 
                type="text"
                value={lastName}
                className="input"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                />
                </>}

                <label className="label">Email</label>
                <input 
                type="email"
                value={emailId}
                className="input"
                placeholder="Email"
                onChange={(e) => setEmailId(e.target.value)}
                />

                <label className="label">Password</label>
                <input
                type="password"
                value={password}
                className="input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                />

                <p className="text-red-500">{error}</p>
                <button 
                className="btn btn-neutral mt-4"
                onClick={isLogInForm ? handleLogin : handleSignUp}
                >Login</button>

                <p 
                className="text-sm font-semibold my-4 cursor-pointer"
                onClick={() => setIsLogInform(value => !value)}
                >
                  {isLogInForm 
                    ? "New User! Signup here!" 
                    : "Existing User? Login Here!"
                  }
                  </p>

            </fieldset>
    </div>
  )
}

export default Login