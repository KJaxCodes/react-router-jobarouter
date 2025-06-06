import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/help/FAQ'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Careers, { careersLoader } from './pages/careers/Careers'

// layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="careers" element={<CareersLayout />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App