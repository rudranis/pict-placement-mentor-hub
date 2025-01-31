import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Grid, Container } from "@mui/material";

function FeaturesPage() {
  const features = [
    {
      title: "Mentor Profiles",
      description: "Connect with experienced mentors for personalized guidance.",
      icon: "👨‍🏫",
      route: "/mentors",
    },
    {
      title: "Interview Questions",
      description: "Access curated questions for your dream companies.",
      icon: "❓",
      route: "/interview-questions",
    },
    {
      title: "Success Stories",
      description: "Get inspired by real stories of placement success.",
      icon: "🌟",
      route: "/success-stories",
    },
    {
      title: "Placement Alerts",
      description: "Stay updated with the latest placement opportunities.",
      icon: "📣",
      route: "/placement-alerts",
    },
  ];

  return (
    <Container maxWidth="lg" className="p-4">
      <Typography variant="h2" className="text-2xl font-bold">Features</Typography>
      <Grid container spacing={4} className="mt-4">
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} md={6}>
            <Link to={feature.route}>
              <Card className="mb-4">
                <CardContent>
                  <Typography variant="h6">
                    {feature.icon} {feature.title}
                  </Typography>
                  <Typography variant="body2">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default FeaturesPage;
