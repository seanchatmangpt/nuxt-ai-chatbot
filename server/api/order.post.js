import { eventHandler } from "h3";
import { DaprClient, CommunicationProtocolEnum } from "@dapr/dapr";

const daprHttpEndpoint = process.env.DAPR_HTTP_ENDPOINT;
const daprApiToken = process.env.DAPR_API_TOKEN;
const kvName = "kvstore";

const client = new DaprClient({
  daprApiToken: daprApiToken,
  communicationProtocol: CommunicationProtocolEnum.HTTP,
  daprHost: daprHttpEndpoint,
});

export default eventHandler(async (req, res) => {
  if (req.method === "POST") {
    const { orderId, details } = await req.json();

    const state = [
      {
        key: `order${orderId}`,
        value: { orderId, details },
      },
    ];

    try {
      await client.state.save(kvName, state);
      res.status(200).json({ message: "Order submitted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to submit order", details: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
});
