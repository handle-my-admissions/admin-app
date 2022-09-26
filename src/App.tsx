import './App.css';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { Applications, CalendarPage, Dashboard, Landing, Login, Queries, SignUp, SingleApplication } from './pages';
import { UserContext, UserContextProvider } from './contexts/user';
import { Layout } from 'antd';
import { AppHeader, AppSider } from './components';
import {
  ProfileOutlined, PieChartOutlined, CalendarOutlined, QuestionOutlined, PaperClipOutlined,
} from '@ant-design/icons';
import { PrivateRoute } from './utils/PrivateRoute';
import { useContext } from 'react';
import Notices from './pages/Notices';


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

                  <Route path='adm/applications/:ApplicationId' element={
                    <PrivateRoute>
                      <SingleApplication />
                    </PrivateRoute>
                  } />

                  <Route path='adm/calendar' element={
                    <PrivateRoute>
                      <CalendarPage />
                    </PrivateRoute>
                  } />

                  <Route path="adm/queries" element={
                    <PrivateRoute>
                      <Queries />
                    </PrivateRoute>
                  } />

                  <Route path="adm/notices" element={
                    <PrivateRoute>
                      <Notices />
                    </PrivateRoute>
                  } />

                  <Route path='*' element={<Navigate to='adm' />} />
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
