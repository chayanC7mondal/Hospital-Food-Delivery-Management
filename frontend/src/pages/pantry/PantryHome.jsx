import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const PantryHome = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "20px" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Pantry Management Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Total Meals Prepared
              </Typography>
              <Typography variant="h4" color="green">
                120 {/* Replace with dynamic data */}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Meals Pending Delivery
              </Typography>
              <Typography variant="h4" color="green">
                20 {/* Replace with dynamic data */}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Total Delivery Personnel
              </Typography>
              <Typography variant="h4" color="green">
                5 {/* Replace with dynamic data */}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Total Food Preparation Tasks
              </Typography>
              <Typography variant="h4" color="green">
                30 {/* Replace with dynamic data */}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PantryHome;
