export const A = ({ href, children, className, ...props }) => {
  return (
    <a
      className={`text-primary underline ${className ? className : ''}`}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
};
