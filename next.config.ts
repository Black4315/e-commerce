
import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    devIndicators: false
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);