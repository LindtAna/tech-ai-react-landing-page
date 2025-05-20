import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AbousUs";
import { CTA } from "./components/sections/CallToAction";
import { Clients } from "./components/sections/Clients";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <Layout title="Tech AI">
      <Hero />
      <Clients />
      <Services />
      <AboutUs />
      <Pricing />
      <CTA />
    </Layout>
  );
};

export default App;
