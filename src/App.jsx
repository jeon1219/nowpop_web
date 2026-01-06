import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Popups from "./pages/Popups";
import PopupDetail from "./pages/PopupDetail";
import MyPage from "./pages/MyPage";

const STORAGE_KEY = "nowpop_bookmarks_v1";

export default function App() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      setBookmarks(Array.isArray(parsed) ? parsed : []);
    } catch {
      setBookmarks([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (popupId) => {
    setBookmarks((prev) =>
      prev.includes(popupId) ? prev.filter((id) => id !== popupId) : [...prev, popupId]
    );
  };

  return (
    <>
      <Header />
      <main style={{ minHeight: "calc(100vh - 60px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/popups"
            element={<Popups bookmarks={bookmarks} toggleBookmark={toggleBookmark} />}
          />
          <Route
            path="/popups/:id"
            element={<PopupDetail bookmarks={bookmarks} toggleBookmark={toggleBookmark} />}
          />
          <Route
            path="/mypage"
            element={<MyPage bookmarks={bookmarks} toggleBookmark={toggleBookmark} />}
          />
        </Routes>
      </main>
    </>
  );
}
