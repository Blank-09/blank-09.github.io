import React from 'react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="container mx-auto border-b">
      <div className="py-20">
        <h2 className="text-4xl font-bold text-center">Contact</h2>
        <p className="text-lg text-center">
          You can reach me at{' '}
          <a href="mailto:" className="hover:text-orange-500">
            Email
          </a>{' '}
          or{' '}
          <a href="tel:" className="hover:text-orange-500">
            Phone
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contact
