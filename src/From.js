import Illustration1 from './images/illustration (1).png';
import Illustration2 from './images/illustration (2).png';
import Illustration3 from './images/illustration (3).png';
export default function Form(){
    return(
        <>
        <div className="w-full h-screen z-20 bg-secondary relative pt-10">
            <div className="md:mx-10 mx-3 bg-white rounded-2xl px-16 py-8">
              <div className="flex justify-between">
              <h1 className="md:text-5xl text-2xl font-semibold font-sans text-tertiary">Register as a <span className="text-primary">Speaker</span></h1>
              <img src={Illustration2} alt="illustration" className='w-60'/>
              </div>
              <div>
                <form className="flex md:flex-row flex-col" onSubmit={(e)=>{e.preventDefault()}}>
                    <div className='md:w-1/4'>
                    <label htmlFor="file-upload" className="block text-sm font-medium text-tertiary text-center">
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
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/png, image/jpeg, image/jpg" />
                    </label>
                    </div>
                    
                    <div className='flex flex-col md:w-3/4'> 
                       {/* First Last and Middle Name */}
                       <div className='flex items-center justify-between'>
                        <div className='w-1/3 flex flex-col'>
                            <label htmlFor="fname" className="text-tertiary font-semibold font-sans mb-2">First Name</label>
                            <input type="text" name="fname" id="fname" className="w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                        <div className='w-1/3 flex flex-col'>
                            <label htmlFor="mname" className="text-tertiary font-semibold font-sans mb-2">Middle Name</label>
                            <input type="text" name="mname" id="mname" className="w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary"/>
                        </div>
                        <div className='w-1/3 flex flex-col'>
                            <label htmlFor="lname" className="text-tertiary font-semibold font-sans mb-2">Last Name</label>
                            <input type="text" name="lname" id="lname" className="w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                       </div>
                       {/* Email Conatct and Gender */}
                      
                       <div className='flex items-center justify-between mt-5'>
                        <div className='w-1/3 flex flex-col'>
                            <label htmlFor="email" className="text-tertiary font-semibold font-sans mb-2">Email</label>
                            <input type="email" name="email" id="email" className="w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                        <div className='w-1/3 flex flex-col'>
                            <label htmlFor="phone" className="text-tertiary font-semibold font-sans mb-2">Contact No.</label>
                            <input type="tel" name="phone" id="phone" className="w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary"/>
                        </div>
                        <div className='w-1/3 flex flex-col'>
                            <label htmlFor="gender" className="text-tertiary font-semibold font-sans mb-2">Gender</label>
                            <select className="w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
                       </div>

                       {/* City and State */}
                       
                       <div className='flex items-center justify-between mt-5'>
                        <div className='w-1/2 flex flex-col'>
                            <label htmlFor="city" className="text-tertiary font-semibold font-sans mb-2">City</label>
                            <input type="text" name="city" id="city" className="w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary" required/>
                        </div>
                        <div className='w-1/2 flex flex-col'>
                            <label htmlFor="state" className="text-tertiary font-semibold font-sans mb-2">State</label>
                            <select className="w-5/6 border-2 border-tertiary rounded-md px-4 py-2 focus:border-primary focus:ring-primary">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
                       </div>
                       
                    </div>
                    
                    
                </form>
              </div>
            </div>
        </div>
        </>
    )
}