import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { ThankYou } from './pages/ThankYou';
import { NotFound } from './pages/NotFound';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';

const AdminRoute: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return (
      sessionStorage.getItem('admin_authenticated') === 'true' ||
      localStorage.getItem('admin_authenticated') === 'true'
    );
  });

  if (!isAuthenticated) {
    return (
      <AdminLogin
        onLoginSuccess={() => setIsAuthenticated(true)}
        onBackToSite={() => {
          window.location.href = '/';
        }}
      />
    );
  }

  return (
    <AdminDashboard
      onLogout={() => {
        sessionStorage.removeItem('admin_authenticated');
        localStorage.removeItem('admin_authenticated');
        setIsAuthenticated(false);
      }}
      onBackToSite={() => {
        window.location.href = '/';
      }}
    />
  );
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAdminPath =
    location.pathname.startsWith('/admin') ||
    location.pathname.startsWith('/orders') ||
    location.pathname.startsWith('/login');

  if (isAdminPath) {
    return (
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminRoute />} />
        <Route path="/admin/orders" element={<AdminRoute />} />
        <Route path="/orders" element={<AdminRoute />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-bangla antialiased selection:bg-[#0068FF] selection:text-white">
      {/* Header Navigation Bar */}
      <Navbar />

      {/* Dynamic Page Content */}
      <main className="flex-1 w-full pt-16 sm:pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/order-success" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Scroll restoration helper */}
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
