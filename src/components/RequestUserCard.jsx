const RequestUserCard = ({user, handleRequest}) => {
    const {_id, firstName, lastName, photoUrl, age, gender, about} = user;

  return (
        <div className="flex items-center justify-between border-2 rounded-sm p-5">
        <div className="w-32">
            <img
            className=""
            src={photoUrl}
            alt="feedUser" />
        </div>
        <div className="">
            <h2 className="card-title">{firstName + " " + lastName}</h2>
            {about && <p>{about}</p>}
            {age && gender && <p>{age + ", " + gender}</p>}
        </div>

        <div className="">
            <button className="btn btn-soft btn-primary mx-2" onClick={() => handleRequest("rejected", _id)}>Reject</button>
            <button className="btn btn-soft btn-secondary mx-2" onClick={() => handleRequest("accepted", _id)}>Accept</button>
            
        </div>

    </div>
  )
}

export default RequestUserCard;