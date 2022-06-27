import React, { useState } from "react";
import axios from "axios";
import {
  Stack,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";

function CheckWeather() {
  
  const [city, setCity] = useState("");
  const [result, setresult] = useState("");

  const changeHandler = (e) => {
    setCity(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    try{
        axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
      )
      .then((res) => {
        const kelvin = res.data.main.temp;
        const celsius = Math.round(kelvin - 273.15);
        setresult(`Temperature at ${city} - ${celsius}°C `);
      });
    }
    catch(error){
        console.log(error)
    }
  };

  return (
    <Stack>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Weather Application
          </Typography>
          <TextField
            label="Enter Here"
            variant="outlined"
            onChange={changeHandler}
            size="small"
          />
          <br /><br />
          <Button size="medium" variant="contained" onClick={submitHandler}>
            Get Temperature
          </Button>
          <Stack component="h5">
            {result ? result : "Please Enter a valid city name"}
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default CheckWeather;