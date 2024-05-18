
import React, { useState,useRef } from 'react';
import { Toast } from 'primereact/toast';
//componen function react, component class

const SignUp = ()=>{
    const toastTopCenter = useRef(null);
    const [person,setPerson] = useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:"",
    });
   
    const onChangeFullName = (e) => {
        const {value} = e.target;
        setPerson({
            ...person,
            fullName:value,
        });
       
    }
    const onChangeEmail = (e) => {
        const {value} = e.target;
        setPerson({
            ...person,
            email:value,
        });
       
    }
    const onChangePassword = (e) => {
        const {value} = e.target;
        setPerson({
            ...person,
            password:value,
        });
       
    }
    const onChangeComfirmPassword = (e) => {
        const {value} = e.target;
        setPerson({
            ...person,
            confirmPassword:value,
        });
       
    }
  const onSignUp = (e)=>{

    if(person.fullName == "" || person.email == "" || person.password == "" || person.confirmPassword == ""){
        showMessage(e, toastTopCenter, 'error','Vui lòng nhập đầy đủ thông tin!');
    }else{
        showMessage(e, toastTopCenter, 'success','Đăng ký thành công!');
    }
  }
  const showMessage = (event, ref, severity,detail) => {
    const label = event.target.innerText;

    ref.current.show({ severity: severity, summary: "Thông báo", detail: detail, life: 3000 });
}   ;
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                
                </h1>
                <div className="space-y-4 md:space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                        <input type="text" value={person.fullName} name="fullName" id="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required="" onChange={onChangeFullName}/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" value={person.email} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={onChangeEmail}/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" value={person.password} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={onChangePassword}/>
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                        <input type="password" value={person.confirmPassword} name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={onChangeComfirmPassword}/>
                    </div>
                   
                    <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={onSignUp}>Create an account</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                    </p>
                </div>
            </div>
        </div>
        <Toast ref={toastTopCenter} position="top-center" />
    </div>
    
    );
}
export default SignUp