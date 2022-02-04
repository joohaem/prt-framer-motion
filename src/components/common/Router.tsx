import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "pages/Error404";
import Animation from "pages/Animation";
import Variants from "pages/Variants";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/1" element={<Animation />} />
        <Route path="/2" element={<Variants />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
