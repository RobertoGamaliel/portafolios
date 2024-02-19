import { useState } from 'react';
import { createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/animations.css';
import './styles/backgroundColors.css';
import './styles/componentsStyles.css';
import './styles/efects.css';
import './styles/loaders.css';
import './styles/positions.css';
import './styles/scaleEffects.css';
import './styles/sizes.css';
import './styles/textColors.css';
import './styles/backgroundGradients.css';
import './styles/images.css';
import './styles/fonts.css';
import MainPage from './pages/mainPage';



function App() {
  const router = createBrowserRouter([
    {
        path: '/portafolios',
        element: <MainPage/>,
        children: [
            {
                path: '',
                element: <MainPage to="/excelSelection" replace/>,
            }
        ]
    },
    {
        path: '/login', 
        element: <MainPage />
    }
  ]);

  const [count, setCount] = useState(0)

  return (
      <>
          <RouterProvider router={router}/>
      </>
  )
}

export default App
