import './App.css';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { Landing, Login, SignUp } from './pages';
import { UserContextProvider } from './contexts/user';
import { Layout } from 'antd';
import { AppHeader, AppSider } from './components';
import {
  ProfileOutlined, PieChartOutlined, CalendarOutlined, QuestionOutlined, PaperClipOutlined,
} from '@ant-design/icons';

function App() {
  const siderData = [
    { title: 'Dashboard', linkTo: '/adm/', icon: <PieChartOutlined /> },
    { title: 'Applications', linkTo: '/adm/applications', icon: <ProfileOutlined /> },
    { title: 'Calendar', linkTo: '/adm/calendar', icon: <CalendarOutlined /> },
    { title: 'Queries', linkTo: '/adm/queries', icon: <QuestionOutlined /> },
    { title: 'Notices', linkTo: '/adm/notices', icon: <PaperClipOutlined /> },
  ];
  return (
    <BrowserRouter basename='/ap-admin'>
      <UserContextProvider>
        <Layout style={{ minHeight: '100vh' }}>
          <AppHeader />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>

          <Layout className="site-layout">
              <AppSider data={siderData} haveSubMenu isCollapsible />
              
            </Layout>
        </Layout>


      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
