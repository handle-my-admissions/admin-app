import './style.css';
import React from 'react';
import { Row, Col, Typography } from 'antd';
import { DashboardCardsContainer } from '../../containers';
import { CustomTable, PageHeader } from '../../components';
import PieChart from '../../utils/charts/PieChart';
import { customTableData, customTableColumnsData } from './data';

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <PageHeader title="Dashboard" />
      <DashboardCardsContainer />
      <Row>
        <Col md={14} lg={14} sm={24}>
          <div className="TABLE_Container" style={{ margin: '1.2em 1.4em' }}>
            <Typography.Title level={5} style={{ marginBottom: '1.1em' }}>Recent Applicants</Typography.Title>
            <CustomTable data={customTableData} customTableColumnsData={customTableColumnsData} />
          </div>
        </Col>
        <Col md={10} lg={10} sm={24}>
          <div className="Institute_Applicant_distribution" style={{ height: '81%' }}>
            <Typography.Title level={5} style={{ marginBottom: '1.1em' }}>Institute Favors</Typography.Title>

            <div className="PieChart_Container" style={{ height: '95%' }}>
              <PieChart />
            </div>
          </div>

        </Col>
      </Row>
    </div>
  );
}
