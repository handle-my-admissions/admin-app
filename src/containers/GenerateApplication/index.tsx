import React, { useState, useContext } from 'react'
import { notification } from 'antd'
import axios from 'axios'
import { UserContext } from '../../contexts/user'
import { PageHeader, SelectFields } from '../../components'
import './style.css'

// Following are the initial templates for our states
const ApplicationInitialState = {
  // ApplicationID: 'TEST1234',
  title: '',
  description: '',
  branch: '',
  stream: '',
  fees: 1000,
  lastDate: '',
  submittedApplications: []
}
const GlobalInitialState = {
  'Personal Details': [],
  'Ed-Level Details': [],
  'Education/School Details': [],
  'Entrance Exam': [],
  'Document Uploads': [],
  'Payment Modes': []
}
export default function GenerateApplication (): JSX.Element {
  const [ApplicationData, setApplicationData] = useState(ApplicationInitialState)
  const [GlobalLabels, setGlobalLabels] = useState(GlobalInitialState)
  const { user } = useContext(UserContext)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    let temp
    temp = Array.from(ApplicationData.title)
    temp = `APP-${temp[0]}${temp[1]}${temp[2]}${temp[temp.length - 3]}${temp[temp.length - 2]}${temp[temp.length - 1]}${Math.floor(Math.random() * 1000)}`

    //! API CALL HERE
    const data = JSON.stringify({
      ...ApplicationData,
      GlobalLabels,
      ApplicationID: `${temp}`
    })

    const config = {
      method: 'post',
      url: 'https://d4z2bizxa5.execute-api.us-east-1.amazonaws.com/s1/applications',
      headers: {
        Authorization: `Bearer ${user.idToken.jwtToken}`,
        'Content-Type': 'application/json'
      },
      data
    }

    axios(config)
      .then((response) => {
        // eslint-disable-next-line eqeqeq
        if (response.data == 200) {
          // successful creation-> generate NOTIFICATION with message
          notification.open({
            message: 'Application Generated !',
            description:
                            'Application Generated Successfully. To view te generated application move to view application tab.'
          })

          // Reset form after submission
          setApplicationData(ApplicationInitialState)
          setGlobalLabels(GlobalInitialState)
        } else {
          notification.open({
            message: 'Please try Again !'
          })
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="GenerateApplication">
      <PageHeader title="Generate Application" />
      <form autoComplete="off" onSubmit={onSubmit} id="ApplicationForm">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter Title"
          value={ApplicationData.title}
          onChange={(e) => { setApplicationData({ ...ApplicationData, title: e.target.value }) }}
          required
        />

        <input
          type="text"
          id="description"
          name="description"
          placeholder="Enter Description Here"
          value={ApplicationData.description}
          onChange={(e) => {
            setApplicationData({ ...ApplicationData, description: e.target.value })
          }}
          required
        />

        <input
          type="text"
          id="Branch"
          name="Branch"
          placeholder="For Branch"
          value={ApplicationData.branch}
          onChange={(e) => { setApplicationData({ ...ApplicationData, branch: e.target.value }) }}
          required
        />

        <input
          type="text"
          id="stream"
          name="stream"
          placeholder="For stream"
          value={ApplicationData.stream}
          onChange={(e) => { setApplicationData({ ...ApplicationData, stream: e.target.value }) }}
          required
        />

        <input
          type="number"
          id="Fees"
          min={0}
          name="Fees"
          placeholder="Registration Fees"
          value={ApplicationData.fees}
          onChange={(e) => { setApplicationData({ ...ApplicationData, fees: Number(e.target.value) }) }}
          required
        />

        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1.1em' }}>
          <label htmlFor="DueDate">
            Last Date to fill form :
            <br />
            {/* ! check this */}
            <input
              id="DueDate"
              type="date"
              style={{ marginLeft: '0.5em' }}
              value={ApplicationData.lastDate}
              onChange={(e) => {
                setApplicationData({ ...ApplicationData, lastDate: e.target.value })
              }}
              required
            />
          </label>
        </div>

        <SelectFields GlobalLabels={GlobalLabels} setGlobalLabels={setGlobalLabels} />
        <div className="Application_btn_container">
          <input type="submit" value="Generate" />
        </div>
      </form>
    </div>
  )
}
