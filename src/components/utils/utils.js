const convertFormDataToObject = (formData) => {
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  return data;
};

export default convertFormDataToObject;