import {
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

export default function TaskCard(props) {
  return (
    <Card style={{ width: "100%"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.data.description}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
