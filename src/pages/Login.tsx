import React from 'react';

const Login = () => {
    return (
        <>
            You have successfully logged in. Click{' '}
            <a href="https://basic-auth-domain.auth.ap-south-1.amazoncognito.com/logout?client_id=54ml79kkaenp62e3fkcv87l6pb&logout_uri=http%3A%2F%2Flocalhost%3A3000%2Flogout">
                here
            </a>{' '}
            to logout.
        </>
    );
};
export default Login;
