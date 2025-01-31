import React from 'react';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';

const InterviewQuestions = () => {
    const questions = [
        {
            id: 1,
            question: "What is the difference between var, let, and const?",
            answer: "var is function-scoped, let and const are block-scoped. const cannot be reassigned.",
        },
        {
            id: 2,
            question: "Explain the concept of closures in JavaScript.",
            answer: "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.",
        },
        {
            id: 3,
            question: "What is a promise in JavaScript?",
            answer: "A promise is an object that represents the eventual completion or failure of an asynchronous operation.",
        },
    ];

    return (
        <Container maxWidth="lg" sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Interview Questions
            </Typography>
            <Grid container spacing={4}>
                {questions.map((q) => (
                    <Grid item key={q.id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{q.question}</Typography>
                                <Typography variant="body2">{q.answer}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default InterviewQuestions;
