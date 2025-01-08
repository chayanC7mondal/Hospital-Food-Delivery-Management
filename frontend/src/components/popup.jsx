import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

const Popup = ({ message, setShowPopup, showPopup }) => {
  const vertical = "top";
  const horizontal = "right";

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowPopup(false);
  };

  return (
    <Snackbar
      open={showPopup}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical, horizontal }}
      key={vertical + horizontal}
    >
      {message === "Done Successfully" ? (
        <MuiAlert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {message}
        </MuiAlert>
      ) : (
        <MuiAlert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message}
        </MuiAlert>
      )}
    </Snackbar>
  );
};

export default Popup;
