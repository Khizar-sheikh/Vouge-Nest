import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase.config";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { auth } from "../firebase.config";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false); // Flag to toggle between sign-up and sign-in
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");

  const handleAuthentication = async (event) => {
    event.preventDefault();
    console.log('Handling authentication...');
    
    if (!email || !password) {
      setError("Please enter both email and password.");
      console.log('Email or password missing.');
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      console.log('Invalid email format.');
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must contain at least 8 characters and one special character.");
      console.log('Invalid password format.');
      return;
    }

    try {
      if (isSignUp) {
        console.log('Signing up...');
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccess(true);
        setError("");
        console.log('Sign up successful.');
      } else {
        console.log('Signing in...');
        await signInWithEmailAndPassword(auth, email, password);
        setSuccess(true);
        setError("");
        console.log('Sign in successful.');
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email is already registered. Please sign in or use a different email.");
        console.log('Email already in use.');
      }
      setSuccess(false);
      console.log('Error:', error.message);
    }
  };


  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };
  const validatePassword = (password) => {
    const specialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    return password.length >= 7 && specialCharacters.test(password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      {success ? (
        <p className="text-green-500 mb-4">Authentication successful!</p>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-4">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleAuthentication}>
            {isSignUp && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pr-10"
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                </span>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
              <label className="ml-2 text-sm text-gray-700">Remember me</label>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 font-semibold shadow-sm hover:bg-indigo-700 focus:ring focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <p
            className="mt-4 text-sm text-gray-700 cursor-pointer"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </p>
        </>
      )}
    </div>
  );
};

export default Authentication;
