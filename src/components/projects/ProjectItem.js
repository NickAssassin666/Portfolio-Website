import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const ProjectItem = (props) => {
  return (
    <div className=" col-lg-4  col-md-6 col-sm-12 project-container">
      <a href={props.link}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={props.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.technology}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
};
export default ProjectItem;
