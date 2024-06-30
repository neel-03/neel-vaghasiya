import ContactForm from '../components/ContactForm'
import { CustomAnchor } from '../components/custom/CustomHTMLTags'
import { heading } from '../components/custom/fonts'

const ContactSection = () => {
  return (
    <div className='pt-6 md:pt-16 px-[7%] max-[1300px]:px-[4%]'>
      <div className={`${heading.className} text-3xl md:text-5xl`}>Get In Touch</div>
      <div className="mt-7 w-full">
        Feel free to reach out to me for any inquiries, collaborations, or just to say hi! I'm always excited to connect with new people and explore interesting opportunities. You can contact me via email at <CustomAnchor href='https://mail.google.com/mail/?view=cm&fs=1&to=neelvaghasiya003@gmail.com' target='_blank'>neelvaghasiya003@gmail.com</CustomAnchor> or fill out the form below. I'll get back to you as soon as possible.
        <ContactForm />
      </div>
      <div id='tools' className="h-[80px] md:h-[60px]"></div>
    </div>
  )
}

export default ContactSection