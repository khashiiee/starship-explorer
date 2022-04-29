const fetcher = (...args) =>
  fetch(...args).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.statusText);
    }
  });

export default fetcher;
