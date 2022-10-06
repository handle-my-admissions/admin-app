import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './contexts/user'
import { Layout } from 'antd'
import { AppHeader, AppSider } from './components'
import {
  ProfileOutlined, PieChartOutlined, CalendarOutlined, QuestionOutlined, PaperClipOutlined
} from '@ant-design/icons'
import React from 'react'
import { Routes } from './routes'

const { Content } = Layout

function App (): JSX.Element {
  const siderData = [
    { title: 'Dashboard', linkTo: '/adm/', icon: <PieChartOutlined /> },
    { title: 'Applications', linkTo: '/adm/applications', icon: <ProfileOutlined /> },
    { title: 'Calendar', linkTo: '/adm/calendar', icon: <CalendarOutlined /> },
    { title: 'Queries', linkTo: '/adm/queries', icon: <QuestionOutlined /> },
    { title: 'Notices', linkTo: '/adm/notices', icon: <PaperClipOutlined /> }
  ]

  return (
    <BrowserRouter basename='/ap-admin'>
      <UserContextProvider>

        <Layout style={{ minHeight: '100vh' }}>
          <AppHeader />
          <Layout className="site-layout">
            <AppSider data={siderData} haveSubMenu isCollapsible />
            <Layout style={{ minHeight: '100vh' }}>
              <Content style={{ margin: '0 4px' }}>
                <Routes />
              </Content>
            </Layout>
          </Layout>
        </Layout>

      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
