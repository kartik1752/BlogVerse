// App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Signup from './Components/Signup';
import User from './Components/User';
import { Navbar } from './Components/Navbar';
import Banner from './Components/Banner';
import './Components/SecondBanner'
import FetchBlog from './Components/FetchBlog';

function AppWrapper() {
  const location = useLocation();
  const hideBannerAndSecondBanner = location.pathname.startsWith('/user/'); // Hide if route starts with '/user/'

  return (
    <>
      {!hideBannerAndSecondBanner && <Navbar />}
      {/* {!hideBannerAndSecondBanner && <Banner />}  */}
      <Routes>
        <Route path="/" element={<Banner />} /> {/* Only include if needed */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/secondbanner" element={<SecondBanner />} />
        <Route path="/fetchblog" element={<FetchBlog />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
      {!hideBannerAndSecondBanner && <SecondBanner />} {/* Render SecondBanner conditionally */}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
