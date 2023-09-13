import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/footer';
import Layout from '@/components/Layout';

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !subject || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Send the email data to your server or email service
        const emailData = {
            firstName,
            lastName,
            email,
            subject,
            message,
        };

        // Reset the form after submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <Layout>
        <div className=' bg-gradient-to-l from-gray-100 to-gray-100 h-full  tracking-wider'>
            <Navbar />
            <div>
                <div className="font-montserrat container max-w-5xl mx-auto px-4 py-4 md:py-8">
                    <form onSubmit={handleSubmit}>
                        <div className='md:grid md:grid-cols-2 md:mb-36'>
                            <div className='space-y-3 mt-10'>
                                <div>
                                    <h1 className='text-4xl font-bold'>Contact</h1>
                                    <p className='font-light mt-2'>Looking Forward to hearing from you</p>
                                </div>
                                <div>
                                    <h1 className='text-2xl font-medium'>Phone</h1>
                                    <p className='font-light mt-2'>+91 9056300043</p>
                                </div>
                                <div>
                                    <h1 className='text-2xl font-medium'>Email</h1>
                                    <p className='font-light mt-2'>ankitach4650@gmail.com</p>
                                </div>
                            </div>
                            <div className='md:mt-8 space-y-4'>
                                <div className='md:flex md:space-x-4'>
                                    <div className='flex flex-col'>
                                        <label className='font-light'>First Name</label>
                                        <input
                                            className='mt-2 border border-black'
                                            type="text"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='font-light'>Last Name</label>
                                        <input
                                            className='mt-2 border border-black'
                                            type="text"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='md:flex md:space-x-4'>
                                    <div className='flex flex-col'>
                                        <label className='font-light'>Email</label>
                                        <input
                                            className='mt-2 border border-black'
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='font-light'>Subject</label>
                                        <input
                                            className='mt-2 border border-black'
                                            type="text"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='md:flex items-center md:space-x-4'>
                                    <div className='flex flex-col first-letter:'>
                                        <label className='font-light'>Message</label>
                                        <textarea
                                            cols={25}
                                            rows={5}
                                            className='mt-2 border border-black'
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button className='mt-4' type="submit">
                                        <div className="bg-my-yellow hover:bg-transparent rounded-full h-32 w-32 font-bold text-lg border border-black flex flex-col justify-center">Submit</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
        </Layout>
    );
};

export default Contact;
