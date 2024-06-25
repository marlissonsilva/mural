import axios from "axios";
import {JSDOM} from "jsdom";

export default async function fetchIcon(
  url: string,
  defaultIcon: string
): Promise<string> {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const dom = new JSDOM(response.data);
      const document = dom.window.document;
      let faviconUrl = "";
      const icons = document.querySelectorAll(
        "link[rel*='icon'], link[rel*='shortcut icon'], link[rel*='apple-touch-icon'], link[rel*='mask-icon']"
      );

      if (icons.length > 0) {
        faviconUrl = icons[0].getAttribute("href") || "";
        if (!faviconUrl.startsWith("http")) {
          faviconUrl = new URL(faviconUrl, url).href;
        }
      } else {
        faviconUrl = defaultIcon;
      }

      return faviconUrl;
    }
  } catch (error) {
    console.error("Erro ao obter ícone:", error);
  }
  return defaultIcon;
}
