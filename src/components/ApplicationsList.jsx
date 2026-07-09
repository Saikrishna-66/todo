import React, { useEffect, useState } from "react";
import { listMyApplications } from "../service/applicationService";

export default function ApplicationsList() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await listMyApplications();
        setApplications(res.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h3>My Applications</h3>
      {applications.length === 0 && <p>No applications yet.</p>}
      <ul>
        {applications.map((a) => (
          <li key={a.id}>
            {a.job_title || a.job?.title || "Job"} — {a.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
