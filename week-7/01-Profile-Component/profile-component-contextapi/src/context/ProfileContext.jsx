import { createContext, useState } from 'react';

export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
    const [profiles, setProfiles] = useState([
        {
            name: 'Shivkaraman',
            city: 'Mysore, India',
            followers: 80000,
            likes: 803000,
            photos: 1400,
            backgroundImgPath: '/src/assets/background-img.webp',
            displayPicPath: '/src/assets/diaplay-picture.jpg',
        },
    ]);

    return (
        <ProfileContext.Provider value={{ profiles, setProfiles }}>
            {children}
        </ProfileContext.Provider>
    );
}
