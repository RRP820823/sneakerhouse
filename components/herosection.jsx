import { Box, Typography } from "@mui/material";
import "./index.css"
import Video from "./video/video";
import CallToAction from "./callToAction";
export default function HeroSection({ title }) {
    return (

        <Box sx={{
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
            border: "1px solid red",
            maxWidth: "768px",
            padding: "none"
        }}>
            <Box className="innerBox">
                <Box className="innerBox1">

                    <Box className="typograph-container">

                        <Typography sx={{
                            textAlign: "center",
                            fontFamily: '"Inter-Bold", "Inter", "Inter Placeholder", sans-serif',
                            fontWeight: 700,
                            fontStyle: 'normal',
                            fontSize: '56px',
                            letterSpacing: '-0.03em',
                            lineHeight: '64px',
                            color: '#1c1c1c',
                            textAlign: 'start',
                            textDecoration: 'none',
                            textTransform: 'none',
                            marginBottom: '40px',
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center"
                        }}

                            variant="h3" gutterBottom>
                            {title}
                        </Typography>

                    </Box>


                    <Box className="description-container" >

                        <Typography className="description-text">
                            Empower your team to build, evaluate, and deploy high-performing prompts for LLM-based applications. Pype streamlines collaboration, version control, and performance analysis, helping you deliver reliable AI solutions faster.

                        </Typography>
                    </Box>

                </Box>

            </Box>
            <Video />
            <CallToAction/>
        </Box>
    )
}