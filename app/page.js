'use client'

import Image from "next/image";
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { gql, useQuery } from "@apollo/client"
import HeroSection from "../components/herosection"

export default function Home() {

  const GET_TOPICQUESTIONS = gql`
  query MyQuery {
  hero(where: {id: "cm0rsh31d0d9s07oe0zgog5j1"}) {
    heroTitle ,
    description
  }
}
`

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element,
  window: PropTypes.func,
};

  const { loading, error, data } = useQuery(GET_TOPICQUESTIONS)
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { heroTitle, description } = data?.hero || {}

  console.log("data", heroTitle);
  return (
    
<>
<CssBaseline />
      <HideOnScroll >
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Scroll to hide App bar
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2  ,  alignContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  display: 'flex',
  flex: 'none',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  gap: '98px',
  height: 'min-content',
  justifyContent: 'center',
  overflow: 'hidden',
  padding: '138px 96px 0',
  position: 'relative',
  width: '100%',

  }}>
        <HeroSection title={heroTitle} />
        </Box>
      </Container>

</>
);
}

{/* </footer> */}
// </div>