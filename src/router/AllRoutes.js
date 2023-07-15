import React from "react";
import Preview from "../views/Preview";
// Homepage Demo
import HomeDefault from "../views/all-home-version/HomeDefault";
import HomeStudio from "../views/all-home-version/HomeStudio";
import HomeAgency from "../views/all-home-version/HomeAgency";
import HomeMinimal from "../views/all-home-version/HomeMinimal";
import HomeTrending from "../views/all-home-version/HomeTrending";
import HomeFreelancer from "../views/all-home-version/HomeFreelancer";
import HomeDark from "../views/all-home-version/HomeDark";
import HomeModern from "../views/all-home-version/HomeModern";
// Service
import Service from "../views/inner-pages/service/Service";
import ServiceDetails from "../views/inner-pages/service/ServiceDetails";

// About
import AboutUs from "../views/inner-pages/about/AboutUs";
import AboutMe from "../views/inner-pages/about/AboutMe";

// Blog
import BlogGrid from "../views/inner-pages/blog/BlogGrid";
import BlogMasonry from "../views/inner-pages/blog/BlogMasonry";
import BlogSidebar from "../views/inner-pages/blog/BlogSidebar";
import BlogDetails from "../views/inner-pages/blog/BlogDetails";
import BlogDetailsSidebar from "../views/inner-pages/blog/BlogDetailsSidebar";

// terms
import TermsConditions from "../views/inner-pages/terms/TermsConditions";

// Portfolio
import WorksGrid from "../views/inner-pages/portfolio/WorksGrid";
import WorksMasonry from "../views/inner-pages/portfolio/WorksMasonry";
import WorksListing from "../views/inner-pages/portfolio/WorksListing";
import WorksCarousel from "../views/inner-pages/portfolio/WorksCarousel";
import WorksShowcase from "../views/inner-pages/portfolio/WorksShowcase";
import MidStar from "../views/inner-pages/portfolio/MidStar";
import N2go from "../views/inner-pages/portfolio/N2go";
import Bhuth from "../views/inner-pages/portfolio/Bhuth";
import Hospital from "../views/inner-pages/portfolio/Hospital";
import Continental from "../views/inner-pages/portfolio/Continental";
import Talabat from "../views/inner-pages/portfolio/Talabat";
import Talends from "../views/inner-pages/portfolio/Talends";
import Ibnk from "../views/inner-pages/portfolio/Ibnk";
import Ewt from "../views/inner-pages/portfolio/Ewt";
import EasyCarParts from "../views/inner-pages/portfolio/EasyCarParts";
import Frame from "../views/inner-pages/portfolio/Frame";

// Others
import Contact from "../views/inner-pages/Contact";
import PricingInner from "../views/inner-pages/PricingInner";
import Team from "../views/inner-pages/Team";
import ComingSoon from "../views/inner-pages/ComingSoon";
import Faq from "../views/inner-pages/Faq";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route path="/" element={<HomeAgency />} />
        {/*  Homepage Demo */}
        <Route path="/home-default" element={<HomeDefault />} />
        <Route path="/home-studio" element={<HomeStudio />} />
        <Route path="/home-agency" element={<HomeAgency />} />
        <Route path="/home-minimal" element={<HomeMinimal />} />
        <Route path="/home-trending" element={<HomeTrending />} />
        <Route path="/home-freelancer" element={<HomeFreelancer />} />
        <Route path="/home-dark" element={<HomeDark />} />
        <Route path="/home-modern" element={<HomeModern />} />

        {/* Service */}
        <Route path="/service" element={<Service />} />
        <Route path="/service-details" element={<ServiceDetails />} />

        {/* About */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-me" element={<AboutMe />} />

        {/* Blog */}
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-masonry" element={<BlogMasonry />} />
        <Route path="/blog-sidebar" element={<BlogSidebar />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/blog-details-sidebar" element={<BlogDetailsSidebar />} />

        {/* Terms Conditions */}
        <Route path="/terms" element={<TermsConditions />} />

        {/* Portfolio */}
        <Route path="/works-grid" element={<WorksGrid />} />
        <Route path="/work" element={<WorksMasonry />} />
        <Route path="/works-listing" element={<WorksListing />} />
        <Route path="/works-carousel" element={<WorksCarousel />} />
        <Route path="/works-showcase" element={<WorksShowcase />} />
        <Route path="/work/mid-star" element={<MidStar />} />
        <Route path="/work/n2go" element={<N2go />} />
        <Route path="/work/bhuth" element={<Bhuth />} />
        <Route path="/work/hospital" element={<Hospital />} />
        <Route path="/work/continental" element={<Continental />} />
        <Route path="/work/talabat" element={<Talabat />} />
         <Route path="/work/talends" element={<Talends />} />
        <Route path="/work/ibnk" element={<Ibnk />} />
        <Route path="/work/ewt" element={<Ewt />} />
        <Route path="/work/easy-car-parts" element={<EasyCarParts />} />
        <Route path="/work/frame" element={<Frame />} />


        {/* others */}
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<PricingInner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
