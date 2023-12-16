import React, { useState } from "react";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const [emailBorderColor, setEmailBorderColor] = useState("");
  const [passwordBorderColor, setPasswordBorderColor] = useState("");
  const [confirmPasswordBorderColor, setConfirmPasswordBorderColor] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(/^\S+@\S+\.\S+$/.test(value) && value.trim() !== "");
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(value.length >= 8 && value.trim() !== "");
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordValid(value === password && value.trim() !== "");
  };

  const handleInputFocus = (setState) => () => {
    // Set the border color to blue when the input is focused
    setState("blue");
  };

  const handleInputBlur = (setState, isValid) => () => {
    // Set the border color based on validation status
    setState(isValid ? "valid" : "invalid");
  };

//   const handleInputChange = (setState) => () => {
//     // Set the border color to blue when typing
//     setState("blue");
//   };

  const handleSubmit = () => {
    if (email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
      alert("Form cannot be submitted. Please fill in all fields.");
      // Set border color to red for empty fields
      setEmailBorderColor(email.trim() === "" ? "invalid" : "input");
      setPasswordBorderColor(password.trim() === "" ? "invalid" : "input");
      setConfirmPasswordBorderColor(confirmPassword.trim() === "" ? "invalid" : "input");
      return;
    }

    if (emailValid && passwordValid && confirmPasswordValid) {
      alert("Form submitted successfully");
      // Reset the form
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      // Reset border colors
      setEmailBorderColor("");
      setPasswordBorderColor("");
      setConfirmPasswordBorderColor("");
    } else {
      alert("Form cannot be submitted");
    }
  };

  return (
    <div className="form">
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Enter your Email"
          onChange={handleEmailChange}
          onFocus={handleInputFocus(setEmailBorderColor)}
          onBlur={handleInputBlur(setEmailBorderColor, emailValid)}
        //   onInput={handleInputChange(setEmailBorderColor)}
          className={`input ${emailBorderColor}`}
        />
        {(!emailValid || email.trim()==="") && <div className="error">Invalid email format</div>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Enter your Password"
          onChange={handlePasswordChange}
          onFocus={handleInputFocus(setPasswordBorderColor)}
          onBlur={handleInputBlur(setPasswordBorderColor, passwordValid)}
        //   onInput={handleInputChange(setPasswordBorderColor)}
          className={`input ${passwordBorderColor}`}
        />
        {(!passwordValid || password.trim()==="") && (
          <div className="error">Password must be at least 8 characters</div>
        )}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm your Password"
          onChange={handleConfirmPasswordChange}
          onFocus={handleInputFocus(setConfirmPasswordBorderColor)}
          onBlur={handleInputBlur(
            setConfirmPasswordBorderColor,
            confirmPasswordValid
          )}
        //   onInput={handleInputChange(setConfirmPasswordBorderColor)}
          className={`input ${confirmPasswordBorderColor}`}
        />
        {(!confirmPasswordValid || confirmPassword.trim()==="") && (
          <div className="error">Passwords do not match</div>
        )}

        <button type="button" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
