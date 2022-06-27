import { endPointCallCreator } from "../utils/helpers";
import { urlKey, urlPrefix } from "../variables/urlVariables";

export const getHomeNews = async ({
  section = ["news"],
  orderBy = "newest",
  page = 1,
  size = 8,
} = {}) =>
  await endPointCallCreator({
    url: `/search?section=${section.join(
      "|"
    )}&order-by=${orderBy}&show-fields=thumbnail,body&page=${page}&page-size=${size}&api-key=${urlKey}`,
  });
