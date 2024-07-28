import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
    const [form, setForm] = useState({ name: '', age: '', email: '', password: '' });
    const [isSignup, setIsSignup] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = `http://localhost:3001/auth/${isSignup ? 'register' : 'login'}`;
        try {
            const { data } = await axios.post(url, form);
            console.log('Auth successful:', data);
            localStorage.setItem('token', data.token); // Guarda el token en el localStorage
        } catch (error) {
            console.error('Auth error:', error);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {isSignup && (
                    <>
                        <input
                            name="name"
                            type="text"
                            onChange={handleChange}
                            placeholder="Name"
                            required
                        />
                        <input
                            name="age"
                            type="number"
                            onChange={handleChange}
                            placeholder="Age"
                            required
                        />
                    </>
                )}
                <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    placeholder="Password"
                    required
                />
                <button type="submit">{isSignup ? 'Register' : 'Login'}</button>
            </form>
            <button onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? 'Switch to Login' : 'Switch to Register'}
            </button>
        </div>
    );
};

export default Auth;
