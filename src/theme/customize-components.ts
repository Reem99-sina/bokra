"use client";

/**
 *  every component in material-tailwind can customized like this
@example 
   button: { // It's the name of component that you want to customize. e.g button. 
    defaultProps: {},  Is used to change the default props value for components.
    valid: {}, Is used to change the valid values for components props validation
    styles: {}, Is used to change the styles of a component.
  }
  
 */
export const customComponents = {
  typography: {
    defaultProps: {
      variant: "paragraph",
      textGradient: false,
      className: "text-secondary2 font-normal",
    },
  },
  button: {
    defaultProps: {
      variant: "filled",
      className: "bg-primary w-full rounded justify-center",
    },
  },
};
