import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Preloader/preloader";

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
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt='akae'/>
                <div>{props.profile.contacts.vk}</div>
            </div>

        </div>
    )
}

export default ProfileInfo;