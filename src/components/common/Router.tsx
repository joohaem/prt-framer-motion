import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "pages/Error404";
import Animation from "pages/Animation";
import Variants from "pages/Variants";
import Gestures from "pages/Gestures";
import Drag from "pages/Drag";
import Motion from "pages/Motion";
import Scroll from "pages/Scroll";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/1" element={<Animation />} />
        <Route path="/2" element={<Variants />} />
        <Route path="/3" element={<Gestures />} />
        <Route path="/4" element={<Drag />} />
        <Route path="/5-0" element={<Motion />} />
        <Route path="/5" element={<Scroll />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
