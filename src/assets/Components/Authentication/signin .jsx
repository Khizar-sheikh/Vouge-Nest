import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { auth } from "./../../../../firebase.config";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [SignedIn, setSignedIn] = useState(false);

  async function handleSignIn(e) {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed in:", user);
      setEmail(""); // Clear email input
      setPassword(""); // Clear password input
      setSignedIn(true);
    } catch (error) {
      // Handle errors
      const errorMessage = error.message;
      setError(errorMessage);
    }
  }
  if (SignedIn) {
    return (
      <div className="mx-auto flex items-center my-auto max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        <div>
          {" "}
          <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md p-6 my-6 h-3/4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSignIn}>
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
          autoComplete="current Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 mb-4 border rounded-sm focus:outline-none focus:border-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-sm hover:bg-blue-600 transition duration-300"
        >
          Sign In
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="mt-4 text-center">
        <p>
          Not have an account?
          <Link to="/signup" className="text-blue-500">
            <b>Sign up</b>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignInForm;
