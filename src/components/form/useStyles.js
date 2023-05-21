export const useStyles = () => {
  return {
    inputStyle: {
      fontSize: "16px",
      fontFamily: "poppins-regular",
    },
    buttonStyle: {
      width: "100%",
      background: "#38CC8C",
      margin: "15px 0",
      padding: "10px 0",
      boxShadow: "0px 10px 6px rgba(0, 0, 0, 0.2)",
      "&:hover": {
        background: "#38CC8C",
        boxShadow: "0px 10px 8px rgba(0, 0, 0, 0.5)",
      },
    },
  };
};
