export const Heading = ({ children, className }) => {
  const classes = `mb-S font-bold text-primary text-delta tablet-m:text-foxtrot ${
    className ? className : ''
  }`;

  return <h2 className={classes}>{children}</h2>;
};
