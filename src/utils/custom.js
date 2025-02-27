export function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

export const fadeUpVariant = {
  initial: {opacity: 0, y: 100},
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}; 


export const fadeUpVariant2 = {
  initial: {opacity: 0, y: 100},
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
}; 


export const fadeUpVariant3 = {
  initial: {opacity: 0, y: 100},
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}; 