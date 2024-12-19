// import { Client } from "@elastic/elasticsearch";

// const client = new Client({
//   cloud: {
//     id: process.env.ELASTICSEARCH_CLOUD_ID || "",
//   },
//   auth: {
//     apiKey: process.env.ELASTICSEARCH_API_KEY || "",
//   },
// });

// export default client;

import { Client } from "@elastic/elasticsearch";

let client: Client | null = null;

export function getElasticsearchClient() {
  if (!client) {
    const cloudId = process.env.ELASTICSEARCH_CLOUD_ID;
    const apiKey = process.env.ELASTICSEARCH_API_KEY;

    if (!cloudId || !apiKey) {
      throw new Error("Missing ELASTICSEARCH_CLOUD_ID or ELASTICSEARCH_API_KEY");
    }

    client = new Client({
      cloud: { id: cloudId },
      auth: { apiKey },
    });
  }

  return client;
}
