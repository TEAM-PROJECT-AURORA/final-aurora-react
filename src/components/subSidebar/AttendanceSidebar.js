import React from 'react';
import HrmSubSidebarCSS from "./HrmSubSidebar.module.css";
import { NavLink } from "react-router-dom";
import { decodeJwt } from "../../utils/tokenUtils";
import { useState, useEffect } from 'react';




export default function AttendanceSidebar() {

    const loginMember = decodeJwt(window.localStorage.getItem("accessToken"));
    let decoded = null;

    if (loginMember !== undefined && loginMember !== null) {
        const temp = decodeJwt(window.localStorage.getItem('accessToken'));
        decoded = temp.auth[0]; // accessToken 토큰안에 페이로드 안에 있는 auth 꺼냄
        //aud :Audience 토큰 대상자를 나타냄
      }

      console.log(decoded);

    const activeStyle = {
        backgroundColor : "#73b8a3",
        color : "white"
    };

   

    return (
        <>
            <div className={HrmSubSidebarCSS.sidebarDiv}>
                <div className={HrmSubSidebarCSS.sideHeader}>
                    <span>근태 관리</span>
                </div>
                <div>
                    <NavLink 
                        className={HrmSubSidebarCSS.NavLink}
                        style={ ({ isActive }) => isActive?  activeStyle : undefined } 
                        to={`/aurora/attendance/attendance-detail/${loginMember.memberCode}`}
                        >근태 현황</NavLink>    
                </div>
                <div>
                   {loginMember.memberCode && (
                    <NavLink 
                        className={HrmSubSidebarCSS.NavLink}
                        style={ ({ isActive }) => isActive?  activeStyle : undefined } 
                        to={`/aurora/attendance/vacation-detail/${loginMember.memberCode}`}
                        >휴가 현황</NavLink> 
                         )}    
                </div>
               {(decoded === 'ROLE_ADMIN' || decoded === 'ROLE_MANAGER') &&( 
                <div>
                    <NavLink 
                        className={HrmSubSidebarCSS.NavLink}
                        style={ ({ isActive }) => isActive?  activeStyle : undefined } 
                        to={`/aurora/attendance/attendance-modify`}
                        >근태 수정</NavLink>    
                </div>
                )} 
            </div>
        </>
    );
}
