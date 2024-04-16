import SinhVien from "../component/content/Sinhvien";
import Create_sv from "../component/content/crdu-SV/create";
import { useRoutes } from "react-router-dom";
import Homepage from "../pages/home/homepage";

export default function AdminApp() {
    return useRoutes([
      {
        path: '/',
        element: <Homepage/>,
        children: [
          { path: '/administrator/builder/data/sinh-vien.html', element: <SinhVien /> },
         
        ]
      },
      {
        
        path: '/administrator/builder/data/sinh-vien.html',
        element: <SinhVien />,
        children: [
          { path: 'sinhvien', element: <Create_sv /> },
        ]
      },
  
    //   { path: '*', element: <Navigate to="/404" replace /> }
    ]);
  }