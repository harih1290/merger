import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="http://withinloop.coolpage.biz" target="_blank" rel="noopener noreferrer">
          Withinloop
        </a>
        <span className="ms-1">&copy; 2022 Open Source.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          Novac Technology &amp; Solution..
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
