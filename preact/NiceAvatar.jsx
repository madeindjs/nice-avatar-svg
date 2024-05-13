import builder from "@nice-avatar-svg/shared/builder";
import { Suspense, lazy } from "preact/compat";

const NiceAvatar = builder({ lazy, Suspense });

export default NiceAvatar;
