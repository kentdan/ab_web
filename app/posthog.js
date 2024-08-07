import posthog from 'posthog-js';

export default function initializePostHog() {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    });
    return posthog;
}
