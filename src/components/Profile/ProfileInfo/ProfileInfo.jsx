import React from 'react';
import Preloader from "../../Preloader/preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
                    alt='ava'/>
            </div>
            <div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    )
}

export default ProfileInfo;