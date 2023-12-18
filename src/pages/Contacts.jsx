import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const [form, setform] = useState({ name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })

  }
  
 
  const handleFocus = () => {

  }
  const handleBlur = () => {

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Daniel',
        from_email: 'newtondanny49@gmail.com',
        message: form.message
      }, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(() => {
      setIsLoading(false);
      // TODO: Shpow success message
      // TODO: Hide an alert
      setform({ name: '', email: '', message: ''})
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      // TODO: Show error message
    });
  }
  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            Name
            <input 
              className='input' 
              type='text' 
              name='name'
              placeholder='Jone Doe'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input 
              className='input' 
              type='email' 
              name='email'
              placeholder='JoneDoe@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea 
              className='textarea' 
              name='message'
              rows={4}
              placeholder='Let me know how I can help you!'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button type='submit' 
            className='btn' 
            onFocus={handleFocus} 
            onBlur={handleBlur}
            disabled={isLoading}  
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacts