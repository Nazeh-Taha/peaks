import { endPointCallCreator } from "../utils/helpers";
import { urlKey, urlPrefix } from "../variables/urlVariables";

export const getHomeNews = async ({
  section = ["news"],
  orderBy = "newest",
  page = 1,
  size = 5,
}) =>
  await endPointCallCreator({
    url: `${urlPrefix}/search?section=${section.join(
      "|"
    )}&order-by=${orderBy}&show-elements=image&page=${page}&page-size=${size}&q=stories&api-key=${urlKey}`,
  });
