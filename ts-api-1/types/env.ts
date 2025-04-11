export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPRESS_PORT: string;
      EXPRESS_HOST: string;
      MONGODB_CONNECTION: string;
    }
  }
}
