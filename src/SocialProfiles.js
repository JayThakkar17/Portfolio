import React, { Component } from 'react';
import SOCIAL_PROFILES from "./assets/data/socialProfiles";

class SocialProfile extends Component {
    render() {
        const { link, image } = this.props.socialProfile;
        return (
            <div style={{ display: 'inline-block', margin: 10 }}>
                <a href={link}><img src={image} alt='social-profile' style={{ width: 35, height: 35 }} /></a>
            </div>
        )
    }
}

export default class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h2>Connect With Me</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILES => {
                            return <SocialProfile key={SOCIAL_PROFILES.id} socialProfile=
                                {SOCIAL_PROFILES} />
                        })
                    }
                </div>
            </div>
        )
    }
}
