import { useState } from 'react';

const Signup = ({backend_url}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

//   const backend_url = "http://localhost:5000";

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backend_url}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Signup successful:', data);
        // You can redirect to login page or dashboard
        // navigate("/login");
        alert('Signup successful! Please login.');
      } else {
        console.error('Signup failed:', data.message);
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-lg font-semibold transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-400 text-center mt-6">
          Already have an account? <a href="/login" className="text-yellow-400 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
