import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({user}) => {
    const {_id, firstName, lastName, photoUrl, age, gender, about} = user;

    const dispatch = useDispatch();

    const handleSendRequest = async (status, userId) => {
      try{
        const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId,
          {},
          {withCredentials: true}
        );
        dispatch(removeUserFromFeed(userId));
      } catch(err) {
        console.log(err);
      }

    }

  return (
    <div className="card bg-base-100 w-60 shadow-sm">
        <figure>
            <img
            src={photoUrl}
            alt="feedUser" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{firstName + " " + lastName}</h2>
            {about && <p>{about}</p>}
            {age && gender && <p>{age + ", " + gender}</p>}
            <div className="card-actions justify-center flex-nowrap mx-4">
            <button 
            className="btn btn-primary" onClick={() => handleSendRequest("ignored", _id)}>Ignore</button>
            <button className="btn btn-secondary" onClick={() => handleSendRequest("interested", _id)}>Interested</button>
            </div>
        </div>
    </div>
  )
}

export default UserCard