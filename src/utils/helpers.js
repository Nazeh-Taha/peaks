export async function endPointCallCreator({ url = "", method = "GET" } = {}) {
  return fetch(url, {
    method,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return {
        loading: false,
        error: true,
        errorMessage: "Something went wrong",
        payload: null,
      };
    })
    .then((data) => ({
      loading: false,
      error: false,
      errorMessage: "",
      payload: data.response,
    }));
}
