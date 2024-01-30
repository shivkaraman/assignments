import React from 'react';

import { useProfiles } from '../hooks/useProfiles';
import './ProfileComponent.css';
import backgroundImg from '../assets/background-img.webp';
import displayPic from '../assets/diaplay-picture.jpg';

const ProfileComponent = () => {
    const { profiles } = useProfiles();
    return (
        <div className='card-container'>
            {profiles.map((profile, index) => (
                <Card
                    profile={profile}
                    key={index}
                />
            ))}
        </div>
    );
};

const Card = ({ profile }) => {
    const returnCount = (count) =>
        count > 1e6
            ? count / 1e6 + 'M'
            : count > 1e3
            ? count / 1e3 + 'K'
            : count;

    return (
        <div className='card'>
            <div className='header'>
                <div className='img-container'>
                    <img
                        className='background-image'
                        src={profile.backgroundImgPath}
                        alt='background-image'
                    />
                    <img
                        className='display-picture'
                        src={profile.displayPicPath}
                        alt='display-picture'
                    />
                </div>
                <div className='personal-info'>
                    <h2>{profile.name}</h2>
                    <p>{profile.city}</p>
                </div>
            </div>
            <hr />
            <div className='body'>
                <div className='followers'>
                    <h3>{returnCount(profile.followers)}</h3>
                    <p>Followers</p>
                </div>
                <div className='likes'>
                    <h3>{returnCount(profile.likes)}</h3>
                    <p>Likes</p>
                </div>
                <div className='photos'>
                    <h3>{returnCount(profile.photos)}</h3>
                    <p>Photos</p>
                </div>
            </div>
        </div>
    );
};
export default ProfileComponent;
