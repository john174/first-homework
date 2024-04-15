import React, { useEffect, useState } from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

export default function ApiHw() {
  const [vip_ar, setVipAr] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const url = "http://fs1.co.il/bus/vip.php";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setVipAr(data);
  };

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        List of VIP
      </Typography>
      <Grid container spacing={2}>
        {vip_ar.map((item) => (
          <Grid key={item.name} item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="440"
                image={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="div">
                  Money: {item.worth}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="div">
                  Company: {item.source}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
