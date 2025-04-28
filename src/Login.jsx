import { useState } from 'react';

const Login = ({backend_url}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const backend_url = "http://localhost:5000";

  const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`${backend_url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Login successful:', data);
      // You can redirect or save token here
    } else {
      console.error('Login failed:', data.message);
      alert(data.message || 'Login failed');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    alert('Something went wrong');
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-lg font-semibold transition"
          >
            Log In
          </button>
        </form>
        <p className="text-gray-400 text-center mt-6">
          Don't have an account? <a href="/signup" className="text-teal-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
