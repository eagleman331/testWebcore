import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Database Tps',
  },
  {
    component: CNavGroup,
    name: 'Database',
    to: '/frontEndDataPlatform',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Front UI',
        to: '/frontEndDataPlatform',
      },
     
    ],
  },
  {
    component: CNavTitle,
    name: 'People',
  },
  {
    component: CNavItem,
    name: 'EditPeople',
    to: '/manageUsers',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
 
]

export default _nav
