import React from 'react';

const SocialIcons = () => {
    const styles = {
      icon: {
        //put the socialicons on the right side of the page at the bottom
        position: "absolute",
        right: "0",
        bottom: "0",
        margin: "10px",
        textDecoration: "none",
        fontSize: "22px",
        padding: "10px",
        transition: "0.2s ease-in",
      },
    };
  
    return (
      <div className="socialIcons" style={styles.socialIcons}>
        <a className="icon" style={styles.icon} href="https://github.com/ricsaw?tab=repositories">
          <i className="fa-brands fa-github" aria-hidden="true" title="Richard Sawh'' GitHub Profile"></i>
        </a>
        <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/richard-sawh-9a39a1176/">
          <i className="fa-brands fa-linkedin" aria-hidden="true" title="Richard Sawh' LinkedIn Profile"></i>
        </a>
      </div>
    );
  };
  
  export default SocialIcons;