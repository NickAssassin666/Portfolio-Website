import image1 from "../../assets/img/project-sample.jpg";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const ProjectItem = (props) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image1}
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
    </div>
  );
};
export default ProjectItem;
