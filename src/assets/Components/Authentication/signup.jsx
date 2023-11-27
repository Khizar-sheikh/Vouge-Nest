import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../../firebase.config";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters long.");
      return;
    }

    if (name.trim() === "") {
      setError("Please enter your name.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed up:", user);
        setSignedUp(true); // Update sign-up success state
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // Render form or user's name based on sign-up success
  if (signedUp) {
    return (
      <div className="mx-auto my-auto max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          Thank you for signing up, {name}!
        </h2>
        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 mb-4 border rounded-sm focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 mb-4 border rounded-sm focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 mb-4 border rounded-sm focus:outline-none focus:border-blue-500"
          required
          autoComplete="current password"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-sm hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpForm;
