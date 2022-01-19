import React, { useEffect, useState } from 'react';
import { notification } from 'antd';
import { Spinner, CustomButton, CardDiv, ShopifyH1, CustomDatePicker } from '../StyledComponents.js/HomeSC';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import moment from 'moment';

export const Home = () => {
    const [nasaData, setNasaData] = useState();
    const [loading, setLoading] = useState(false);
    const [liked, setLiked] = useState(false);
    const [date, setDate] = useState();

    useEffect(() => {
        const getNasa = async () => {
            setLoading(true);
            try {
                let requestString = date ? `https://api.nasa.gov/planetary/apod?api_key=wjb5JpThDoG1dCgQgex223I3eLDYxsN0TNYtWHUx&date=${date}` : 
                    `https://api.nasa.gov/planetary/apod?api_key=wjb5JpThDoG1dCgQgex223I3eLDYxsN0TNYtWHUx`;
                const response = await fetch(requestString);   
                setLoading(false);
                if (!response.ok || !response) {
                    throw new Error(response.statusText);
                }
                const responseData = await response.json();
                setNasaData(responseData);
            } catch (err) {
                console.log(err.message);
                setLoading(false);
                notification.error({
                    message: 'Data Failed to Fetch!',
                    description: err.message,
                });
            }
        }
        getNasa();
    }, [date]);

    const changeDate = (date, dateString) => {
        setDate(dateString);
    }

    const  disabledDate = (current) => {
        // Can not select days after today
        return current && current > moment().endOf('day');
      }
    
    return (
        <>
            <ShopifyH1>Shopify NASA Intern Challenge: Keegan Kavanagh</ShopifyH1>
            <CardDiv>
                <Card sx={{ width: 500 }}>
                    <Spinner spinning={loading}>
                        <CardMedia
                            component="img"
                            height="350"
                            image={nasaData && nasaData.hdurl}
                            alt="Nasa Image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {nasaData && nasaData.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {nasaData && nasaData.explanation}
                            </Typography>
                            <br></br>
                            <Typography variant="body3" color="text.secondary">
                                {nasaData && 'Date: ' + nasaData.date}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <CustomButton onClick={() => setLiked(!liked)}>{liked ? 'Unlike' : 'Like'}</CustomButton>
                            <CustomDatePicker onChange={changeDate} disabledDate={disabledDate}/>
                        </CardActions>
                    </Spinner>
                </Card>
            </CardDiv>
            
        </>
    );
}