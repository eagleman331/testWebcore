import PropTypes from 'prop-types'
import React from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCode, cilMediaPlay } from '@coreui/icons'

import packageJson from '../../package.json'

const DocsExample = (props) => {
  const { children, href } = props

 

  return (
    <div className="example">
      <CNav variant="tabs">
        <CNavItem>
        
            <CIcon icon={cilMediaPlay} className="me-2" />
            Preview

        </CNavItem>
        
      </CNav>
      <CTabContent className="rounded-bottom">
        <CTabPane className="p-3 preview" visible>
          {children}
        </CTabPane>
      </CTabContent>
    </div>
  )
}

DocsExample.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
}

export default React.memo(DocsExample)
