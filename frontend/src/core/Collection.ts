import Request from "./Request";

export default class Collection {
  async save(url: string, shortUrl: string, color: string, id: string) {
    let data;
    if (id) {
      data = await Request.put(`/link/${id}`, {
        url,
        shortUrl,
        id,
      });
      return data;
    } else {
      data = await Request.post("/link/create", {
        url,
        shortUrl,
        color,
      });
    }
    return data;
  }

  async delete(id: string) {
    const data = await Request.delete(`/link/${id}`);
    return data;
  }

  async getAll() {
    const data = await Request.get(`/link`);
    return data;
  }

  async getById(id: string) {
    const data = await Request.get(`/link/${id}`);
    return data;
  }
}
