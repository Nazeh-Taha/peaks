import { getHomeNews } from "./home.api";
import { homeData } from "./mock";

beforeEach(() => {
  fetch.resetMocks();
});
//-------------------------Interest Projects/acquired Projects------------------------------------
it("Home endpoint call - [get] happy case", async () => {
  fetch.mockResponseOnce(JSON.stringify(homeData));
  const homeResponse = await getHomeNews({
    section: ["news"],
    orderBy: "newest",
    page: 1,
    size: 8,
    searchTerm: "",
  });
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(homeResponse.payload.results.length).toBe(8);
  expect(homeResponse.loading).toBe(false);
  expect(homeResponse.error).toBe(false);
  expect(fetch).toHaveBeenCalledWith(
    `https://content.guardianapis.com/search?section=news&order-by=newest&q=&show-fields=thumbnail,body&page=1&page-size=8&api-key=cf480511-5315-4c7d-8db4-801fa82b4ad9`,
    {
      headers: {
        Authorization: "Bearer null",
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  );
});

it("Home endpoint call - catches errors and returns null", async () => {
  fetch.mockReject(() => "API failure");

  const homeResponse = await getHomeNews({
    section: ["news"],
    orderBy: "newest",
    page: 1,
    size: 8,
    searchTerm: "",
  });

  expect(homeResponse.payload).toEqual(null);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(homeResponse.loading).toBe(false);
  expect(homeResponse.error).toBe(true);
  expect(fetch).toHaveBeenCalledWith(
    `https://content.guardianapis.com/search?section=news&order-by=newest&q=&show-fields=thumbnail,body&page=1&page-size=8&api-key=cf480511-5315-4c7d-8db4-801fa82b4ad9`,
    {
      headers: {
        Authorization: "Bearer null",
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  );
});
it("Interest Projects - api call with status 404", async () => {
  fetch.mockResponseOnce(JSON.stringify(homeData), { status: 404 });
  const homeResponse = await getHomeNews({
    section: ["news"],
    orderBy: "newest",
    page: 1,
    size: 8,
    searchTerm: "",
  });

  expect(homeResponse.payload).toEqual(null);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(homeResponse.loading).toBe(false);
  expect(homeResponse.error).toBe(true);

  expect(fetch).toHaveBeenCalledWith(
    `https://content.guardianapis.com/search?section=news&order-by=newest&q=&show-fields=thumbnail,body&page=1&page-size=8&api-key=cf480511-5315-4c7d-8db4-801fa82b4ad9`,
    {
      headers: {
        Authorization: "Bearer null",
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  );
});
