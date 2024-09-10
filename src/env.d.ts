/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_VERSION: string
    readonly VITE_UMAMI_ID: string
    readonly VITE_UMAMI_SRC: string
    readonly VITE_TIANJI_ID: string
    readonly VITE_TIANJI_SRC: string
    readonly VITE_SENTRY_DSN: string;
    readonly VITE_TELEMETRY_IMG: string;
    readonly VITE_DISCORD_INVITE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
