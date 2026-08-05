import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkipLink from "./components/SkipLink";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import CustomCursor from "./components/CustomCursor";
import CanvasParticles from "./components/CanvasParticles";

// Route-level code splitting — Home stays eager for a fast first paint;
// the other pages load only when visited
import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

function AnimatedPage({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <SkipLink />
      <ScrollProgress />
      <CanvasParticles />
      <CustomCursor />
      <Header />
      <AnimatePresence mode="wait">
        <Suspense key={location.pathname} fallback={
          <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-label="Loading page">
            <div className="w-12 h-12 rounded-full border-2 border-gold-500/30 border-t-gold-500 animate-spin" />
          </div>
        }>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
            <Route path="/education" element={<AnimatedPage><Education /></AnimatedPage>} />
            <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
}
