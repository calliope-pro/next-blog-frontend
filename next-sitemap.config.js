/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_FRONTEND_ORIGIN,
    generateRobotsTxt: true,
    // generateIndexSitemap: false,
    exclude: ['/admin', '/server-sitemap.xml'],
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', disallow: ['/admin'] },
        ],
        additionalSitemaps: [`${process.env.NEXT_PUBLIC_FRONTEND_ORIGIN}/server-sitemap.xml`]
    }
}
