import { DaprClient, CommunicationProtocolEnum } from "@dapr/dapr";
import axios from "axios";

const daprHttpEndpoint = process.env.DAPR_HTTP_ENDPOINT;
const daprApiToken = process.env.DAPR_API_TOKEN;
const kvName = "kvstore";

export default defineEventHandler(async (event) => {
  const req = event.req;
  const res = event.res;

  if (req.method === "GET") {
    const { orderId } = getQuery(event);

    try {
      const { data } = await axios.get(
        `https://http-prj145384.api.cloud.diagrid.io/v1.0/state/kvstore/order${orderId}`,
        {
          headers: {
            "Content-Type": "application/json",
            "dapr-api-token": daprApiToken,
          },
        },
      );
      return { status: 200, data };
    } catch (error) {
      res.statusCode = 500;
      return { error: "Failed to retrieve order", details: error.message };
    }
  } else {
    res.statusCode = 405;
    return { error: "Method not allowed" };
  }
});
