import React, { lazy, useContext, useEffect, useState } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import { cilList, cilShieldAlt, cilMinus, cilPenAlt, cilWeightlifitng } from '@coreui/icons'

import { Link } from 'react-router-dom'
import { db, functions } from './../../Firebase'
// import addAdminRole from "./../../addFunctions"

import grantModeratorRole from './../../addFunctions'

import { AuthContext } from '../../contexts/AuthContext'
import { Alert } from '@coreui/coreui'

const ManageUsers = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const { currentUser, currentUserUid } = useContext(AuthContext)
  const [people, setPeople] = useState([])
  const [visible, setVisible] = useState(false)
  const [deleteUser, setDeleteUser] = useState(false)
  const [unit, setUnit] = useState('newUser')
  const [admin, setAdmin] = useState(false)
  const [visibleAdmin, setVisibleAdmin] = useState(false)
  const [adminStatus, setAdminStatus] = useState(false)
  const [userId, setUserId] = useState(null)

  const [user, setUser] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  const [uid, setUid] = useState(null)
  const selectAdmin = () => {
    const addEmail = 'biim@gmail.com'
    const AddAdmin = functions.httpsCallable('addAdminRole')
    AddAdmin({ email: addEmail }).then((result) => {
      console.log(result)
    })
  }

  const onPressAlert = () => {
    setVisibleAlert(true)
  }
  const pindotUser = () => {
    const Listahan = functions.httpsCallable('listUsers')
    Listahan().then((result) => {
      console.log(result)
    })
  }

  const changeUserRole = () => {
    const AddUnit = functions.httpsCallable('addUserRole')
    AddUnit({ email: user, unit: unit }).then((result) => {
      console.log('result', result)
    })
    db.collection('users').doc(uid).update({
      unit: unit,
    })
    setVisible(false)
  }
  const addAdminRole = () => {
    const AddUnit = functions.httpsCallable('addAdminRole')
    if (admin == true) {
      AddUnit({ email: user }).then((result) => {
        console.log('result', result)
      })
      db.collection('users').doc(uid).update({
        admin: true,
      })
    }
    setVisible(false)
  }
  const deleteUserFirebase = () => {
    const DelUser = functions.httpsCallable('deleteUser')
    if (admin == true) {
      DelUser({ uid: uid }).then((result) => {
        console.log('Delete User', userId)
      })
      db.collection('users').doc(uid).delete()
    }
  }
  useEffect(() => {
    const unsubscribe = db.collection('users').onSnapshot((snapshot) =>
      setPeople(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      ),
    )
  }, [])

  return (
    <>
      <CRow>
        {/* Modal */}
        <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Edit Roles</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <h5>Change User Unit Assignment</h5>
            <p>
              Choose the Unit..... {'  '}
              <CDropdown>
                <CDropdownToggle color="secondary">{unit} Unit</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem type="text" id="unit" onClick={() => setUnit('CPOT')} href="#">
                    CPOT
                  </CDropdownItem>
                  <CDropdownItem type="text" id="unit" onClick={() => setUnit('Charlie')} href="#">
                    Charlie Company
                  </CDropdownItem>
                  <CDropdownItem type="text" id="unit" onClick={() => setUnit('Officer')} href="#">
                    Others
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </p>
            {/* <hr />
            <h5>Change Roles ADMIN</h5>
            <p>
              Change User Role..... {'  '}
              <CDropdown>
                <CDropdownToggle color="secondary">
                  {admin ? 'Admin' : 'Normal User'}
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem type="text" id="unit" onClick={() => setAdmin(true)} href="#">
                    ADMIN
                  </CDropdownItem>
                  <CDropdownItem type="text" id="unit" onClick={() => setAdmin(false)} href="#">
                    Normal User
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </p> */}
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton onClick={changeUserRole} color="primary">
              Save changes
            </CButton>
          </CModalFooter>
        </CModal>
        {/* Modal */}

        {/* Modal For Admin */}
        <CModal alignment="center" visible={visibleAdmin} onClose={() => setVisibleAdmin(false)}>
          <CModalHeader>
            <CModalTitle>Edit Admin</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <h5>Change Admin Role of user</h5>
            <p>
              Please Edit the ${adminStatus} {'  '}
              <CDropdown>
                <CDropdownToggle color="secondary">
                  {admin ? 'Admin' : 'Normal User'}
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem type="text" id="unit" onClick={() => setAdmin(true)} href="#">
                    ADMIN
                  </CDropdownItem>
                  <CDropdownItem type="text" id="unit" onClick={() => setAdmin(false)} href="#">
                    Normal User
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </p>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisibleAdmin(false)}>
              Cancel
            </CButton>
            <CButton
              onClick={() => {
                addAdminRole()
                setVisibleAdmin(false)
              }}
              color="primary"
            >
              ChangeAdmin
            </CButton>
          </CModalFooter>
        </CModal>
        {/* Modal */}

        {/* Delete Modal */}
        <CModal alignment="center" visible={deleteUser} onClose={() => setDeleteUser(false)}>
          <CModalHeader>
            <CModalTitle>Edit Roles</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <h5>Are you sure to Delete {user}</h5>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setDeleteUser(false)}>
              Cancel
            </CButton>
            <CButton
              onClick={() => {
                deleteUserFirebase()
                setDeleteUser(false)
              }}
              color="primary"
            >
              Are you sure Deleting this {user}
            </CButton>
          </CModalFooter>
        </CModal>
        {/* Delete */}
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Traffic {' & '} Sales</CCardHeader>
            <CCardBody>
              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>Email</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">UID</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Unit</CTableHeaderCell>

                    <CTableHeaderCell className="text-center">Admin</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Edit</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Delete</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {people.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={avatar1} status={'success'} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.data.name}</div>
                        <div className="small text-medium-emphasis">{item.data.email}</div>
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        <div>{item.id}</div>
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        <div>{item.data.unit}</div>
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        <CButton
                          variant="ghost"
                          onClick={() => {
                            setAdminStatus(item.data.admin)

                            setUser(item.data.email)
                            setVisibleAdmin(true)
                          }}
                        >
                          {item.data.admin ? 'true' : 'false'}
                        </CButton>
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        <CButton
                          variant="ghost"
                          onClick={() => {
                            setUser(item.data.email)
                            setUid(item.data.uid)
                            setVisible(true)
                          }}
                        >
                          <CIcon size="xl" icon={cilPenAlt} title={'USA'} />
                        </CButton>
                      </CTableDataCell>

                      <CTableDataCell className="text-center">
                        <CButton
                          variant="ghost"
                          onClick={() => {
                            setUser(item.data.email)
                            setUid(item.data.uid)
                            setDeleteUser(true)
                          }}
                        >
                          <CIcon size="xl" icon={cilMinus} title={'USA'} />
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>

              <br />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ManageUsers
