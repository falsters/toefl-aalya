// pages/index.js
export default function Home() {
  return null; // pas d'affichage, redirection serveur
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/mock-exam',
      permanent: false,
    },
  };
}
