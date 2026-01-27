import Box from "@mui/material/Box";
import { memo } from "react";
import {
  Navbar,
  HeroSection,
  StatsSection,
  FeaturesSection,
  TestimonialsSection,
  CTASection,
  Footer,
} from "./landing";

const LandingPage = memo(function LandingPage() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </Box>
  );
});

export default LandingPage;
