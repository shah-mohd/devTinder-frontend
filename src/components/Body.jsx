import axios from 'axios'
import Footer from './Footer'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useEffect } from 'react'

const Body = () => {

  const userData = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUser = async () => {
    if(userData) return;
    try{
        const res = await axios.get(BASE_URL + "/profile/view", {withCredentials: true});
        dispatch(addUser(res?.data));
    } catch(err) {
      console.log("ERROR:", err.response?.status, err.response?.data);
      if(err?.response?.status === 401){
        return navigate("/login");
      }
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Body