// This page is a Server Component by default, but it will render Client Components.
// Import your Header and HeroSection components
import Header from '@/components/Header';

export default function HomePage() {
  return (
    <>
      {/* Header and HeroSection are Client Components and will use the context from ClientPagesLayout */}
      <Header />
      <main>
        {/* Other sections */}
        <div id="services" style={{ height: '80vh', backgroundColor: '#111', paddingTop: '80px', paddingLeft: '20px', color: 'white' }}>
          <h2 className="text-3xl">Services Section (Placeholder)</h2>
        </div>
      </main>
    </>
  );
}