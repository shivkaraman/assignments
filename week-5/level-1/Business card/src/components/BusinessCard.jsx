import React from 'react';
import './BusinessCard.css';

const BusinessCard = (props) => {
    return (
        <div className='business-card'>
            <h2 className='name'>{props.name}</h2>
            <p className='description'>{props.description}</p>
            <div className='interests'>
                <h4>Interests</h4>
                <div className='interest-list'>
                    {props.interests.map((interest) => (
                        <p>{interest}</p>
                    ))}
                </div>
            </div>
            <div className='social-handles'>
                <a
                    href={props.linekdin}
                    target='_blank'
                >
                    Linkedin
                </a>
                <a
                    href={props.twitter}
                    target='_blank'
                >
                    Twitter
                </a>
                {props.otherSocialHandles &&
                    Object.keys(props.otherSocialHandles).map((key) => (
                        <a
                            target='_blank'
                            href={props.otherSocialHandles[key]}
                        >
                            {key}
                        </a>
                    ))}
            </div>
        </div>
    );
};

export default BusinessCard;
