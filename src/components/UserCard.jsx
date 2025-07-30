
const UserCard = ({user}) => {
    console.log(user);
    const {firstName, lastName, photoUrl, age, gender, about} = user;
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
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
            </div>
        </div>
    </div>
  )
}

export default UserCard