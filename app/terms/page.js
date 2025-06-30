import React from "react";

const terms = () => {
  return (
    <div>
      <main className="h-[66vh] flex justify-center items-center flex-col bg-purple-100 text-center sm:text-left text-sm" >
        <section >
          <div>
            <p>1. Acceptance of Terms</p>
            <p className="pl-9">
              By using linkShortener (the "Service"), you agree to comply with
              these Terms of Service. If you disagree, do not use the Service.
            </p>
          </div>
          <div>
            <p>2. Service Description</p>
            <ol className="pl-9 list-disc">
              <li className="list-disc">We provide a free URL shortening service.</li>
              <li>
                Shortened links are public unless you register for private links
                (if applicable).
              </li>
              <li>
                We reserve the right to modify or discontinue the Service at any
                time.
              </li>
            </ol>
          </div>
          <div>
            <p>4. Link Ownership & Retention</p>
            <ol className="pl-9 list-disc">
                <li>You retain ownership of your original URLs.</li>
                <li>We may remove inactive links after 10 months.</li>
                <li>We are not responsible for broken or redirected links.</li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
};

export default terms;
