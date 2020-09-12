import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Card, CardMedia } from '@material-ui/core/';
import CountUp from 'react-countup';

import {
  Info,
  InfoCaption,
  InfoTitle,
} from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '1rem',
    boxShadow: 'none',
    position: 'relative',
    minWidth: 250,
    minHeight: 360,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '64%',
      bottom: 0,
      zIndex: 1,
      background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
  },
}));

const Cards = React.memo(function GalaxyCard({ items }) {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
  const styles = useStyles();
  return (
    <>
      {items.map(item => (
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} key={item.id}>
          <Card className={styles.card}>
            <CardMedia
              classes={mediaStyles}
              image={item.background_image}
            />
            <Box py={3} px={2} className={styles.content}>
              <Info useStyles={useGalaxyInfoStyles}>
                <InfoTitle>{item.name}</InfoTitle>
                <InfoCaption>Metacritic: {<span>
                  <CountUp end={item.metacritic} /> </span>}
                </InfoCaption>
              </Info>
            </Box>
          </Card>
        </Grid>
      ))}
    </>
  );
})
export default Cards