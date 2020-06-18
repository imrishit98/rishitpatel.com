import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet title="Privacy Policy - RishitPatel.com" />
      <Layout>
        <div className="cContainer privacy-policy">
          <h1>Privacy Policy</h1>
          <p>Privacy Policy and Disclaimer</p>

          <p>
            This privacy policy and disclaimer was last updated and posted on{" "}
            <strong>March 08, 2019</strong>.{" "}
          </p>
          <div className="privacy-body">
            <h5>What Information do we store?</h5>

            <p>
              Any personal information you provide to us including and similar
              to your name and e-mail address will not be released, sold, or
              rented to any entities or individuals outside of RishitPatel.com.
              We, hereby state that we won’t sell, share or provide your email
              ID or any other personal information to any 3rd party services.
              All the information will be solely kept with RishitPatel.com and
              will only be used for sending weekly newsletters or promoting
              services.
            </p>

            <h5>Cookies</h5>

            <p>
              A ‘Cookie’ is a ‘Non-Personal Information’ that is not personally
              identifiable to you and that we automatically collect when you
              access our website with a web browser. It is a small data text
              file that is placed in your browser and allows RishitPatel.com to
              recognize you each time you visit or login to this site.
              RishitPatel.com does not use cookies to store visitor’s
              information. Third party services such as Google Adsense and
              Google Analytics store cookies to track visitors and for better ad
              management. For any concern with a third party, please contact
              them directly.
            </p>

            <h5>Affiliates</h5>

            <p>
              RishitPatel.com uses Amazon associates program for promoting
              products from Amazon through affiliate links. We also use Flipkart
              and Cuelinks affiliate Services for same reasons. Whenever a user
              buys a product from those links, we earn some commission. However,
              we only recommend relevant products that have high ratings and
              positive reviews.
            </p>

            <h5>External Links</h5>

            <p>
              RishitPatel.com does provide links to other websites that are not
              under our direct control. Once you have left RishitPatel.com and
              landed on another site, then it’s their privacy policy that comes
              into action. We won’t be able to control a user’s privacy on
              another site. We cannot also be held liable/accountable for any
              loss/damage occurring as a result of activity on another website.
            </p>

            <h5>Privacy Policy Updates</h5>

            <p>
              We reserve the right to modify this privacy policy at any time.
              You should review this Privacy Policy frequently. If we make
              material changes to this policy, we may notify you on our Website,
              by a blog post, by email, or by any method we determine. The
              method we chose is at our sole discretion. We will also change the
              “Last Updated” date at the beginning of this Privacy Policy. Any
              changes we make to our privacy policy are effective as of this
              Last Updated date and replace any prior Privacy Policies.
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default PrivacyPolicy
