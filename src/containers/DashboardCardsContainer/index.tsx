/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Row } from 'antd'
import { DashboardCard } from '../../components'
import './style.css'
/**
 * is utilized by Dashboard page component
 * @returns JSX component
 */

export default function DashboardCardContainer (): JSX.Element {
  const cardsData = [
    { title: 'Applications', value: '30', data: [15, 19, 12, 5, 2, 3, 15] },
    { title: 'Payments', value: '11', data: [15, 12, 13, 5, 7, 3, 10] },
    { title: 'Queries', value: '15', data: [6, 20, 13, 15, 10, 7, 2] }
  ]

  return (
    <Row className="DashboardCardContainer">
      {cardsData.map((data, index) => (
        <DashboardCard value={data} key={`card-${index}`} />
      ))}
    </Row>
  )
}
