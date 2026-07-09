import React, { useState } from "react";
import { createJob } from "../service/jobService";

export default function JobForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createJob({ title, description, requirements });
      setMessage("Job created.");
      setTitle("");
      setDescription("");
      setRequirements("");
    } catch (err) {
      setMessage(err?.response?.data || "Error creating job");
    }
  };

  return (
    <div>
      <h3>Create Job</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Requirements</label>
          <textarea value={requirements} onChange={(e) => setRequirements(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
      {message && <p>{String(message)}</p>}
    </div>
  );
}
