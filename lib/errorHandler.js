const handle = (err, callback) => {
  if (err) {
    const { status, data } = err.response;
    callback(status, data.msg);
  }
};

export default handle;
