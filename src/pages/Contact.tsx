import ContactDetails from '@/components/contacts/ContactDetails'
import ContactForm from '@/components/contacts/ContactForm'
import ContactHero from '@/components/contacts/ContactHero'
import ContactLocation from '@/components/contacts/ContactLocation'

export default function Contact() {
  return (
    <div>
      <ContactHero />

      {/* Details + Form section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactDetails />
        </div>
      </section>

      <ContactLocation />
    </div>
  )
}
