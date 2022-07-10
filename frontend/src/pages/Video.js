import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'

export default function Video(props) {
    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper 
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 720,
                }}
            >   <div style={{position: "relative", height: "100%"}}>
                    <iframe
                        src={`https://www.youtube.com/embed/${props.id}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}
                    />
                </div>
            </Paper>
        </Grid>
    );
}