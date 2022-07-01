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
    .then((data) => {
      if (data.response.status === "ok") {
        return {
          loading: false,
          error: false,
          errorMessage: "",
          payload: data.response,
        };
      } else {
        return {
          loading: false,
          error: true,
          errorMessage: data.response.message,
          payload: null,
        };
      }
    })
    .catch(() => ({
      loading: false,
      error: true,
      errorMessage: "Something went wrong",
      payload: null,
    }));
}

export const extractContent = (s) => {
  const span = document.createElement("span");
  span.innerHTML = s;
  return span.textContent || span.innerText;
};
