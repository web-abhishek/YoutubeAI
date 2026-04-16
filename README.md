How Router works
================

src/
 ├── components/
 │    ├── Navbar.tsx
 │    ├── Sidebar.tsx
 │
 ├── pages/
 │    ├── Home.tsx
 │    ├── Watch.tsx
 │
 ├── routes/
 │    └── AppRouter.tsx   ✅ (router config here)
 │
 ├── layouts/
 │    └── MainLayout.tsx  ✅ (Outlet here)
 │
 ├── App.tsx              ✅ (RouterProvider here)
 └── main.tsx


App.tsx
  ↓
RouterProvider
  ↓
AppRouter.tsx
  ↓
MainLayout
  ↓
Outlet
  ↓
Home / Watch / etc