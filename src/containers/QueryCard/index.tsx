/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Typography, Row, Col, Card, Divider,
} from 'antd';
import {
  CheckSquareOutlined, EditOutlined, CloseSquareOutlined, DeleteOutlined,
} from '@ant-design/icons';
import './style.css';

type queryCardPropsType = {
  queryCarddata:any|{}
  email:string
}

export default function QueryCard({ queryCarddata, email }:queryCardPropsType) {
  const [Reply, setReply] = useState(false);
  const [ReplyTextData, setReplyTextData] = useState('');

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setReplyText([...ReplyText,ReplyTextData])
    setReplyTextData('');
    // !API CALL HERE
  };
  return (
    <div className="querycard">
      <Card size="small">
        <Row>
          <Col md={20}>
            <Typography.Title level={5}>
              {queryCarddata.subject}
            </Typography.Title>
          </Col>
          <Col md={4}>
            <Typography.Title level={5}>
              Reply :
              {' '}
              <EditOutlined style={{ fontSize: '1.2em' }} onClick={() => setReply(!Reply)} />
            </Typography.Title>
          </Col>
          <Col md={24}>
            <Typography.Text>
              Description :
              {' '}
              {queryCarddata.querydesc}
            </Typography.Text>
          </Col>

        </Row>
        <Row>

          <Col md={5}>
            <Typography.Text>
              Id :
              {' '}
              {email}
            </Typography.Text>
          </Col>
          <Col md={4}>
            <Typography.Text>Status: </Typography.Text>
            <Typography.Text keyboard type={queryCarddata.querystatus.keyboardtype}>
              {queryCarddata.querystatus.tag}
            </Typography.Text>
          </Col>
          <Col md={4}>
            {queryCarddata.querystatus.tag === 'Solved' ? (
              <>
                Unresolve :
                <CloseSquareOutlined />
              </>
            ) : (
              <>
                Resolve :
                {' '}
                <CheckSquareOutlined />
              </>
            )}
          </Col>

          <Col md={2}>
            <Typography.Text >
              {queryCarddata.querydate}
            </Typography.Text>
          </Col>
          <Col md={5} />
          <Col md={4}>
            Delete :
            {' '}
            <DeleteOutlined />
          </Col>
        </Row>

        {Reply
          && (
          <Row>
            <Col span={24}>
              <Divider />
              <form onSubmit={onSubmit}>
                <input type="text" placeholder="Write your Reply here" value={ReplyTextData} onChange={(e) => setReplyTextData(e.target.value)} />
                <input type="submit" value="Reply" />
                <input type="button" value="Cancel" onClick={() => setReply(!Reply)} />
              </form>
            </Col>
          </Row>
          )}

        {/* <Row>
          <Col span={8}>
            <Typography.Title level={4}>{queryCarddata.subject}</Typography.Title>
          </Col>
          <Col span={3}>
            <Typography.Title level={5}>Query ID: {queryCarddata.queryid}</Typography.Title>
          </Col>
          <Col span={4} offset={1}>
            <Typography.Title level={5}>
              Created On : {queryCarddata.querydate} {queryCarddata.querytime}
            </Typography.Title>
          </Col>
        </Row>

        <Row>
          <Col span={8}>
            <Typography.Text strong>{queryCarddata.querydesc}</Typography.Text>
          </Col>
          <Col span={3}>
            <Typography.Text>Status: </Typography.Text>
            <Typography.Text keyboard type={queryCarddata.querystatus.keyboardtype}>
              {queryCarddata.querystatus.tag}
            </Typography.Text>
          </Col>
          <Col span={4} offset={1}>
            <Typography.Text>Assigned To: </Typography.Text>
            <Typography.Text type="secondary">{queryCarddata.assignee}</Typography.Text>
          </Col>
          <Col span={4} offset={1}>
            <Typography.Text>Assigned To: </Typography.Text>
            <Typography.Text type="secondary">{queryCarddata.assignee}</Typography.Text>
          </Col>
        </Row> */}
      </Card>
    </div>
  );
}
