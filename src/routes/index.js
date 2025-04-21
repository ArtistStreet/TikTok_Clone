import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";

import config from "../components/config"

const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.following, component: Following},
    {path: config.routes.upload, component: Upload},
    {path: config.routes.more, component: Home},
    {path: config.routes.live, component: Home},
    {path: config.routes.profile, component: Home},
    {path: config.routes.explore, component: Home},
]

const privateRoutes = []

export {
    publicRoutes,
    privateRoutes
}