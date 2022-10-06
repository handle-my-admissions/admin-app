import React, { useState } from 'react'
import {
  Row, Col, Typography, Button
} from 'antd'
import SelectFieldSection from '../SelectFieldSection'
import './style.css'

interface selectFieldsPropType {
  GlobalLabels: {
    'Personal Details': Array<{}>
    'Ed-Level Details': Array<{}>
    'Education/School Details': Array<{}>
    'Entrance Exam': Array<{}>
    'Document Uploads': Array<{}>
    'Payment Modes': Array<{}>
  }
  setGlobalLabels: React.Dispatch<React.SetStateAction<any>>
}

// are the given labels , add the labels in future , if required
const data = [
  {
    secTitle: 'Personal Details',
    Labels: [
      {
        title: 'First Name',
        type: 'text',
        index: 1,
        value: ''
      },
      {
        title: 'Last Name',
        type: 'text',
        index: 2,
        value: ''
      },
      {
        title: 'Address',
        type: 'text',
        index: 3,
        value: ''
      },
      {
        title: 'Phone no.',
        type: 'number',
        index: 4,
        value: ''
      },
      {
        title: "Guardian's Name",
        type: 'text',
        index: 5,
        value: ''
      },
      {
        title: "Guardian's Phone Number",
        type: 'number',
        index: 6,
        value: ''
      },
      {
        title: 'Gender',
        type: 'option',
        index: 7,
        value: ''
      },
      {
        title: 'Blood Group',
        type: 'option',
        index: 8,
        value: ''
      },
      {
        title: 'Country',
        type: 'option',
        index: 9,
        value: ''
      },
      {
        title: 'Date Of Birth',
        type: 'date',
        index: 10,
        value: ''
      },
      {
        title: 'Cast',
        type: 'text',
        index: 11,
        value: ''
      },
      {
        title: 'Domicile State',
        type: 'text',
        index: 12,
        value: ''
      },
      {
        title: 'Religion',
        type: 'text',
        index: 13,
        value: ''
      }
    ]
  },
  {
    secTitle: 'Ed-Level Details',
    Labels: [
      {
        title: '10th or Equivalent',
        type: 'title',
        index: 1,
        value: ''
      },
      {
        title: '12th or Equivalent',
        type: 'title',
        index: 2,
        value: ''
      },
      {
        title: 'Last Semester',
        type: 'title',
        index: 3,
        value: ''
      },
      {
        title: 'Under Graduate',
        type: 'title',
        index: 4,
        value: ''
      },
      {
        title: 'Post Graduate',
        type: 'title',
        index: 5,
        value: ''
      }
    ]
  },
  {
    secTitle: 'Education/School Details',
    Labels: [
      {
        title: 'School/College Name',
        type: 'text',
        index: 1,
        value: ''
      },
      {
        title: 'Board/University',
        type: 'option/text',
        index: 2,
        value: ''
      },
      {
        title: 'Seat Number/ID',
        type: 'text',
        index: 3,
        value: ''
      },
      {
        title: 'Marks Obtained',
        type: 'number',
        index: 4,
        value: ''
      },
      {
        title: 'Marks Out Of',
        type: 'number',
        index: 5,
        value: ''
      },
      {
        title: 'Percentage',
        type: 'number',
        index: 6,
        value: ''
      },
      {
        title: 'Result Status',
        type: 'option',
        index: 7,
        value: ''
      },
      {
        title: "Institute's Address",
        type: 'text',
        index: 8,
        value: ''
      }
    ]
  },
  {
    secTitle: 'Entrance Exam',
    Labels: [
      {
        title: 'Name',
        type: 'text',
        index: 1,
        value: ''
      },
      {
        title: 'Date Of Appearance',
        type: 'date',
        index: 2,
        value: ''
      },
      {
        title: 'Registration Number',
        type: 'text',
        index: 3,
        value: ''
      },
      {
        title: 'Marks/Rank',
        type: 'number',
        index: 4,
        value: ''
      },
      {
        title: 'Status',
        type: 'option',
        index: 5,
        value: ''
      }
    ]
  },
  {
    secTitle: 'Document Uploads',
    Labels: [
      {
        title: 'Passport Size Photo',
        type: 'image',
        index: 1,
        value: ''
      },
      {
        title: 'AADHAR CARD',
        type: 'image',
        index: 2,
        value: ''
      },
      {
        title: 'LC/TC',
        type: 'pdf',
        index: 3,
        value: ''
      },
      {
        title: 'Marksheet/Result',
        type: 'pdf',
        index: 4,
        value: ''
      },
      {
        title: 'Domicile Certificate',
        type: 'pdf',
        index: 5,
        value: ''
      },
      {
        title: 'ADDRESS PROOF',
        type: 'pdf',
        index: 5,
        value: ''
      }
    ]
  },
  {
    secTitle: 'Payment Modes',
    Labels: [
      {
        title: 'Net Banking',
        type: 'process',
        index: 1,
        value: ''
      },
      {
        title: 'Credit/Debit Card',
        type: 'process',
        index: 2,
        value: ''
      },
      {
        title: 'UPI',
        type: 'process',
        index: 3,
        value: ''
      },
      {
        title: 'Offline',
        type: 'process',
        index: 4,
        value: ''
      }
    ]
  }
]

export default function SelectFields ({ GlobalLabels, setGlobalLabels }: selectFieldsPropType): JSX.Element {
  const [AutoSelected, setAutoSelected] = useState(false)
  return (
    <>
      <Row style={{ marginTop: '1.1em' }}>
        <Col span={24}>
          <Button onClick={() => setAutoSelected(!AutoSelected)}>
            {!AutoSelected ? 'AUTO SELECT FIELDS' : 'CUSTOM SELECT FIELDS'}
          </Button>
          {!AutoSelected ? ' OR' : ' '}
        </Col>
        <Col span={24}>
          <Typography.Text italic>
            {!AutoSelected
              ? 'Drag Drop the fields you want to have in your form'
              : ' '}
          </Typography.Text>
        </Col>
      </Row>
      {!AutoSelected && (
        <Row>
          <Col
            span={12}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography.Text strong>FROM</Typography.Text>
          </Col>
          <Col
            span={12}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography.Text strong>TO</Typography.Text>
          </Col>
        </Row>
      )}
      {!AutoSelected &&
        data.map((item, index) => (
          <SelectFieldSection
            Labels={item.Labels}
            title={item.secTitle}
            GlobalLabels={GlobalLabels}
            setGlobalLabels={setGlobalLabels}
            key={index}
          />
        ))}
    </>
  )
}
