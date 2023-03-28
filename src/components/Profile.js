import Image from "./Image";

const Profile = (props) => {
    const {name, age} = props
    return (
        <div className="profile container">
            <Image width={"130px"} src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}></Image>
            <div className="profile__box">
                <h4 className="profile__title">{name}</h4>
                <p className="profile__text">{age}</p>
            </div>
        </div>
    )
}

export default Profile
