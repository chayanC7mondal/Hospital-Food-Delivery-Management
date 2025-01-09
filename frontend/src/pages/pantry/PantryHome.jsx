import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const AdminHomePage = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "20px" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Food Manager Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Total Patients
              </Typography>
              <Typography variant="h4" color="green">
                10 {/* Replace with dynamic data */}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Total Diet Charts
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
                Total Meals
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
                Meals Prepared & Delivered
              </Typography>
              <Typography variant="h4" color="green">
                100 {/* Replace with dynamic data */}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminHomePage;
