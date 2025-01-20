import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Input from './Input';
import { LuSend } from "react-icons/lu";
import { useForm } from 'react-hook-form';
import { makeInquirie } from '../../api/firebase';

export default function Form() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',  // validation only on form submission
        defaultValues: {
            name: '',
            email: '',
            message: '',
        }
    });

    const onSubmit = async (data) => {
        try {
            await makeInquirie(data); // send data
    
            toast.success('Thanks for getting in touch! I will contact you as soon as possible.', {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            
             // form reset after success
            setTimeout(() => {
                reset();
            }, 3100);
            
        } catch (error) {
            console.error(error);  // error log
        }
    };

    return (
        <div className='mt-8'>
            <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    name={'name'} 
                    type={'text'} 
                    placeholder={'Enter your name'} 
                    register={register}
                    {...register('name', {
                        required: 'Name is required.',
                        pattern: {
                            value: /^[A-Za-z가-힣\s]+$/,
                            message: 'Name can only include letters and Korean characters.',
                        },
                    })}
                    errors={errors}
                />
                <Input 
                    name={'email'} 
                    type={'email'} 
                    placeholder={'Enter email'} 
                    register={register}
                    {...register('email', {
                        required: 'Email is required.',
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                            message: 'Invalid email format.',
                        },
                    })}
                    errors={errors}
                />
                <Input 
                    name={'message'} 
                    type={'textarea'} 
                    placeholder={'Enter message'} 
                    register={register}
                    {...register('message', {
                        required: 'Message is required.',
                    })}
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
