const UserConnectionProfile = ({user}) => {
    const {firstName, lastName, photoUrl, age, gender, about} = user;
  return (
        <div className="flex border-2 rounded-sm p-5">
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
    </div>
  )
}

export default UserConnectionProfile;