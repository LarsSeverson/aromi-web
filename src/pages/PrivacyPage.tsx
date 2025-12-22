import React from 'react'
import clsx from 'clsx'

const PrivacyPage = () => {
  return (
    <div
      className={clsx(
        'px-4'
      )}
    >
      <div
        className={clsx(
          'max-w-3xl',
          'mx-auto',
          'p-8',
          'rounded-lg'
        )}
      >
        <h1
          className={clsx(
            'text-3xl',
            'font-bold',
            'text-gray-900',
            'mb-8'
          )}
        >
          Privacy Policy
        </h1>

        <p
          className={clsx(
            'text-gray-600',
            'mb-8'
          )}
        >
          This Privacy Policy explains how Aromi collects, uses, and safeguards your information
          when you use our service.
        </p>

        <section
          className={clsx('mb-8')}
        >
          <h2
            className={clsx(
              'text-xl',
              'font-semibold',
              'text-gray-800',
              'mb-4'
            )}
          >
            1. Information Collection
          </h2>

          <p
            className={clsx(
              'text-gray-600',
              'leading-relaxed'
            )}
          >
            Aromi collects information that you voluntarily provide to us when you register for
            an account. This typically includes your email address and basic profile information
            necessary to facilitate your experience.
          </p>
        </section>

        <section
          className={clsx('mb-8')}
        >
          <h2
            className={clsx(
              'text-xl',
              'font-semibold',
              'text-gray-800',
              'mb-4'
            )}
          >
            2. Use of Information
          </h2>

          <p
            className={clsx(
              'text-gray-600',
              'leading-relaxed'
            )}
          >
            We use your information solely to provide, maintain, and protect the Aromi
            platform. This includes account creation, authentication, and communicating
            essential service-related notices.
          </p>
        </section>

        <section
          className={clsx('mb-8')}
        >
          <h2
            className={clsx(
              'text-xl',
              'font-semibold',
              'text-gray-800',
              'mb-4'
            )}
          >
            3. Data Storage and Retention
          </h2>

          <p
            className={clsx(
              'text-gray-600',
              'leading-relaxed'
            )}
          >
            Your personal information is stored securely in our database. We retain this
            information only for as long as is necessary to provide you with our services
            or as required by legal obligations.
          </p>
        </section>

        <section
          className={clsx('mb-8')}
        >
          <h2
            className={clsx(
              'text-xl',
              'font-semibold',
              'text-gray-800',
              'mb-4'
            )}
          >
            4. Information Sharing
          </h2>

          <p
            className={clsx(
              'text-gray-600',
              'leading-relaxed',
              'mb-4'
            )}
          >
            Aromi does not sell, rent, or trade your personal information with third parties.
            We do not share your data with third parties for marketing or advertising purposes.
          </p>

          <p
            className={clsx(
              'text-gray-600',
              'leading-relaxed'
            )}
          >
            We may only disclose information if required to do so by law or to protect
            the rights and safety of our users.
          </p>
        </section>

        <section
          className={clsx('mb-8')}
        >
          <h2
            className={clsx(
              'text-xl',
              'font-semibold',
              'text-gray-800',
              'mb-4'
            )}
          >
            5. Security
          </h2>

          <p
            className={clsx(
              'text-gray-600',
              'leading-relaxed'
            )}
          >
            We implement industry-standard technical and organizational security measures
            to protect your personal information. However, please note that no method
            of electronic transmission or storage is 100% secure.
          </p>
        </section>

        <section
          className={clsx('mb-8')}
        >
          <h2
            className={clsx(
              'text-xl',
              'font-semibold',
              'text-gray-800',
              'mb-4'
            )}
          >
            6. Your Rights
          </h2>

          <p
            className={clsx(
              'text-gray-600',
              'leading-relaxed'
            )}
          >
            You have the right to access, update, or request the deletion of your personal
            data at any time through your account settings or by contacting us directly.
          </p>
        </section>

        <section
          className={clsx('mb-8')}
        >
          <h2
            className={clsx(
              'text-xl',
              'font-semibold',
              'text-gray-800',
              'mb-4'
            )}
          >
            7. Contact Us
          </h2>

          <p
            className={clsx(
              'text-gray-600',
              'leading-relaxed'
            )}
          >
            If you have any questions or concerns about this Privacy Policy or our
            data practices, please contact us at:
          </p>

          <p
            className={clsx(
              'mt-4',
              'text-gray-900',
              'font-medium'
            )}
          >
            privacy@aromi.net
          </p>
        </section>

        <footer
          className={clsx(
            'mt-12',
            'pt-8',
            'border-t',
            'border-gray-200',
            'text-sm',
            'text-gray-500'
          )}
        >
          Last updated: December 2025
        </footer>
      </div>
    </div>
  )
}

export default PrivacyPage