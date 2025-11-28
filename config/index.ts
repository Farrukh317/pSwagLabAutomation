import dev from "./dev";

const ENV = process.env.ENV || "dev";

const configMap: any = {
  dev,
};

export default configMap[ENV];
