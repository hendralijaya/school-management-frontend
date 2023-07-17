import { useState } from "react";
import Head from "next/head";
import InputField from "@/components/InputField";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  // Handle input change events
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data to send to the backend
    const formData = {
      name,
      email,
      password,
      password_confirmation: confirmPassword,
    };

    try {
      // Make a POST request to the backend API endpoint
      const response = await fetch("http://localhost:8000/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(JSON.stringify(formData));

      // Handle the response from the server
      if (response.ok) {
        // Form submission successful
        console.log("Form submitted successfully!");
      } else {
        // Form submission failed
        console.log("Form submission failed.");
      }
    } catch (error) {
      console.error("Error occurred during form submission:", error);
    }
  };

  return (
    <>
      {/* Include any necessary external scripts here */}
      {/* For example, to include Font Awesome */}
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>

      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          {/* Name input */}
          <InputField label="Name" type="text" id="form2Example1" value={name} onChange={handleNameChange} />

          {/* Email input */}
          <InputField label="Email address" type="email" id="form2Example2" value={email} onChange={handleEmailChange} />

          {/* Password input */}
          <InputField label="Password" type="password" id="form2Example3" value={password} onChange={handlePasswordChange} />

          {/* Confirmation Password input */}
          <InputField label="Confirm Password" type="password" id="form2Example4" value={confirmPassword} onChange={handleConfirmPasswordChange} />

          {/* 2 column grid layout for inline styling */}
          <div className="flex flex-row items-center mb-4">
            <div className="flex-1">
              {/* Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox rounded border-gray-300 text-blue-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  id="form2Example31"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label htmlFor="form2Example31" className="ml-2 block text-gray-700 text-sm font-medium">
                  Remember me
                </label>
              </div>
            </div>

            <div className="flex items-center">
              {/* Simple link */}
              <a href="#!" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit button */}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4">
            Sign Up
          </button>

          {/* Register buttons */}
          <div className="text-center">
            <p>
              Already a member?{" "}
              <a href="#!" className="text-blue-500 hover:underline">
                Sign In
              </a>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
