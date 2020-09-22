import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CircularProgress,
} from "@material-ui/core/";
import CountUp from "react-countup";
import "animate.css/animate.min.css";
import { Info, InfoCaption, InfoTitle } from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import ScrollAnimation from "react-animate-on-scroll";
import HoverVideoPlayer from "react-hover-video-player";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    minWidth: 250,
    minHeight: 360,
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "64%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
  CircularProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50px, -50px)",
  },
}));

const Cards = React.memo(function GalaxyCard({ items, muted, listSize }) {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const classes = useStyles();

  return (
    <>
      {items.slice(0, listSize).map((item) => (
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={item.id}>
          <HoverVideoPlayer
            className={classes.HoverVideoPlayer}
            videoSrc={item.clip ? item.clip.clips.full : null}
            sizingMode="overlay"
            preload="metadata"
            muted={muted}
            unloadVideoOnPaused
            videoStyle={{
              borderRadius: "1rem",
            }}
            pausedOverlay={
              <ScrollAnimation
                animateIn="animate__fadeIn"
                offset={140}
                duration={0.6}
                animateOnce={true}
              >
                <Card className={classes.card}>
                  <CardMedia
                    classes={mediaStyles}
                    image={item.background_image}
                  />
                  <Box py={3} px={2} className={classes.content}>
                    <Info useStyles={useGalaxyInfoStyles}>
                      <InfoTitle>{item.name}</InfoTitle>
                      <InfoCaption>
                        Metacritic:{" "}
                        {
                          <span>
                            <CountUp
                              end={item.metacritic ? item.metacritic : 0}
                              delay={0.4}
                              duration={3}
                            />
                          </span>
                        }
                      </InfoCaption>
                    </Info>
                  </Box>
                </Card>
              </ScrollAnimation>
            }
            loadingOverlay={
              item.clip ? (
                <CircularProgress className={classes.CircularProgress} />
              ) : null
            }
          />
        </Grid>
      ))}
    </>
  );
});

export default Cards;
