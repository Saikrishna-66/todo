import React, { useState } from "react";
import { createCompanyProfile, getMyCompanyProfile } from "../service/companyService";

export default function CompanyForm() {
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCompanyProfile({ company_name: companyName, description });
      setMessage("Company profile created.");
    } catch (err) {
      setMessage(err?.response?.data || "Error creating company profile");
    }
  };

  return (
    <div>
      <h3>Create Company Profile</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company name</label>
          <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Save</button>
      </form>
      {message && <p>{String(message)}</p>}
    </div>
  );
}
