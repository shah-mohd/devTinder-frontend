import axios from 'axios'
import Footer from './Footer'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useEffect } from 'react'

const Body = () => {

  const dispatch = useDispatch();

  const fetchUser = async () => {
    try{
        const res = await axios.get(BASE_URL + "/profile/view", {withCredentials: true});
        dispatch(addUser(res.data));
    } catch(err) {
      console.log(err);
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