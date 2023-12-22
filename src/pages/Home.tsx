import React from 'react';

const Home = () => {
    return (
        <>
            This is the home page! Click{' '}
            <a href="https://basic-auth-domain.auth.ap-south-1.amazoncognito.com/login?client_id=54ml79kkaenp62e3fkcv87l6pb&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin">
                here
            </a>{' '}
            to login/register!
        </>
    );
};
export default Home;
