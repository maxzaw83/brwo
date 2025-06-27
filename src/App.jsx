import { useState } from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { About_Us } from "./pages/About_Us";
import { Upcoming_Event } from "./pages/Upcoming_Event";
import { Past_Event } from "./pages/Past_Event";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { News } from "./pages/News";
import { Muslim_Aid } from "./pages/news/Muslim_Aid";
import { Earthquake_relief_effort } from "./pages/news/Earthquake_relief_effort";
import { Emergency_relief_for_rohingya } from "./pages/news/Emergency_relief_for_rohingya";
import { Hope_and_hardship } from "./pages/news/Hope_and_hardship";
import { Eid_Mubarak } from "./pages/news/Eid_Mubarak";
import { United_In_Compassion } from "./pages/news/United_In_Compassion";
import { Poem } from "./pages/news/Poem";

import { Strengthening_families_and_community_bonds } from "./pages/news/Strengthening_Families_and_Community_Bonds";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/About_Us" element={<About_Us />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/past_event" element={<Past_Event />} />
        <Route path="/upcoming_event" element={<Upcoming_Event />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/news/Muslim_Aid" element={<Muslim_Aid />} />
        <Route path="/news/eid_mubarak" element={<Eid_Mubarak />} />
        <Route
          path="/news/united_in_compassion"
          element={<United_In_Compassion />}
        />
        <Route
          path="/news/earthquake_relief_effort"
          element={<Earthquake_relief_effort />}
        />
        <Route path="/news/hope_and_hardship" element={<Hope_and_hardship />} />
        <Route
          path="/news/emergency_relief_for_rohingya"
          element={<Emergency_relief_for_rohingya />}
        />
        <Route path="/news/Poem" element={<Poem />} />
        <Route
          path="/news/strengthening_families_and_community_bonds"
          element={<Strengthening_families_and_community_bonds />}
        />
      </Routes>
    </>
  );
}

export default App;
