import React, { useState } from "react";
import { createEmployeeProfile } from "../service/employeeService";

export default function EmployeeForm() {
  const [fullName, setFullName] = useState("");
  const [resume, setResume] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEmployeeProfile({ full_name: fullName, resume, skills, experience });
      setMessage("Employee profile created.");
    } catch (err) {
      setMessage(err?.response?.data || "Error creating employee profile");
    }
  };

  return (
    <div>
      <h3>Create Employee Profile</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full name</label>
          <input value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div>
          <label>Resume (URL or text)</label>
          <input value={resume} onChange={(e) => setResume(e.target.value)} />
        </div>
        <div>
          <label>Skills</label>
          <textarea value={skills} onChange={(e) => setSkills(e.target.value)} />
        </div>
        <div>
          <label>Experience</label>
          <textarea value={experience} onChange={(e) => setExperience(e.target.value)} />
        </div>
        <button type="submit">Save</button>
      </form>
      {message && <p>{String(message)}</p>}
    </div>
  );
}
