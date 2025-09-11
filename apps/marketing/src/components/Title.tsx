import React from "react";
import { Typography, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(3),
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    fontStyle: "italic",
  },
}));

interface TitleProps {
  /**
   * The main title text
   */
  title: string;
  /**
   * Optional subtitle text
   */
  subtitle?: string;
  /**
   * Typography variant for the title
   */
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * Text alignment
   */
  align?: "left" | "center" | "right";
  /**
   * Additional CSS class name
   */
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  title,
  subtitle,
  variant = "h2",
  align = "left",
  className,
}) => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${className || ""}`}>
      <Typography
        variant={variant}
        className={classes.title}
        align={align}
        component="h1"
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          className={classes.subtitle}
          align={align}
          component="p"
        >
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

export default Title;
