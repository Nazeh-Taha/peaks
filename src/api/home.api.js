import { endPointCallCreator } from "../utils/helpers";
import { urlKey, urlPrefix } from "../variables/urlVariables";

export const getHomeNews = async ({
  section = ["news"],
  orderBy = "newest",
  page = 1,
  size = 8,
  searchTerm = "",
} = {}) =>
  await endPointCallCreator({
    url: `/search?section=${section.join(
      "|"
    )}&order-by=${orderBy}&q=${searchTerm}&show-fields=thumbnail,body&page=${page}&page-size=${size}&api-key=${urlKey}`,
  });

export const getArticleById = async (id) =>
  await endPointCallCreator({
    url: `/search?show-elements=all&show-fields=thumbnail,body,headline&ids=${id}&api-key=${urlKey}`,
  });
