import builder from "@nice-avatar-svg/shared/builder";
import { lazy } from "solid-js";

const Suspense = ({ children }) => <>{children}</>;

const NiceAvatar = builder({ lazy, Suspense });

export default NiceAvatar;
