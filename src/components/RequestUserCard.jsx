const RequestUserCard = ({user, handleRequest}) => {
    const {_id, firstName, lastName, photoUrl, age, gender, about} = user;

  return (
        <div className="flex items-center justify-between border-1 border-gray-100 shadow-sm rounded-xl p-4 min-w-full md:min-w-1/2 md:max-w-1/2 h-3/12">
        <div className="w-30 md:w-48 overflow-hidden rounded-2xl">
            <img
            className="w-full h-20 md:h-48 object-cover"
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