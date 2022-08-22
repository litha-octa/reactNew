/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
import {Checkbox, Input} from "@chakra-ui/react";
import {logoFazz, logoGoogle, logoIg, redStar} from "../../asset/image";
import Btn from "../../component/Btn";
import Google from "../../asset/Google";

function Login() {

  return (
   <div className={'bodyLogin'}>
       <div className={'container'}>
           <img src={logoFazz} alt={'logoFazz'} className={'logo'}/>
           <div className={'welcome'}>Selamat Datang</div>
           <div className={'row'}>
               <div>Belum punya akun Fazztrack ?</div>
               <Link to = '/Register'>
               <div className={'orangeText'}> Daftar disini</div>
               </Link>
           </div>
           <div className={'fieldName'}>
               <img src={redStar} alt={'req'} className={'tinyStar'} />
               Email</div>
           <Input placeholder='Masukkan email anda' size='md' variant='outline'/>
           <div className={'fieldName'}>
               <img src={redStar} alt={'req'} className={'tinyStar'} />
               Password</div>
           <Input placeholder='Masukkan kata sandi'  type='password' size='md' variant='outline'/>
           <div className={'row2'}>

           <Checkbox colorScheme='blue' iconColor='white.400' defaultChecked>
               <div className={'checkbox'}>
               Ingat akun saya
               </div>
           </Checkbox>
           <div className={'newPass'}>Lupa Password</div>
           </div>
           <Btn
           label={'Masuk'}
           px="47%"
           bg={'orange'}
           className={'btn'}
           />
           <div className={'altLogin'}>Atau masuk Menggunakan</div>
           <Btn
               label={'Google'}
               iconL={<Google />}
               px="46%"
               bg='gray'
               color={'black'}
               className={'btn'}
           />
       </div>

   </div>
  );
}

export default Login;
