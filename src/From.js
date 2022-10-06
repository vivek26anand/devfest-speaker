import Illustration1 from './images/illustration (1).png';
import Illustration2 from './images/illustration (2).png';
import Illustration3 from './images/illustration (3).png';
import Illustration4 from './images/illustration (4).png';
import Illustration5 from './images/illustration (5).png';
import Illustration6 from './images/illustration (6).png';
const states = [ "Andhra Pradesh",
"Arunachal Pradesh",
"Assam",
"Bihar",
"Chhattisgarh",
"Goa",
"Gujarat",
"Haryana",
"Himachal Pradesh",
"Jammu and Kashmir",
"Jharkhand",
"Karnataka",
"Kerala",
"Madhya Pradesh",
"Maharashtra",
"Manipur",
"Meghalaya",
"Mizoram",
"Nagaland",
"Odisha",
"Punjab",
"Rajasthan",
"Sikkim",
"Tamil Nadu",
"Telangana",
"Tripura",
"Uttarakhand",
"Uttar Pradesh",
"West Bengal",
"Andaman and Nicobar Islands",
"Chandigarh",
"Dadra and Nagar Haveli",
"Daman and Diu",
"Delhi",
"Lakshadweep",
"Puducherry"]
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
                       <div className='md:flex items-center justify-between'>
                        <div className='md:w-1/3 flex flex-col mb-4'>
                            <label htmlFor="fname" className="text-tertiary font-semibold font-sans mb-2">First Name</label>
                            <input type="text" name="fname" id="fname" className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                        <div className='md:w-1/3 flex flex-col mb-4'>
                            <label htmlFor="mname" className="text-tertiary font-semibold font-sans mb-2">Middle Name</label>
                            <input type="text" name="mname" id="mname" className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary"/>
                        </div>
                        <div className='md:w-1/3 flex flex-col mb-4'>
                            <label htmlFor="lname" className="text-tertiary font-semibold font-sans mb-2">Last Name</label>
                            <input type="text" name="lname" id="lname" className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                       </div>
                       {/* Email Conatct and Gender */}
                      
                       <div className='md:flex items-center justify-between'>
                        <div className='md:w-1/3 flex flex-col mb-4'>
                            <label htmlFor="email" className="text-tertiary font-semibold font-sans mb-2">Email</label>
                            <input type="email" name="email" id="email" className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                        <div className='md:w-1/3 flex flex-col mb-4'>
                            <label htmlFor="phone" className="text-tertiary font-semibold font-sans mb-2">Contact No.</label>
                            <input type="tel" name="phone" id="phone" className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary"/>
                        </div>
                        <div className='md:w-1/3 flex flex-col mb-4'>
                            <label htmlFor="gender" className="text-tertiary font-semibold font-sans mb-2">Gender</label>
                            <select className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary">
                                <option></option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
                       </div>

                       {/* City and State */}
                       
                       <div className='md:flex items-center justify-between'>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                            <label htmlFor="city" className="text-tertiary font-semibold font-sans mb-2">City</label>
                            <input type="text" name="city" id="city" className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                            <label htmlFor="state" className="text-tertiary font-semibold font-sans mb-2">State</label>
                            <select className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary">
                               <option></option>
                               {states.map((state)=>(
                                <option key={state} value={state}>{state}</option>
                               ))}
                            </select>
                        </div>
                       </div>
                        <div className='text-lg text-tertiary font-bold'>
                            Socials
                        <hr className='w-full h-4 mt-1 border-t-2'/>
                        </div>

                        {/* Social Links */}
                       
                       <div className='md:flex items-center justify-between'>

                       <div className='md:w-1/2 flex flex-col mb-4'>
                            <label htmlFor="twitter" className="text-tertiary font-semibold font-sans mb-2">Twitter</label>
                            <input type="url" name="twitter" id="twitter" className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                            <label htmlFor="github" className="text-tertiary font-semibold font-sans mb-2">Github</label>
                            <input type="url" name="github" id="github" className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                        
                       </div>

                       <div className='md:flex items-center justify-between'>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                            <label htmlFor="linkedin" className="text-tertiary font-semibold font-sans mb-2">LinkedIn</label>
                            <input type="url" name="linkedin" id="linkedin" className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                            <label htmlFor="website" className="text-tertiary font-semibold font-sans mb-2">Website</label>
                            <input type="url" name="website" id="website" className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                       </div>

                       <div className='text-lg text-tertiary font-bold'>
                            Professional Details
                        <hr className='w-full h-4 mt-1 border-t-2'/>
                        </div>

                        {/* Professional */}
                       
                       <div className='md:flex items-center justify-between'>

                       <div className='md:w-1/2 flex flex-col mb-4'>
                            <label htmlFor="organization" className="text-tertiary font-semibold font-sans mb-2">Organization</label>
                            <input type="text" name="organization" id="organization" className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                            <label htmlFor="designation" className="text-tertiary font-semibold font-sans mb-2">Designation</label>
                            <input type="text" name="designation" id="designation" className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                        <img src={Illustration3} alt="illustration" className='absolute md:w-80 w-0 right-0 mr-10'/>
                       </div>

                       <div className='md:flex items-center justify-between'>

                       <div className='md:w-1/2 flex flex-col mb-4'>
                            <label htmlFor="yearsofexperience" className="text-tertiary font-semibold font-sans mb-2">Years of experience</label>
                            <input type="number" min={0} name="yearsofexperience" id="yearsofexperience" className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                            <label htmlFor="gde" className="text-tertiary font-semibold font-sans mb-2">Are you A GDE ?</label>
                            <select className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary">
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        
                       </div>
                       <div className='md:w-1/2 flex flex-col mb-4'>
                            <label htmlFor="techstack" className="text-tertiary font-semibold font-sans mb-2">Tech Stack</label>
                            <select name="techstack" id="techstack" className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary">
                                <option>MERN</option>
                                <option>Flutter</option>
                                <option>React Native</option>
                                <option>Kotlin</option>
                                <option>Firebase</option>
                                <option>Python - Django</option>
                                <option>LAMP</option>
                                <option>Other</option>
                            </select>
                        </div>
                   
                        <div className='text-lg text-tertiary font-bold'>
                            Session Details
                        <hr className='w-full h-4 mt-1 border-t-2'/>
                        </div>

                        {/* Session */}
                       
                       <div className='md:flex items-center justify-between'>

                       <div className='md:w-1/2 flex flex-col mb-4'>
                            <label htmlFor="topic" className="text-tertiary font-semibold font-sans mb-2">Topic</label>
                            <input type="text" name="topic" id="topic" className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                            <label htmlFor="duration" className="text-tertiary font-semibold font-sans mb-2">Duration</label>
                            <input type="number" name="duration" id="duration" className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                        
                       </div>

                       <div className='flex flex-col mb-4'>
                            <label htmlFor="BriefofTopic" className="text-tertiary font-semibold font-sans mb-2">Brief of Topic</label>
                            <textarea name="BriefofTopic" id="BriefofTopic" className="w-full border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                       

                        <div className='text-lg text-tertiary font-bold'>
                        Preferences
                        <hr className='w-full h-4 mt-1 border-t-2'/>
                        </div>

                        {/* Preferences */}

                        <div className='md:flex items-center justify-between'>

                       <div className='md:w-1/2 flex flex-col mb-4'>
                            <label htmlFor="food" className="text-tertiary font-semibold font-sans mb-2">Food</label>
                            <select className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary">
                                <option>VEG</option>
                                <option>NON VEG</option>
                            </select>
                        </div>
                        <div className='md:w-1/2 flex flex-col mb-4'>
                            <label htmlFor="tshirt" className="text-tertiary font-semibold font-sans mb-2">T Shirt</label>
                            <select className="md:w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
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