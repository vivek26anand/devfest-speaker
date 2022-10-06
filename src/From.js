import Illustration1 from './images/illustration (1).png';
import Illustration2 from './images/illustration (2).png';
import Illustration3 from './images/illustration (3).png';
import Illustration4 from './images/illustration (4).png';
import Illustration5 from './images/illustration (5).png';
import Illustration6 from './images/illustration (6).png';
import { Input, Select, Option, Textarea } from '@material-tailwind/react';


export default function Form(){
    
    return(
        <>
        <div className="w-full z-20 bg-secondary relative md:py-10 py-5">
            <div className="md:mx-10 mx-3 bg-white rounded-2xl md:px-16 px-4 py-8 border-2 border-secondary">
              <div className="flex justify-between">
              <h1 className="md:text-5xl text-2xl font-semibold font-sans text-tertiary">Register as a <span className="text-primary">Speaker</span></h1>
              <img src={Illustration2} alt="illustration" className='md:w-60 w-40'/>
              </div>
              <div>
                <form className="flex md:flex-row flex-col">
                    <div className='md:w-1/4 flex flex-col justify-between'>
                    <label htmlFor="file-upload" className="text-sm font-medium text-tertiary flex flex-col items-center cursor-pointer">
                            Profile Photo
                        <div className="mt-1 sm:col-span-2 sm:mt-0 pt-2">
                            <div className="flex items-center justify-center">
                            <span className="w-1/2 overflow-hidden rounded-full bg-gray-100">
                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </span>
                            </div>
                        </div>
                        <div className='mt-4 mb-6 border-2 rounded-md px-2 py-1 text-tertiary border-tertiary w-1/3 text-center'>
                            Change
                        </div>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/png, image/jpeg, image/jpg" />
                    </label>
                    <img src={Illustration4} alt="illustration" className='md:w-60 w-0 -ml-6 -mt-4'/>
                    <img src={Illustration6} alt="illustration" className='md:w-60 w-0 ml-6'/>
                    <img src={Illustration1} alt="illustration" className='md:w-60 w-0 -ml-6'/>
                    </div>
                    
                    <div className='flex flex-col md:w-3/4'> 
                       <div className='text-lg text-tertiary font-bold'>
                        Personal Information
                        <hr className='w-full h-4 mt-1 border-t-2'/>
                       </div>
                       {/* First Last and Middle Name */}
                       <div className='md:flex items-center justify-between gap-3'>
                        <div className='md:w-1/3 flex flex-col mb-4'>
                            <Input label='First Name' color='yellow' size='lg'/>
                        </div>
                        <div className='md:w-1/3 flex flex-col mb-4'>
                            <Input label='Middle Name' color='yellow' size='lg'/>
                        </div>
                        <div className='md:w-1/3 flex flex-col mb-4'>
                            <Input label='Last Name' color='yellow' size='lg'/>
                        </div>
                       </div>
                       {/* Email Conatct and Gender */}
                      
                       <div className='md:flex items-center justify-between gap-3'>
                        <div className='md:w-1/3 flex flex-col mb-4'>
                        <Input label='Email' color='yellow' size='lg'/>
                        </div>
                        <div className='md:w-1/3 flex flex-col mb-4'>
                        <Input label='Phone no.' color='yellow' size='lg'/>
                        </div>
                        <div className='md:w-1/3 flex flex-col mb-4'>
                            <Select label="Gender" size="lg" color='yellow'>
                                <Option></Option>
                                <Option>Male</Option>
                                <Option>Female</Option>
                                <Option>Others</Option>
                            </Select>
                        </div>
                       </div>

                       {/* City and State */}
                       
                       <div className='md:flex items-center justify-between gap-3'>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                            <Input label='City' color='yellow' size='lg'/>
                        </div>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                            <Select label="State" size="lg" color="yellow">
                               <Option></Option>
                               <Option>Andhra Pradesh</Option><Option>Arunachal Pradesh</Option><Option>Assam</Option><Option>Bihar</Option><Option>Chhattisgarh</Option><Option>Goa</Option><Option>Gujarat</Option><Option>Haryana</Option><Option>Himachal Pradesh</Option><Option>Jammu and Kashmir</Option><Option>Jharkhand</Option><Option>Karnataka</Option><Option>Kerala</Option><Option>Madhya Pradesh</Option><Option>Maharashtra</Option><Option>Manipur</Option><Option>Meghalaya</Option><Option>Mizoram</Option><Option>Nagaland</Option><Option>Odisha</Option><Option>Punjab</Option><Option>Rajasthan</Option><Option>Sikkim</Option><Option>Tamil Nadu</Option><Option>Telangana</Option><Option>Tripura</Option><Option>Uttarakhand</Option><Option>Uttar Pradesh</Option><Option>West Bengal</Option><Option>Andaman and Nicobar Islands</Option><Option>Chandigarh</Option><Option>Dadra and Nagar Haveli</Option><Option>Daman and Diu</Option><Option>Delhi</Option><Option>Lakshadweep</Option><Option>Puducherry</Option>
                            </Select>
                        </div>
                       </div>
                        <div className='text-lg text-tertiary font-bold'>
                            Socials
                        <hr className='w-full h-4 mt-1 border-t-2'/>
                        </div>

                        {/* Social Links */}
                       
                       <div className='md:flex items-center justify-between gap-3'>

                       <div className='md:w-1/2 flex flex-col mb-4'>
                            <Input label='Twitter' color='yellow' size='lg'/>
                        </div>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                          <Input label='GitHub' color='yellow' size='lg'/>
                        </div>
                        
                       </div>

                       <div className='md:flex items-center justify-between gap-3'>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                          <Input label='LinkedIn' color='yellow' size='lg'/>
                        </div>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                          <Input label='Website' color='yellow' size='lg'/>
                        </div>
                       </div>

                       <div className='text-lg text-tertiary font-bold'>
                            Professional Details
                        <hr className='w-full h-4 mt-1 border-t-2'/>
                        </div>

                        {/* Professional */}
                       
                       <div className='md:flex items-center justify-between gap-3'>

                       <div className='md:w-1/2 flex flex-col mb-4'>
                          <Input label='Organisation' color='yellow' size='lg'/>
                        </div>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                            <Input label='Designation' color='yellow' size='lg'/>
                        </div>
                        <img src={Illustration3} alt="illustration" className='absolute md:w-80 w-0 right-0 mr-10'/>
                       </div>

                       <div className='md:flex items-center justify-between gap-3'>

                       <div className='md:w-1/2 flex flex-col mb-4'>
                            <Input label='Years of experience' color='yellow' size='lg'/>
                        </div>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                            <Select label='Are you a GDE ?' color='yellow' size='lg'>
                               <Option>No</Option>
                               <Option>Yes</Option>
                            </Select>
                        </div>
                        
                       </div>
                       <div className='md:w-1/2 flex flex-col mb-4'>
                            <Select label='Tech Stack'>
                               <Option>MERN</Option>
                                <Option>Flutter</Option>
                                <Option>React Native</Option>
                                <Option>Kotlin</Option>
                                <Option>Firebase</Option>
                                <Option>Python - Django</Option>
                                <Option>LAMP</Option>
                                <Option>Other</Option>
                            </Select>
                        </div>
                   
                        <div className='text-lg text-tertiary font-bold'>
                            Session Details
                        <hr className='w-full h-4 mt-1 border-t-2'/>
                        </div>

                        {/* Session */}
                       
                       <div className='md:flex items-center justify-between gap-3'>

                       <div className='md:w-1/2 flex flex-col mb-4'>
                            <Input label='Session Topic' color='yellow' size='lg'/>
                        </div>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                           <Input label='Duration' color='yellow' size='lg'/>
                        </div>
                        
                       </div>

                       <div className='flex flex-col mb-4'>
                            <Textarea label='Session Description' color='yellow' size='lg'/>
                        </div>
                       

                        <div className='text-lg text-tertiary font-bold'>
                        Preferences
                        <hr className='w-full h-4 mt-1 border-t-2'/>
                        </div>

                        {/* Preferences */}

                        <div className='md:flex items-center justify-between gap-3'>

                       <div className='md:w-1/2 flex flex-col mb-4'>
                            <Select label='Food' size='lg' color='yellow'>
                                <Option>VEG</Option>
                                <Option>NON VEG</Option>
                            </Select>
                        </div>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                            <Select label='Shirt Size' size='lg' color='yellow'>
                                <Option>S</Option>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                            </Select>
                        </div>
                        <img src={Illustration5} alt="illustration" className='md:w-80 w-0'/>
                       </div>
                       <input type="submit" value="Submit" className="mt-5 w-full bg-primary text-white font-bold py-2 px-4 rounded-md cursor-pointer"/>
                    </div>
                </form>
              </div>
            </div>
        </div>
        </>
    )
}