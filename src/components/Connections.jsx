import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import UserConnectionProfile from "./UserConnectionProfile";

const Connections = () => {
    const connections = useSelector(store => store.connection);
    const dispatch = useDispatch();
    

    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connections", {withCredentials: true});
            dispatch(addConnections(res?.data?.data))
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchConnections();
    }, []);

    if(!connections) return;

    if(connections.length === 0){
        return (
            <div>
                <h1>No Connection</h1>
            </div>
        )
    }

  return (
    <div className="my-10">
        <h1 className="flex justify-center text-xl font-semibold">Your Connections</h1>

        {connections.map((connection) => {
            const {_id} = connection;
            return (
            <div key={_id} className="flex justify-center my-10">
                <UserConnectionProfile user={connection}/>
            </div>
            )
        })}
    </div>
  )
}

export default Connections;