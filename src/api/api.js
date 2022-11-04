const mockWait = (data, time = 1000) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (window.isError)
        reject({ response: { data: { msg: 'Here is an error from server' } } });
      else resolve({ data });
    }, time)
  );

const api = {
  // TODO: instead of data, the function will take request URL and return the corresponding response promise
  get(data) {
    return mockWait(data);
  },
};

export default api;
