import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to clear form fields
  const clearFields = () => {
    setEmail('');
    setPassword('');
    setError('');
  };

  useEffect(() => {
    clearFields();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    const formData = { email, password };

    try {
      const response = await fetch('http://localhost:3000/blog/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        // Clear form fields and navigate to the desired page
        clearFields();
        navigate(`/user/${data.name}`); // Navigate to a desired page on successful login
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed, please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            <button
              type="button"
              onClick={() => document.getElementById('my_modal_3').close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>

            {/* Display error message */}
            {error && <p className="text-red-500">{error}</p>}

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 py-1 px-3 border rounded-md outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-80 py-1 px-3 border rounded-md outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="off"
              />
            </div>

            <div className="flex justify-around mt-4">
              <button type="submit" className="bg-blue-400 text-white rounded-md px-3 py-1">
                Login
              </button>
              <p>
                Not registered?{' '}
                <span className="underline text-blue-500 cursor-pointer">Signup</span>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
