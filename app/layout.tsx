import './globals.css';
import Navbar from './(components)/navbar';
import Footer from './(components)/footer';
import QueryClient from './(utils)/query-provider';
import styles from './styles.module.css';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: Props) {
  return (
    <html>
      <head />
      <QueryClient>
        <body className={styles.layout}>
          <header className={styles.header}>
            <Navbar />
          </header>
          <section className={styles.sidebar}>
            Sidebar
          </section>
          <main className={styles.main}>
            {children}
          </main>
          <Footer />
        </body>
      </QueryClient>
    </html>
  )
}
