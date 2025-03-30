import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

function SignUp() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = { userName: name, userCity: city, userDOB: dob, userEmail: email, userPassword: password, userRole: role };
    let existingUsers = JSON.parse(localStorage.getItem('myuser')) || [];

    existingUsers.push(newUser);
    localStorage.setItem('myuser', JSON.stringify(existingUsers));

    alert('User registered successfully!');
    setName(''); setCity(''); setDob(''); setEmail(''); setPassword(''); setRole('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <select value={role} onChange={(e) => setRole(e.target.value)} required>
        <option value="">Select Role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
};