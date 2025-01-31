import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";

const Profile = () => {
  const [profile, setProfile] = useState({ bio: "", skills: "", experience: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/profiles/1", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(response.data);
    };
    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    const token = localStorage.getItem("token");
    await axios.put("http://localhost:5000/profiles/1", profile, {
      headers: { Authorization: `Bearer ${token}` },
    });
    alert("Profile updated successfully!");
  };

  return (
    <Card className="p-4">
      <CardContent>
        <Typography variant="h4" component="h2" gutterBottom>
          Profile
        </Typography>
        <TextField
          label="Bio"
          multiline
          rows={4}
          value={profile.bio}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Skills"
          value={profile.skills}
          onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Experience"
          value={profile.experience}
          onChange={(e) => setProfile({ ...profile, experience: e.target.value })}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleUpdate}>
          Update Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default Profile;
