import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addRequest, removeRequest } from "../utils/requestSlice";
import { useEffect } from "react";
import RequestUserCard from "./RequestUserCard";

const Requests = () => {
  const requests = useSelector(store => store.requests);
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + _id, {}, {withCredentials: true});
      dispatch(removeRequest(_id));
    } catch (err) {
      console.log(err);
    }
  }

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {withCredentials: true});
      dispatch(addRequest(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchRequests()
  }, []);

  if(!requests) return;

  if(requests.length === 0) return <h1 className="flex justify-center my-10 text-lg font-semibold">No Request Found!</h1>

  return (
    <div className="my-10">
        <h1 className="text-xl font-semibold">Requests</h1>

        {requests.map((request) => {
            const {_id, firstName, lastName, photoUrl, age, gender, about} = request.fromUserId;
            return (
            <div key={_id} className="flex justify-center my-10">
                <RequestUserCard 
                user={{_id: request._id, firstName, lastName, photoUrl, age, gender, about}}
                handleRequest={reviewRequest}
                />
            </div>
            )
        })}
    </div>
  )

}

export default Requests