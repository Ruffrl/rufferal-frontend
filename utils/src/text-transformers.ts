export const capitalize = (string?: string): string | undefined => {
  // If the string is provided, capitalize the first letter
  return (
    string && // Check if string is truthy (not undefined or empty)
    string[0].toUpperCase() + string.slice(1)
  ); // Capitalize the first letter and concatenate with the rest of the string
};

export const starRatingDisplay = (rating: number): string => {
  // Ensure the rating is within the range of 0 to 5 and has one decimal place
  return Math.min(Math.max(rating, 0), 5).toFixed(1);
};

export const surnameLetter = (input: string): string => {
  // Check if the input string is empty
  if (input.length === 0) {
    return ''; // Return an empty string if the input is empty
  }

  // Capitalize the first letter and return it
  return input.charAt(0).toUpperCase() + '.'; // Return the first letter capitalized followed by a period
};

export const titleCase = (string?: string): string | undefined => {
  // If string is provided, process it; otherwise, return undefined
  return (
    string && // Check if string is truthy (not undefined or empty)
    string
      .toLowerCase() // Convert the entire string to lowercase
      .split(' ') // Split the string into an array of words
      .map(
        (word) =>
          // Capitalize the first letter of each word
          word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(' ') // Join the words back into a single string with spaces
  );
};

export const titleCaseToCamelCase = (string?: string): string | undefined => {
  // If string is provided, process it; otherwise, return undefined
  return (
    string && // Check if string is truthy (not undefined or empty)
    string
      .split(' ') // Split the title into words
      .map((word, index) => {
        // Convert the first word to lowercase, others to capitalize
        if (index === 0) {
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('')
  ); // Join the words back into a single string
};
