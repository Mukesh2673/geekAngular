import authRoutes from "./auth/routes";
import healthCheckRoutes from "./healthCheck/routes";
import userRoutes from "./user/routes";
import adminRoutes from './admin/routes';
import driverRoutes from './driver/routes'

export default [
    ...authRoutes, 
    ...healthCheckRoutes,
    ...userRoutes,
    ...adminRoutes,
    ...driverRoutes
];