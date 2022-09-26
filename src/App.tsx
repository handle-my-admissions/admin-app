import './App.css';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { Dashboard, Landing, Login, SignUp } from './pages';
import { UserContext, UserContextProvider } from './contexts/user';
import { Layout } from 'antd';
import { AppHeader, AppSider } from './components';
import {
  ProfileOutlined, PieChartOutlined, CalendarOutlined, QuestionOutlined, PaperClipOutlined,
} from '@ant-design/icons';
import { PrivateRoute } from './utils/PrivateRoute';
import { useContext } from 'react';
import CalendarPage from './pages/CalendarPage';
import Applications from './pages/Applications';
import SingleApplication from './pages/SingleApplication';

const { Content } = Layout;

function App() {
  const siderData = [
    { title: 'Dashboard', linkTo: '/adm/', icon: <PieChartOutlined /> },
    { title: 'Applications', linkTo: '/adm/applications', icon: <ProfileOutlined /> },
    { title: 'Calendar', linkTo: '/adm/calendar', icon: <CalendarOutlined /> },
    { title: 'Queries', linkTo: '/adm/queries', icon: <QuestionOutlined /> },
    { title: 'Notices', linkTo: '/adm/notices', icon: <PaperClipOutlined /> },
  ];

  const { user } = useContext(UserContext);
  return (
    <BrowserRouter basename='/ap-admin'>
      <UserContextProvider>
        <Layout style={{ minHeight: '100vh' }}>
          <AppHeader />

          <Layout className="site-layout">
            <AppSider data={siderData} haveSubMenu isCollapsible />
            <Layout style={{ minHeight: '100vh' }}>
              <Content style={{ margin: '0 4px' }}>
                <Routes>
                  <Route path='/' element={<Landing />} />
                  <Route path='login' element={<Login />} />
                  <Route path='signup' element={<SignUp />} />
                  <Route path='adm' element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  } />

                  <Route path='adm/applications' element={
                    <PrivateRoute>
                      <Applications />
                    </PrivateRoute>
                  } />
                  <Route path='adm/calendar' element={
                    <PrivateRoute>
                      <CalendarPage />
                    </PrivateRoute>
                  } />

                  <Route path='adm/applications/:ApplicationId' element={
                    <PrivateRoute>
                      <SingleApplication />
                    </PrivateRoute>
                  } />
                </Routes>
              </Content>
            </Layout>

          </Layout>
        </Layout>


      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
