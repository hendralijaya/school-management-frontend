import { useState } from "react";
import Head from "next/head";
import InputField from "@/components/InputField";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      password,
    };

    try {
      // Perform form submission logic, such as sending the email and password to the server
      const response = await fetch("http://localhost:8000/api/v1/auth/login", {
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
        const jsonData = await response.json();
        console.log("Form submission successful:", jsonData);
      } else {
        // Form submission failed
        console.log("Form submission failed.");
      }
    } catch (error) {
      console.error("Error occurred during form submission:", error);
    }

    // Reset the email and password fields
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <InputField label="Email address" type="email" id="form2Example1" value={email} onChange={handleEmailChange} />
          <InputField label="Password" type="password" id="form2Example2" value={password} onChange={handlePasswordChange} />

          <div className="flex flex-row items-center mb-4">
            <div className="flex-1">
              <div className="flex items-center">
                <input type="checkbox" className="form-checkbox rounded border-gray-300 text-blue-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" id="form2Example31" />
                <label htmlFor="form2Example31" className="ml-2 block text-gray-700 text-sm font-medium">
                  Remember me
                </label>
              </div>
            </div>

            <div className="flex items-center">
              <a href="#!" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4">
            Sign in
          </button>

          <div className="text-center">
            <p>
              Not a member?{" "}
              <a href="#!" className="text-blue-500 hover:underline">
                Register
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

export default SignInPage;
