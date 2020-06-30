import React from 'react';

const User_Data = [ 'test@test.com', 'mike@mail.com' ];

const CheckUser = (props) => {

    const [ email, setEmail ] = useState('');

    const onAuthHandler = (e) => {
        e.preventDefault();
        const result = User_Data.includes(email);
        console.log(result);
    }

    return (
        <form onSubmit={onAuthHandler}>
            <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input type='submit' value='submit' />
        </form>
    )

} 

export default CheckUser;