import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width={"300"}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar
            alt="Johnson Sharp"
            src="https://randomuser.me/api/portraits/men/71.jpg"
          />
          <Avatar
            alt="Jack Sharp"
            src="https://randomuser.me/api/portraits/men/73.jpg"
          />
          <Avatar
            alt="Richard Sharp"
            src="https://randomuser.me/api/portraits/men/72.jpg"
          />
          <Avatar
            alt="Ron Sharp"
            src="https://randomuser.me/api/portraits/men/79.jpg"
          />
          <Avatar
            alt="Rein Sharp"
            src="https://randomuser.me/api/portraits/men/75.jpg"
          />
          <Avatar
            alt="John Sharp"
            src="https://randomuser.me/api/portraits/men/76.jpg"
          />
          <Avatar
            alt="Johnson Sharp"
            src="https://randomuser.me/api/portraits/men/71.jpg"
          />
          <Avatar
            alt="Jack Sharp"
            src="https://randomuser.me/api/portraits/men/73.jpg"
          />
          <Avatar
            alt="Richard Sharp"
            src="https://randomuser.me/api/portraits/men/72.jpg"
          />
          <Avatar
            alt="Ron Sharp"
            src="https://randomuser.me/api/portraits/men/79.jpg"
          />
          <Avatar
            alt="Rein Sharp"
            src="https://randomuser.me/api/portraits/men/75.jpg"
          />
          <Avatar
            alt="John Sharp"
            src="https://randomuser.me/api/portraits/men/76.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5} variant="quilted">
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography>Latest Conversations</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
