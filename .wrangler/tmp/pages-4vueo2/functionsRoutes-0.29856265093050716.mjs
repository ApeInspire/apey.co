import { onRequestPost as __api_optimize_ts_onRequestPost } from "/Users/stan/Myspace/apey.co/functions/api/optimize.ts"

export const routes = [
    {
      routePath: "/api/optimize",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_optimize_ts_onRequestPost],
    },
  ]