import Backendless from "backendless";

const APP_ID = process.env.NEXT_PUBLIC_FAFA_HELM_APP_ID as string
const API_KEY = process.env.NEXT_PUBLIC_FAFA_HELM_API_KEY as string

Backendless.initApp(APP_ID, API_KEY);

export default Backendless;