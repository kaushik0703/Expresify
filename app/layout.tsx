import Navbar from '@/components/Navbar'; 
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Expresify",
  description: "Showcase and discover remarkable developer Projects",
};
export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
