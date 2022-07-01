import { endPointCallCreator } from "../utils/helpers";
import { urlKey, urlPrefix } from "../variables/urlVariables";

export const getArticleById = async (id) =>
  await endPointCallCreator({
    url: `${urlPrefix}/search?show-elements=all&show-fields=thumbnail,body,headline&ids=${id}&api-key=${urlKey}`,
  });
