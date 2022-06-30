import { endPointCallCreator } from "../utils/helpers";
import { urlKey, urlPrefix } from "../variables/urlVariables";

export const getBookmarks = async (ids, orderBy = "newest") =>
  await endPointCallCreator({
    url: `/search?show-elements=all&order-by=${orderBy}&show-fields=thumbnail,body,headline&ids=${ids.join()}&api-key=${urlKey}`,
  });
