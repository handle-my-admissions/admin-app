import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { CustomTable, PageHeader } from '../../components'
import { customTableColumnsData, customTableData } from './data'
import { UserContext } from '../../contexts/user'

export default function ViewSubmittedApplications (): JSX.Element {
  const { user } = useContext(UserContext)
  const [, setData] = useState({})
  useEffect(() => {
    const config = {
      method: 'get',
      url: `${process.env.REACT_APP_API_GATEWAY_BASE_URL}/get_submitted_applicaitons?id=APP-MSCMSC831`,
      headers: {
        Authorization: `Bearer ${user.idToken.jwtToken}`
      }
    }

    axios(config)
      .then((response) => {
        setData(response.data.body.Items)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <PageHeader title="Submitted Applications" />
      <CustomTable data={customTableData} customTableColumnsData={customTableColumnsData} />
    </div>
  )
}
