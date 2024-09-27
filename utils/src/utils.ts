export const areNumberArraysEqualNoOrder = (arr1: number[], arr2: number[]): boolean => {
    if (arr1.length !== arr2.length) return false; // Different lengths mean they can't be equal
    
    const sorted1 = [...arr1].sort((a, b) => a - b); // Sort first array
    const sorted2 = [...arr2].sort((a, b) => a - b); // Sort second array
    
    return sorted1.every((value, index) => value === sorted2[index]); // Compare
  };