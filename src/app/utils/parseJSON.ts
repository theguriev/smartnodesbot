const parseJSON = <T, B>(jsonString: string, defaultValue: B): T | B => {
  try {
    const result = JSON.parse(jsonString);
    return result;
  } catch (error) {
    return defaultValue;
  }
};

export default parseJSON;
