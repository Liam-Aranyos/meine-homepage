import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  const features = [
    { title: 'Projects', description: 'All my cool coding projects.' },
    { title: 'Blog', description: 'Updates, tutorials, and experiments.' },
    { title: 'Contact', description: 'Find me on GitHub, LinkedIn, or Discord.' },
  ];

  return (
    <Layout title="Welcome!" description="Liam's GitHub Homepage">
      <header className={styles.heroBanner}>
        <div className={styles.container}>
          <img
            src="https://avatars1.githubusercontent.com/u/17883920?s=460&v=4"
            alt="Liam"
            className={styles.profileImage}
          />
          <h1>Hello, I’m Liam!</h1>
          <p>Welcome to my personal space where I share projects, blogs, and experiments.</p>
        </div>
      </header>

      <main className={styles.features}>
        {features.map((f, idx) => (
          <div key={idx} className={styles.featureCard}>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </main>
    </Layout>
  );
}

