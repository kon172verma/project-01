import React from 'react';

const Logout = () => {
    return (
        <>
            You have successfully logged out! Click{' '}
            <a href="https://basic-auth-domain.auth.ap-south-1.amazoncognito.com/login?client_id=54ml79kkaenp62e3fkcv87l6pb&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin">
                here
            </a>{' '}
            to login again!
        </>
    );
};
export default Logout;
