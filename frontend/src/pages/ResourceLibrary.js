import React, { useEffect, useState } from "react";
import axios from "axios";

const ResourceLibrary = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/resources/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setResources(response.data);
    };
    fetchResources();
  }, []);

  return (
    <div>
      <h2>Resource Library</h2>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id}>{resource.filename}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceLibrary;
