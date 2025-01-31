import React from 'react';
import { Card, CardContent, Typography, Container, Grid, Box } from "@mui/material";

const PlacementAlerts = () => {
    const alerts = [
        { id: 1, title: "Job Opening at XYZ Company", description: "Looking for software engineers with 2+ years of experience." },
        { id: 2, title: "Internship Opportunity at ABC Corp", description: "Internship for fresh graduates in marketing." },
    ];

    return (
        <Container maxWidth="lg" sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                <Typography variant="h4" component="h1">Placement Alerts</Typography>
            </Box>
            <Grid container spacing={4}>
                {alerts.map(alert => (
                    <Grid item key={alert.id} xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{alert.title}</Typography>
                                <Typography variant="body2">{alert.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PlacementAlerts;
