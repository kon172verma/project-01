import React from 'react';

const Login = () => {
    const [data, setData] = React.useState('');

    const getIdToken = (): string | null => {
        const windowUrl = window.location.search;
        const searchParams = new URLSearchParams(windowUrl);
        const id_token = searchParams.get('id_token');
        console.log('id_token', id_token);
        return id_token;
    };

    const fetchData = async () => {
        const id_token = getIdToken();
        if (!id_token) {
            console.error('id_token not found');
            return;
        }
        const response = await fetch('https://2mkik8qz3b.execute-api.ap-south-1.amazonaws.com/dev/', {
            method: 'POST',
            headers: {
                Authorization: id_token,
            },
        });
        const data = await response.text();
        const parsedData = JSON.parse(data);
        console.log('parsedData', parsedData.body);
        setData(parsedData.body);
    };

    return (
        <>
            You have successfully logged in. Click{' '}
            <a href="https://basic-auth-domain.auth.ap-south-1.amazoncognito.com/logout?client_id=54ml79kkaenp62e3fkcv87l6pb&logout_uri=http%3A%2F%2Flocalhost%3A3000%2Flogout">
                here
            </a>{' '}
            to logout.
            <br />
            <button onClick={fetchData}>Fetch data</button>
            <p>{data}</p>
        </>
    );
};
export default Login;
