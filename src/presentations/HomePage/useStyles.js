export const useStyles = () => {
  return {
    buttonStyle: {
      width: "100%",
      background: "#5d54a3",
      marginBottom: "30px",
      padding: "15px 0",
      boxShadow: "0px 10px 6px rgba(0, 0, 0, 0.2)",
      "&:hover": {
        background: "#5d54a3",
        boxShadow: "0px 10px 8px rgba(0, 0, 0, 0.5)",
      },
    },
  };
};
