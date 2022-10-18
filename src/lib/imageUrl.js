const URL = process.env.STRAPIBASEURL;

const urlBuilder = (src) => {
  const fullUrl = URL + src;
  return fullUrl;
};

export default urlBuilder;
