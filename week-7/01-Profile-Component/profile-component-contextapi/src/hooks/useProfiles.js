import { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';

export const useProfiles = () => {
    const profileData = useContext(ProfileContext);

    if (profileData === undefined) {
        throw new Error(
            'useProfiles should be used inside ProfileContextProvider'
        );
    }

    return profileData;
};
