import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, ListItem, ListItemText, Button, Grid } from '@mui/material';

export default function Shop() {
    const params = useParams();
    const [shopAr, setShopAr] = useState([]);

    useEffect(() => {
        const doApi = async () => {
            const url = "http://fs1.co.il/bus/shop.php";
            const resp = await fetch(url);
            const data = await resp.json();
            console.table(data);
            const filter_ar = data.filter(item => item.cat === params["catname"]);
            setShopAr(filter_ar);
        };

        doApi();
    }, [params]); 

    return (
        <div className="shop-container">
            <nav className="nav-links">
                <Button component={Link} to="/shop/food" variant="outlined" className="nav-button">Food</Button>
                <Button component={Link} to="/shop/clothing" variant="outlined" className="nav-button">Clothing</Button>
                <Button component={Link} to="/shop/animals" variant="outlined" className="nav-button">Animals</Button>
            </nav>    
            <Typography variant="h2" gutterBottom className="shop-title">
                Shop: {params["catname"]}
            </Typography>
            <Grid container spacing={2}>
                {shopAr.map(item => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                        <ListItem className="item">
                            <ListItemText primary={`${item.name} | ${item.price} NIS`} />
                            <Button variant="outlined" className="add-to-cart">Add to Cart</Button>
                        </ListItem>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
