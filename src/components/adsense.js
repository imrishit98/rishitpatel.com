import * as React from "react"

const Adsense = ({ client, slot, format = "auto" }) => {
  return (
    <div>
      <ins
        className="adsbygoogle"
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
      ></ins>
    </div>
  )
}

export default Adsense
