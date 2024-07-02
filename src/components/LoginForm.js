import React from 'react';

const LoginForm = () => (
    <div>
        <h2>Login</h2>
        <form>
            <div>
                <label>Email</label>
                <input type="email" name="email" required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
);

export default LoginForm;