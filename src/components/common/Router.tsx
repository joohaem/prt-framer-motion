import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Error404 from "pages/Error404";
import Animation from "pages/Animation";
import Variants from "pages/Variants";
import Gestures from "pages/Gestures";
import Drag from "pages/Drag";
import Motion from "pages/Motion";
import Scroll from "pages/Scroll";
import Path from "pages/Path";
import Slider from "pages/Slider";
import Layout from "pages/Layout";
import ModalLayout from "pages/ModalLayout";
import Header from "./Header";

export default function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="" element={<Navigate to="/1" />} />
        <Route path="/1" element={<Animation />} />
        <Route path="/2" element={<Variants />} />
        <Route path="/3" element={<Gestures />} />
        <Route path="/4" element={<Drag />} />
        <Route path="/5-0" element={<Motion />} />
        <Route path="/5" element={<Scroll />} />
        <Route path="/6" element={<Path />} />
        <Route path="/7" element={<Slider />} />
        <Route path="/8" element={<Layout />} />
        <Route path="/9" element={<ModalLayout />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  );
}
