import React, { useState } from 'react';
import { Button, Container } from '@mui/material';

export default function GalleryHw() {
    const [counter, setCounter] = useState(0);
    const imgArr = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
    
    const handleNext = () => {
        setCounter((prevCounter) => (prevCounter + 1) % imgArr.length);
    };

    const handleBack = () => {
        setCounter((prevCounter) => (prevCounter - 1 + imgArr.length) % imgArr.length);
    };

    const imgStyle = {
        width: '200px', // Adjust width as needed
        height: '200px', // Adjust height as needed
        objectFit: 'cover' // Adjust how images fit within the box (cover, contain, etc.)
    };
    
    return (
        <Container className='text-center'>
            <img 
                src={`/Images/${imgArr[counter]}`} 
                alt="gallery" 
                className='mx-auto mt-5 mb-3 d-block rounded border border-dark shadow-lg p-1'
                style={imgStyle} 
            />
            <Button onClick={handleBack} variant="contained" color="error" className='mx-2 rounded border border-dark shadow-lg p-2'>back</Button>
            <Button onClick={handleNext} variant="contained" color="success" className='mx-2 rounded border border-dark shadow-lg p-2'>next</Button>
        </Container>
    );
}
