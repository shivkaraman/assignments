import React from 'react';
import { profileAtom } from '../atoms/profileAtom';
import { FaTwitter, FaRegBuilding } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { useRecoilValue } from 'recoil';

import './ProfileCard.css';

const ProfileCard = () => {
    const profileInfo = useRecoilValue(profileAtom);

    return (
        <div className='github-card'>
            <div className='dp-container'>
                <img src={profileInfo.avatar_url}></img>
            </div>
            <div className='header'>
                <h2>{profileInfo.name}</h2>
                <p style={{ paddingBottom: '10px' }}>{profileInfo.login}</p>
                <h3>{profileInfo.bio}</h3>
                <p>
                    {profileInfo.followers} followers . {profileInfo.following}{' '}
                    following
                </p>
            </div>
            <div className='more-details'>
                {profileInfo.company?.length > 0 && (
                    <p>
                        <FaRegBuilding />
                        {profileInfo.company}
                    </p>
                )}
                {profileInfo.location?.length > 0 && (
                    <p>
                        <FaLocationDot />
                        {profileInfo.location}
                    </p>
                )}
                {profileInfo.email?.length > 0 && <p>{profileInfo.email}</p>}
                {profileInfo.twitter_username?.length > 0 && (
                    <p>
                        <FaTwitter />
                        {profileInfo.twitter_username}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProfileCard;
