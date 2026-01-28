import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './pages/About';
import AIPage from './pages/AIPage';
import BlockchainPage from './pages/BlockchainPage';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import CybersecurityPage from './pages/CybersecurityPage';
import Home from './pages/Home';
import Insights from './pages/Insights';
import Join from './pages/Join';
import Media from './pages/Media';
import Partners from './pages/Partners';
import RWALiquidityPage from './pages/RWALiquidityPage';
import Signup from './pages/Signup';
import SolutionsPage from './pages/SolutionsPage';
import SupplyChainTraceabilityArticle from './pages/SupplyChainTraceabilityArticle';
import Technologies from './pages/Technologies';
import TokenisedLoyaltyArticle from './pages/TokenisedLoyaltyArticle';
import VerifiableIdentityArticle from './pages/VerifiableIdentityArticle';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/technologies/ai' element={<AIPage />} />
        <Route path='/technologies/blockchain' element={<BlockchainPage />} />
        <Route path='/technologies/cybersecurity' element={<CybersecurityPage />} />
        <Route path='/solutions' element={<SolutionsPage />} />
        <Route path='/solutions/rwa-liquidity' element={<RWALiquidityPage />} />
        <Route path='/case-studies' element={<CaseStudies />} />
        <Route path='/insights' element={<Insights />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/join' element={<Join />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/insights' element={<Insights />} />
        <Route path='/insights/traceability-and-provenance-for-modern-supply-chains' element={<SupplyChainTraceabilityArticle />} />
        <Route path='/insights/verifiable-identity-for-partner-ecosystems' element={<VerifiableIdentityArticle />} />
        <Route path='/insights/tokenised-loyalty-programs-with-governance' element={<TokenisedLoyaltyArticle />} />
        <Route path='/media' element={<Media />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
