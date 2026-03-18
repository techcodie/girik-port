import "./globals.css";

export const metadata = {
    title: "Girik Sain — Creative Developer & Visual Designer",
    description:
        "Portfolio of Girik Sain — multidisciplinary creative specializing in video editing, motion design, graphic design, and web development.",
    keywords: [
        "Girik Sain",
        "portfolio",
        "creative developer",
        "visual designer",
        "video editor",
        "motion design",
        "web development",
    ],
    authors: [{ name: "Girik Sain" }],
    openGraph: {
        title: "Girik Sain — Creative Developer & Visual Designer",
        description:
            "Multidisciplinary creative specializing in video editing, motion design, graphic design, and web development.",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
