import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/home/Home.jsx';
import Project from './pages/projects/Projects.jsx';
import About from './pages/about/About.jsx';
import Experience from './pages/experience/Experience.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, Component: Home },
      {
        path: 'projects', Component: Project
      },
      {
        path: 'about', Component: About
      },
      {
        path: 'experience', Component: Experience
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,

)
