import React from "react";
import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  Typography, 
  Container, 
  Grid, 
  Box, 
  Button 
} from "@mui/material";
import { mentorData } from "../data/mentorData";

function MentorsPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <Container maxWidth="lg">
        <Box sx={{ py: 12 }}>
          <Typography 
            variant="h2" 
            className="text-center text-3xl font-bold text-yellow-500 mb-8"
          >
            Mentors
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {mentorData.map((mentor) => (
              <Grid item key={mentor.id} xs={12} sm={6} md={4} lg={3}>
                <Card className="bg-gray-800 rounded-lg shadow-lg">
                  <CardContent>
                    <Typography variant="h6" className="text-yellow-300 mb-2">
                      {mentor.name}
                    </Typography>
                    <Typography variant="body2">Expertise: {mentor.expertise}</Typography>
                    <Typography variant="body2">Email: {mentor.email}</Typography>
                    <Typography variant="body2">Company: {mentor.company}</Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={`/features/mentor-profile/${mentor.id}`}
                      className="mt-4"
                    >
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default MentorsPage;
