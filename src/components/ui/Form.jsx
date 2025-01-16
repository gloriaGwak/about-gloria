import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Input from './Input';
import { LuSend } from "react-icons/lu";
import { useForm } from 'react-hook-form';
import { makeInquirie } from '../../api/firebase';

export default function Form() {
    const [success, setSuccess] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit'  // validation only on form submission
    });

    const onSubmit = async (data) => {
        // console.log('Form submitted:', data);  // check form data
        const tt = toast.loading("Sending...");
    
        try {
            await makeInquirie(data); // send data
    
            toast.update(tt, { 
                render: "You made an inquiry successfully!", 
                type: "success", 
                isLoading: false, 
                autoClose: 3000 
            });
            setSuccess(true);
    
            setTimeout(() => {
                setSuccess(false);
                window.location.reload(); // reload after success
            }, 3000);
        } catch (error) {
            console.error(error);  // error log
            toast.update(tt, { 
                render: "Error uploading inquiry", 
                type: "error", 
                isLoading: false, 
                autoClose: 3000 
            });
        }
    };

    return (
        <div className='mt-8'>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    name={'name'} 
                    type={'text'} 
                    placeholder={'Enter name'} 
                    register={register}
                    {...register('name', { required: 'Name is required.' })}
                    errors={errors}
                />
                <Input 
                    name={'email'} 
                    type={'email'} 
                    placeholder={'Enter email'} 
                    register={register}
                    {...register('email', { 
                        required: 'Email is required.', 
                        pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i 
                    })}
                    errors={errors}
                />
                <Input 
                    name={'message'} 
                    type={'textarea'} 
                    placeholder={'Enter message'} 
                    register={register}
                    {...register('message', { required: 'Message is required.' })}
                    errors={errors}
                />
                <div className='md:mt-8 mt-10'>
                    <button className='group block mx-auto px-7 py-3 rounded bg-charcoal text-ivory text-base hover:bg-tealGreen duration-200 lg:w-auto md:text-lg w-full'>
                        Send to Gloria
                        <LuSend className='inline-block h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'/>
                    </button>
                </div>
            </form>
        </div>
    );
}
