import Illustration1 from "./images/illustration (1).png";
import Illustration2 from "./images/illustration (2).png";
import Illustration3 from "./images/illustration (3).png";
import Illustration4 from "./images/illustration (4).png";
import Illustration5 from "./images/illustration (5).png";
import Illustration6 from "./images/illustration (6).png";
import { Input, Select, Option, Textarea } from "@material-tailwind/react";

export default function Form() {
    return (
        <>
            <div className="w-full z-20 bg-secondary relative lg:py-10 py-5 form-background">
                <div className="lg:mx-16 mx-3 bg-white rounded-2xl lg:px-12 md:px-8 px-4 py-8 border-2 border-secondary">
                    <div className="flex justify-center items-center pb-8">
                        <h1 className="lg:text-5xl text-3xl font-semibold font-sans text-tertiary">
                            Register as a
                            <span className="text-primary"> Speaker</span>
                        </h1>
                    </div>
                    <div>
                        <form className="flex lg:flex-row flex-col items-center justify-center">
                            <div className="flex flex-col lg:w-3/4">
                                <img
                                    src={Illustration4}
                                    alt="illustration"
                                    className="absolute lg:w-56 md:w-48 w-0 left-0 ml-16 top-20"
                                />
                                <img
                                    src={Illustration2}
                                    alt="illustration"
                                    className="absolute lg:w-80 md:w-48 w-0 right-0 top-20 mr-16"
                                />
                                <img
                                    src={Illustration6}
                                    alt="illustration"
                                    className="absolute lg:w-60 md:w-60 w-0 left-0 ml-10 top-1/2"
                                />
                                <img
                                    src={Illustration3}
                                    alt="illustration"
                                    className="absolute lg:w-60 md:w-40 w-0 right-0 top-1/3 mr-16"
                                />
                                <img
                                    src={Illustration1}
                                    alt="illustration"
                                    className="absolute lg:w-80 md:w-60 w-0 left-0 bottom-10 ml-10"
                                />
                                <img
                                    src={Illustration5}
                                    alt="illustration"
                                    className="absolute lg:w-80 md:w-60 w-0 bottom-12 right-0 mr-12"
                                />
                                <div className="text-lg text-tertiary font-bold">
                                    Personal Information
                                    <hr className="w-full h-4 mt-1 border-t-2" />
                                </div>
                                {/* First Last and Middle Name */}
                                <div className="lg:flex items-center justify-between gap-3">
                                    <div className="lg:w-1/3 flex flex-col mb-4">
                                        <Input
                                            label="First Name*"
                                            color="orange"
                                            size="lg"
                                            required
                                        />
                                    </div>
                                    <div className="lg:w-1/3 flex flex-col mb-4">
                                        <Input
                                            label="Middle Name"
                                            color="orange"
                                            size="lg"
                                        />
                                    </div>
                                    <div className="lg:w-1/3 flex flex-col mb-4">
                                        <Input
                                            label="Last Name*"
                                            color="orange"
                                            size="lg"
                                            required
                                        />
                                    </div>
                                </div>
                                {/* Email Conatct and Gender */}

                                <div className="lg:flex items-center justify-between gap-3">
                                    <div className="lg:w-1/3 flex flex-col mb-4">
                                        <Input
                                            label="Email*"
                                            color="orange"
                                            size="lg"
                                            required
                                        />
                                    </div>
                                    <div className="lg:w-1/3 flex flex-col mb-4">
                                        <Input
                                            label="Phone no.*"
                                            color="orange"
                                            size="lg"
                                            required
                                        />
                                    </div>
                                    <div className="lg:w-1/3 flex flex-col mb-4">
                                        <Select
                                            label="Gender*"
                                            size="lg"
                                            color="orange"
                                            required
                                        >
                                            <Option></Option>
                                            <Option>Male</Option>
                                            <Option>Female</Option>
                                            <Option>Others</Option>
                                        </Select>
                                    </div>
                                </div>

                                {/* City and State */}

                                <div className="lg:flex items-center justify-between gap-3">
                                    <div className="lg:w-1/3 flex flex-col mb-4">
                                        <Input
                                            label="City*"
                                            color="orange"
                                            size="lg"
                                            required
                                        />
                                    </div>
                                    <div className="lg:w-1/3 flex flex-col mb-4">
                                        <Select
                                            label="State*"
                                            size="lg"
                                            color="orange"
                                            required
                                        >
                                            <Option></Option>
                                            <Option>Andhra Pradesh</Option>
                                            <Option>Arunachal Pradesh</Option>
                                            <Option>Assam</Option>
                                            <Option>Bihar</Option>
                                            <Option>Chhattisgarh</Option>
                                            <Option>Goa</Option>
                                            <Option>Gujarat</Option>
                                            <Option>Haryana</Option>
                                            <Option>Himachal Pradesh</Option>
                                            <Option>Jammu and Kashmir</Option>
                                            <Option>Jharkhand</Option>
                                            <Option>Karnataka</Option>
                                            <Option>Kerala</Option>
                                            <Option>Madhya Pradesh</Option>
                                            <Option>Maharashtra</Option>
                                            <Option>Manipur</Option>
                                            <Option>Meghalaya</Option>
                                            <Option>Mizoram</Option>
                                            <Option>Nagaland</Option>
                                            <Option>Odisha</Option>
                                            <Option>Punjab</Option>
                                            <Option>Rajasthan</Option>
                                            <Option>Sikkim</Option>
                                            <Option>Tamil Nadu</Option>
                                            <Option>Telangana</Option>
                                            <Option>Tripura</Option>
                                            <Option>Uttarakhand</Option>
                                            <Option>Uttar Pradesh</Option>
                                            <Option>West Bengal</Option>
                                            <Option>
                                                Andaman and Nicobar Islands
                                            </Option>
                                            <Option>Chandigarh</Option>
                                            <Option>
                                                Dadra and Nagar Haveli
                                            </Option>
                                            <Option>Daman and Diu</Option>
                                            <Option>Delhi</Option>
                                            <Option>Lakshadweep</Option>
                                            <Option>Puducherry</Option>
                                        </Select>
                                    </div>
                                    <div className="lg:w-1/3 flex flex-col mb-4">
                                        <Input
                                            type={"file"}
                                            label="Profile Picture*"
                                            color="orange"
                                            size="lg"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="text-lg text-tertiary font-bold">
                                    Socials
                                    <hr className="w-full h-4 mt-1 border-t-2" />
                                </div>

                                {/* Social Links */}

                                <div className="lg:flex items-center justify-between gap-3">
                                    <div className="lg:w-1/2 flex flex-col mb-4">
                                        <Input
                                            label="Twitter*"
                                            color="orange"
                                            size="lg"
                                            required
                                        />
                                    </div>
                                    <div className="lg:w-1/2 flex flex-col mb-4">
                                        <Input
                                            label="GitHub"
                                            color="orange"
                                            size="lg"
                                        />
                                    </div>
                                </div>

                                <div className="lg:flex items-center justify-between gap-3">
                                    <div className="lg:w-1/2 flex flex-col mb-4">
                                        <Input
                                            label="LinkedIn*"
                                            color="orange"
                                            size="lg"
                                            required
                                        />
                                    </div>
                                    <div className="lg:w-1/2 flex flex-col mb-4">
                                        <Input
                                            label="Website"
                                            color="orange"
                                            size="lg"
                                        />
                                    </div>
                                </div>

                                <div className="text-lg text-tertiary font-bold">
                                    Professional Details
                                    <hr className="w-full h-4 mt-1 border-t-2" />
                                </div>

                                {/* Professional */}

                                <div className="lg:flex items-center justify-between gap-3">
                                    <div className="lg:w-1/2 flex flex-col mb-4">
                                        <Input
                                            label="Organisation*"
                                            color="orange"
                                            size="lg"
                                            required
                                        />
                                    </div>
                                    <div className="lg:w-1/2 flex flex-col mb-4">
                                        <Input
                                            label="Designation*"
                                            color="orange"
                                            size="lg"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="lg:flex items-center justify-between gap-3">
                                    {/* <div className='lg:w-1/2 flex flex-col mb-4'>
                            <Input type={'number'} label='Years of experience *' color='orange' size='lg' required/>
                        </div> */}
                                    <div className="lg:w-1/2 flex flex-col mb-4">
                                        <Select
                                            label="Years of Experience*"
                                            color="orange"
                                            size="lg"
                                            required
                                        >
                                            <Option>
                                                Student (Select this only, if
                                                you have not graduated yet)
                                            </Option>
                                            <Option>0-2 years</Option>
                                            <Option>2-5 years</Option>
                                            <Option>5-10 years</Option>
                                            <Option>10+ years</Option>
                                        </Select>
                                    </div>
                                    <div className="lg:w-1/2 flex flex-col mb-4">
                                        <Select
                                            label="Are you a GDE ?*"
                                            color="orange"
                                            size="lg"
                                            required
                                        >
                                            <Option>Yes</Option>
                                            <Option>No</Option>
                                        </Select>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 flex flex-col mb-4">
                                    <Select
                                        label="Tech Stack *"
                                        size="lg"
                                        color="orange"
                                        required
                                    >
                                        <Option>Android</Option>
                                        <Option>Cloud</Option>
                                        <Option>Firebase</Option>
                                        <Option>Flutter</Option>
                                        <Option>ML/AI</Option>
                                        <Option>TensorFlow</Option>
                                        <Option>Web</Option>
                                        <Option>Web3</Option>
                                        <Option>Chrome</Option>
                                        <Option>Google Assistant</Option>
                                        <Option>Google Maps</Option>
                                        <Option>Codekit</Option>
                                    </Select>
                                </div>

                                <div className="text-lg text-tertiary font-bold">
                                    Session Details
                                    <hr className="w-full h-4 mt-1 border-t-2" />
                                </div>

                                {/* Session */}

                                <div className="lg:flex items-center justify-between gap-3">
                                    <div className="lg:w-1/2 flex flex-col mb-4">
                                        <Input
                                            label="Session Topic*"
                                            color="orange"
                                            size="lg"
                                            required
                                        />
                                    </div>
                                    <div className="lg:w-1/2 flex flex-col mb-4">
                                        <Input
                                            label="Duration in minutes*"
                                            color="orange"
                                            size="lg"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col mb-4">
                                    <Textarea
                                        label="Session Description*"
                                        color="orange"
                                        size="lg"
                                        required
                                    />
                                </div>

                                <div className="text-lg text-tertiary font-bold">
                                    Preferences
                                    <hr className="w-full h-4 mt-1 border-t-2" />
                                </div>

                                {/* Preferences */}

                                <div className="lg:flex items-center justify-between gap-3">
                                    <div className="lg:w-1/2 flex flex-col mb-4">
                                        <Select
                                            label="Food *"
                                            size="lg"
                                            color="orange"
                                            required
                                        >
                                            <Option>VEG</Option>
                                            <Option>NON VEG</Option>
                                        </Select>
                                    </div>
                                    <div className="lg:w-1/2 flex flex-col mb-4">
                                        <Select
                                            label="Shirt Size *"
                                            size="lg"
                                            color="orange"
                                            required
                                        >
                                            <Option>S</Option>
                                            <Option>M</Option>
                                            <Option>L</Option>
                                            <Option>XL</Option>
                                        </Select>
                                    </div>
                                </div>
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="mt-5 w-40 bg-secondary text-primary self-center font-bold py-2 px-4 rounded-md cursor-pointer border-primary border-2"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
