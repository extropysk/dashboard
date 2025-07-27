import { Payload } from "@extropysk/payload"

export const payload = new Payload({
  baseUrl: import.meta.env.VITE_PAYLOAD_BASE_URL,
  options: {
    credentials: "include",
  },
})
