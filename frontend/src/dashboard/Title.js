import Typography from '@mui/material/Typography';

export default function Title() {
    return (
        <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Dashboard
              </Typography>
    )
}