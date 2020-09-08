import React from "react"
import AdSense from "react-adsense"

const AdContainer = props => {
  return (
    <>
      <div className="adContainer">
        <AdSense.Google
          client="ca-pub-1201474411749621"
          slot="9205903697"
          style={{ display: 'block' }}
          responsive="true"
        />
      </div>
    </>
  )
}

export default AdContainer
