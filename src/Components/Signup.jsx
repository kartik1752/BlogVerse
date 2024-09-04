// Signup.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to clear form fields
  const clearFields = () => {
    setName('');
    setEmail('');
    setPassword('');
    setError('');
  };

  // Clear fields when the component mounts
  useEffect(() => {
    clearFields();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    const formData = { name, email, password };

    try {
      const response = await fetch('http://localhost:3000/blog/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status); // Log the response status

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data);
        clearFields(); // Clear form fields after successful signup
        navigate(`/user/${data.user?.name || name}`); // Navigate using backend data or form name
      } else {
        const errorData = await response.json();
        console.error('Signup failed:', errorData.message);
        setError(errorData.message || 'Signup failed, please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit} autoComplete="off">
            <button
              type="button"
              onClick={() => {
                clearFields();
                document.getElementById('my_modal_4').close();
              }}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">SignUp</h3>

            {/* Display error message */}
            {error && <p className="text-red-500">{error}</p>}

            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-80 py-1 px-3 border rounded-md outline non"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="off"
              />
            </div>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 py-1 px-3 border rounded-md outline non"
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
                className="w-80 py-1 px-3 border rounded-md outline non"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>

            <div className="mt-4">
              <button type="submit" className="bg-blue-400 text-white rounded-md px-3 py-1">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Signup;
