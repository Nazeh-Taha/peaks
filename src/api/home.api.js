import { endPointCallCreator } from "../utils";
import { apiKey, apiUrlPrefix } from "../variables";

export const getHomeNews = async ({
  section = ["news"],
  orderBy = "newest",
  page = 1,
  size = 5,
}) =>
  await endPointCallCreator({
    url: `${apiUrlPrefix}/search?section=${section.join(
      "|"
    )}&order-by=${orderBy}&show-elements=image&page=${page}&page-size=${size}&q=stories&api-key=${apiKey}`,
  });
