import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

// Main Pages
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import { ContactUs } from "./pages/main/ContactUs";

// Hire Developers Pages
import HireLaravelDeveloper from "./pages/hireDevelopers/HireLaravelDeveloper";
import HireMagentoDeveloper from "./pages/hireDevelopers/HireMagentoDeveloper";
import HireWebDeveloper from "./pages/hireDevelopers/HireWebDeveloper";

// services

// Web Design Pages
import AffordableWebDesign from "./pages/services/web-design/AffordableWebDesign";
import CorporateWebDesign from "./pages/services/web-design/CorporateWebDesign";
import ContentManagementSystem from "./pages/services/web-design/ContentManagementSystem";
import Html5WebDesign from "./pages/services/web-design/Html5WebDesign";
import ResponsiveWebDesign from "./pages/services/web-design/ResponsiveWebDesign";
import WebsiteRedesigning from "./pages/services/web-design/WebsiteRedesigning";

// Web Development Pages
import PhpWebDevelopment from "./pages/services/web-development/PhpWebDevelopment";
import ProgressiveWebApps from "./pages/services/web-development/ProgressiveWebApps";
import RealTimeWebApplication from "./pages/services/web-development/RealTimeWebApplicationDevelopment";
import SpecialFrameworkDevelopment from "./pages/services/web-development/SpecialFrameworkDevelopment";
import ReactJsDevelopment from "./pages/services/web-development/ReactjsDevelopment";

// Ecommerce Pages
import MagentoDevelopment from "./pages/services/ecommerce/MagentoDevelopment";
import StartupEcommerce from "./pages/services/ecommerce/StartupEcommerce";
import PremiumEcommerce from "./pages/services/ecommerce/PremiumEcommerce";
import MagentoHosting from "./pages/services/ecommerce/MagentoHosting";

// Mobile App Development Pages
import AndroidAppDevelopment from "./pages/services/mobile-app-development/AndroidAppDevelopment";
import IosAppDevelopment from "./pages/services/mobile-app-development/IosAppDevelopment";
import HybridAppDevelopment from "./pages/services/mobile-app-development/HybridAppDevelopment";
import AngularJsAppDevelopment from "./pages/services/mobile-app-development/AngularJsAppDevelopment";
import FlutterAppDevelopment from "./pages/services/mobile-app-development/FlutterAppDevelopment";

// Development Pages
import MeanStackDevelopment from "./pages/services/development/MeanStackDevelopment";
import DjangoWebDevelopment from "./pages/services/development/DanjoWebDevelopment";
import WebConferenceApp from "./pages/services/development/WebConferenceApp";
import GameDevelopment from "./pages/services/development/GameDevelopment";

// Products Pages
import InstituteManagementSystem from "./pages/products/InstituteManagementSystem";
import HrManagementSystem from "./pages/products/HrManagementSystem";
import EventBookingSolution from "./pages/products/EventBookingSolution";
import FoodOrderingSolution from "./pages/products/FoodOderingSolution";
import GoogleDataExtractor from "./pages/products/GoogleDataExtractor";
import IotSolutions from "./pages/products/IotSolutions";
import ClassifiedAdsSolution from "./pages/products/ClassifiedAdsSolution";
import RetailPosSoftware from "./pages/products/RetailPOSSoftware";
import RetailPos from "./pages/products/RetailPointOfSales";
import TradingRetailErp from "./pages/products/TradingAndRetailERP";
import LeaseManagementSystem from "./pages/products/LeaseManagementSystem";
import OnDemandServiceBooking from "./pages/products/OnDemandServiceBookingSolution";
import OnDemandTaxiBooking from "./pages/products/OnDemandTaxiBookingSolution";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Main Pages */}
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            
            {/* Hire Developers Pages */}
            <Route path="/hire-laravel-developer" element={<HireLaravelDeveloper />} />
            <Route path="/hire-magento-developer" element={<HireMagentoDeveloper />} />
            <Route path="/hire-web-developer" element={<HireWebDeveloper />} />
            
            {/* Web Design Pages */}
            <Route path="/affordable-web-design" element={<AffordableWebDesign />} />
            <Route path="/corporate-web-design" element={<CorporateWebDesign />} />
            <Route path="/content-management-system" element={<ContentManagementSystem />} />
            <Route path="/html5-web-design" element={<Html5WebDesign />} />
            <Route path="/responsive-web-design" element={<ResponsiveWebDesign />} />
            <Route path="/website-redesigning" element={<WebsiteRedesigning />} />
            
            {/* Web Development Pages */}
            <Route path="/php-web-development" element={<PhpWebDevelopment />} />
            <Route path="/progressive-web-apps" element={<ProgressiveWebApps />} />
            <Route path="/real-time-web-application" element={<RealTimeWebApplication />} />
            <Route path="/special-framework-development" element={<SpecialFrameworkDevelopment />} />
            <Route path="/react-js-development" element={<ReactJsDevelopment />} />
            
            {/* Ecommerce Pages */}
            <Route path="/magento-development" element={<MagentoDevelopment />} />
            <Route path="/startup-ecommerce" element={<StartupEcommerce />} />
            <Route path="/premium-ecommerce" element={<PremiumEcommerce />} />
            <Route path="/magento-hosting" element={<MagentoHosting />} />
            
            {/* Mobile App Development Pages */}
            <Route path="/android-app-development" element={<AndroidAppDevelopment />} />
            <Route path="/ios-app-development" element={<IosAppDevelopment />} />
            <Route path="/hybrid-app-development" element={<HybridAppDevelopment />} />
            <Route path="/angular-js-app-development" element={<AngularJsAppDevelopment />} />
            <Route path="/flutter-app-development" element={<FlutterAppDevelopment />} />
            
            {/* Development Pages */}
            <Route path="/mean-stack-development" element={<MeanStackDevelopment />} />
            <Route path="/django-web-development" element={<DjangoWebDevelopment />} />
            <Route path="/web-conference-app" element={<WebConferenceApp />} />
            <Route path="/game-development" element={<GameDevelopment />} />
            
            {/* Products Pages */}
            <Route path="/institute-management-system" element={<InstituteManagementSystem />} />
            <Route path="/hr-management-system" element={<HrManagementSystem />} />
            <Route path="/event-booking-solution" element={<EventBookingSolution />} />
            <Route path="/food-ordering-solution" element={<FoodOrderingSolution />} />
            <Route path="/retail-pos" element={<RetailPos />} />
            <Route path="/google-data-extractor" element={<GoogleDataExtractor />} />
            <Route path="/iot-solutions" element={<IotSolutions />} />
            <Route path="/classified-ads-solution" element={<ClassifiedAdsSolution />} />
            <Route path="/retail-pos-software" element={<RetailPosSoftware />} />
            <Route path="/trading-retail-erp" element={<TradingRetailErp />} />
            <Route path="/lease-management-system" element={<LeaseManagementSystem />} />
            <Route path="/on-demand-service-booking" element={<OnDemandServiceBooking />} />
            <Route path="/on-demand-taxi-booking" element={<OnDemandTaxiBooking />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;