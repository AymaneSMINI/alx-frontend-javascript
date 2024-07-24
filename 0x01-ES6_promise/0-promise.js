function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve();
    }
    reject();
  });
  }
  const response = getResponseFromAPI();
  console.log(response instanceof Promise);