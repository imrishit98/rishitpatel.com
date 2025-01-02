export const metadata = {
  title: 'Privacy Policy | Rishit Patel',
  description: 'Privacy Policy and disclaimer for RishitPatel.com',
};

export default function PrivacyPolicy() {
  return (
    <main className='container mx-auto px-4 py-8 max-w-3xl'>
      <h1 className='text-4xl font-bold mb-6'>Privacy Policy and Disclaimer</h1>
      <p className='text-muted-foreground mb-6'>Last updated on March 08, 2019</p>

      <section className='space-y-6'>
        <div>
          <h2 className='text-2xl font-semibold mb-3'>What Information do we store?</h2>
          <p className='text-muted-foreground'>
            Any personal information you provide to us including and similar to your name
            and e-mail address will not be released, sold, or rented to any entities or
            individuals outside of RishitPatel.com. We, hereby state that we won't sell,
            share or provide your email ID or any other personal information to any 3rd
            party services. All the information will be solely kept with RishitPatel.com
            and will only be used for sending weekly newsletters or promoting services.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-3'>Cookies</h2>
          <p className='text-muted-foreground'>
            A 'Cookie' is a 'Non-Personal Information' that is not personally
            identifiable to you and that we automatically collect when you access our
            website with a web browser. It is a small data text file that is placed in
            your browser and allows RishitPatel.com to recognize you each time you visit
            or login to this site. RishitPatel.com does not use cookies to store
            visitor's information. Third party services such as Google Adsense and Google
            Analytics store cookies to track visitors and for better ad management. For
            any concern with a third party, please contact them directly.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-3'>Affiliates</h2>
          <p className='text-muted-foreground'>
            RishitPatel.com uses Amazon associates program for promoting products from
            Amazon through affiliate links. We also use Flipkart and Cuelinks affiliate
            Services for same reasons. Whenever a user buys a product from those links,
            we earn some commission. However, we only recommend relevant products that
            have high ratings and positive reviews.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-3'>External Links</h2>
          <p className='text-muted-foreground'>
            RishitPatel.com does provide links to other websites that are not under our
            direct control. Once you have left RishitPatel.com and landed on another
            site, then it's their privacy policy that comes into action. We won't be able
            to control a user's privacy on another site. We cannot also be held
            liable/accountable for any loss/damage occurring as a result of activity on
            another website.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-semibold mb-3'>Privacy Policy Updates</h2>
          <p className='text-muted-foreground'>
            We reserve the right to modify this privacy policy at any time. You should
            review this Privacy Policy frequently. If we make material changes to this
            policy, we may notify you on our Website, by a blog post, by email, or by any
            method we determine. The method we chose is at our sole discretion. We will
            also change the "Last Updated" date at the beginning of this Privacy Policy.
            Any changes we make to our privacy policy are effective as of this Last
            Updated date and replace any prior Privacy Policies.
          </p>
        </div>
      </section>
    </main>
  );
}
