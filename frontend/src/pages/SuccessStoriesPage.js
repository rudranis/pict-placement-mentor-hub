import React from "react";
import { 
  Card, 
  CardContent, 
  Typography, 
  Container, 
  Grid, 
  Box, 
  Divider 
} from "@mui/material";

const SuccessStoriesPage = () => {
  const stories = [
    {
      id: 1,
      title: "Landing a Job at Google",
      author: "Aditi Sharma",
      content: "I joined PICT Mentor Hub to improve my interview skills...",
      image: "https://via.placeholder.com/400x200",
    },
    {
      id: 2,
      title: "Switching Careers to Data Science",
      author: "Rahul Deshpande",
      content: "Coming from a non-tech background, I always thought Data Science was out of my reach...",
      image: "https://via.placeholder.com/400x200",
    },
  ];

  return (
    <Container maxWidth="lg" className="p-4">
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>Success Stories</Typography>
        <Divider />
      </Box>
      <Grid container spacing={4} className="mt-4">
        {stories.map((story) => (
          <Grid item key={story.id} xs={12} sm={6} md={4}>
            <Card className="mb-4">
              <CardContent>
                <Typography variant="h6">{story.title}</Typography>
                <Typography variant="body2">By {story.author}</Typography>
                <img src={story.image} alt={story.title} className="w-full h-auto mt-2" />
                <Typography variant="body2" className="mt-2">{story.content}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SuccessStoriesPage;
