import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const styles = {
    container: {
      textAlign: "center",
      marginTop: "100px",
    },
    title: {
      fontSize: "48px",
      marginBottom: "20px",
    },
    description: {
      fontSize: "24px",
      marginBottom: "30px",
    },
    link: {
      textDecoration: "none",
      color: "#007bff",
      fontSize: "18px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.description}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" style={styles.link}>
        Go back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
