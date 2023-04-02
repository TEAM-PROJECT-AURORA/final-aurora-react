import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { callMemberDetailAPI, callMemberModifyAPI } from '../../apis/HrmAPICall';
import { decodeJwt } from '../../utils/tokenUtils';
import HrmDetailCSS from './HrmDetail.module.css';

export default function HrmModify() {
  const dispatch = useDispatch();
  const {memberCode} = useParams()
  const member = useSelector(state => state.hrmReducer.memberDetail);
  const changeInfo  = useSelector(state => state.hrmReducer.memberModify);
  const loginMember = decodeJwt(window.localStorage.getItem("accessToken"));
  const memberInfo = member.memberDTO;
  console.log(loginMember.memberCode);
  console.log('member' , member);

  const [textarea, setTextarea] =useState('')

  const onChangeHandler = (e) => {

    setTextarea(e.target.value);

  }

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  
  console.log('loginMember' , loginMember);
  console.log('memberInfo', memberInfo);
 

  const [formValues, setFormValues] = useState({
    memberCode: '',
    memberId: '',
    memberName: '',
    phone: '',
    memberEmail: '',
    deptName: '',
    jobName: '',
    birthDay: '',
    address: '',
    memberHireDate: '',
    status: '',
    memberEndDate: '',
  });

  const handleUpdate = () => {
    if (memberInfo) {
      const updatedMemberInfo = {
        ...memberInfo,
        ...formValues,
        introduction: textarea,
      };

      dispatch(
        callMemberModifyAPI({
          memberInfo: updatedMemberInfo,
          memberCode: formValues.memberCode,
          memberName: formValues.memberName,
          memberId: formValues.memberId,
          email: formValues.memberEmail,
          deptCode: memberInfo.deptCode,
          jobCode: memberInfo.jobCode,
          status: formValues.status,
          phone: formValues.phone,
          address: formValues.address,
          memberEndDate: formValues.memberEndDate,
          taskCode: memberInfo.taskName,
          memberHireDate: formValues.memberHireDate,
          signficant: memberInfo.signficant,
          introduction: textarea,
          fileCode: memberInfo.fileCode,
          team: memberInfo.team,
          gender: memberInfo.gender,
          birthDay: formValues.birthDay,
        }),
      );
    } else {
      console.error("memberInfo를 잘 가져오는지 확인하세요");
    }
  };

  useEffect(() => {

    dispatch(callMemberDetailAPI({
      memberCode : memberCode
    }));
  },[memberCode , dispatch]);

  useEffect(() => {
    
    setTextarea(memberInfo?.introduction);
  }, [memberInfo]);

  useEffect(() => {
    
    if (memberInfo) {
      setFormValues({
        memberCode: memberInfo?.memberCode,
        memberId: memberInfo?.memberId,
        memberName: memberInfo?.memberName,
        phone: memberInfo?.phone,
        memberEmail: memberInfo?.memberEmail,
        deptName: memberInfo?.deptName,
        jobName: memberInfo?.jobName,
        birthDay: memberInfo?.birthDay,
        address: memberInfo?.address,
        memberHireDate: memberInfo?.memberHireDate,
        signficant: memberInfo?.signficant,
        status: memberInfo?.status,
        memberEndDate: memberInfo?.memberEndDate,
      });
    }
  }, [memberInfo]);



  return (
      <>
    <div className={HrmDetailCSS.allContainer}>
      <div className={HrmDetailCSS.container}>
        <div>
          <div className={HrmDetailCSS.inputWrapper}>
            <span className={HrmDetailCSS.inputLabel}>사원번호</span>
            <input
              className={HrmDetailCSS.inputBox}
              type="text"
              name="사원번호"
              readOnly
              value={memberCode}
            />
            <span className={HrmDetailCSS.inputLabel}>아이디</span>
            <input
              className={HrmDetailCSS.inputBox}
              type="text"
              name="memberId"
              onChange={onInputChange}
              value={formValues.memberId}
            />
          </div>
          <div className={HrmDetailCSS.inputWrapper}>
            <span className={HrmDetailCSS.inputLabel}>성명</span>
            <input
              className={HrmDetailCSS.inputBox}
              type="text"
              name="memberName"
              onChange={onInputChange}
              value={formValues.memberName}
            />
            <span className={HrmDetailCSS.inputLabel}>핸드폰</span>
            <input
              className={HrmDetailCSS.inputBox}
              type="text"
              name="phone"
              onChange={onInputChange}
              value={formValues.phone}
            />
          </div>
          <div className={HrmDetailCSS.inputWrapper}>
            <span className={HrmDetailCSS.inputLabel}>이메일</span>
            <input
              className={HrmDetailCSS.inputBox}
              type="text"
              name="memberEmail"
              onChange={onInputChange}
              readOnly
              value={formValues.memberEmail}
            />
            <span className={HrmDetailCSS.inputLabel}>부서</span>
            <select
              className={HrmDetailCSS.inputBox}
              type="text"
              name="deptName"
              onChange={onInputChange}
              value={formValues.deptName}
            >
               {member.selectDept.map((dept) => (
            <option key={dept.deptCode} value={dept.deptCode}>
              {dept.deptName}
            </option>
          ))}
            </select>
          </div>
          <div className={HrmDetailCSS.inputWrapper}>
            <span className={HrmDetailCSS.inputLabel}>직급</span>
            <select
              className={HrmDetailCSS.inputBox}
              name="jobName"
              onChange={onInputChange}
              value={formValues.jobName}
             >
              {member.selectJob.map((job) => (
            <option key={job.jobCode} value={job.jobCode}>
              {job.jobName}
            </option>
          ))}
        </select>
            <span className={HrmDetailCSS.inputLabel}>생년월일</span>
            <input
              className={HrmDetailCSS.inputBox}
              type="text"
              name="birthDay"
              onChange={onInputChange}
              readOnly
              value={formValues.birthDay}
            />
          </div>
          <div className={HrmDetailCSS.inputWrapper}>
            <span className={HrmDetailCSS.inputLabel}>주소</span>
            <input
              className={HrmDetailCSS.inputBox}
              type="text"
              name="address"
              onChange={onInputChange}
              value={formValues.address}
            />
            <span className={HrmDetailCSS.inputLabel}>입사일</span>
            <input
              className={HrmDetailCSS.inputBox}
              type="date"
              name="memberHireDate"
              onChange={onInputChange}
              value={formValues.memberHireDate}
            />
          </div>
          <div className={HrmDetailCSS.inputWrapper}>
            <span className={HrmDetailCSS.inputLabel}>재직상태</span>
            <select
              className={HrmDetailCSS.inputBox}
              type="text"
              name="status"
              onChange={onInputChange}
              value={formValues.status}
            >
              <option value="재직">재직</option>
              <option value="퇴직">퇴직</option>
              </select>
            <span className={HrmDetailCSS.inputLabel}>퇴사일</span>
            <input
              className={HrmDetailCSS.inputBox}
              type="date"
              name="memberEndDate"
              onChange={onInputChange}
              value={formValues.memberEndDate}
            />
          </div>
        </div>
      </div>
      

   
     
      <div className={HrmDetailCSS.textareaContainer}>
      <span>기타정보</span>
    <textarea
      className={HrmDetailCSS.textarea}
      value={formValues.signficant}
       onChange={onInputChange}
    />
       
      </div>
      <div className={HrmDetailCSS.textareaContainer}>
      <span>자기소개</span>
    <textarea
      className={HrmDetailCSS.textarea}
       value={textarea}
      onChange={onChangeHandler}
      readOnly={loginMember.memberCode == memberCode ? false :true}
    />
    <div>
      

       <button type="button" onClick={handleUpdate}>수정</button>
      
      </div>
       
      </div>
      </div>
      </>
    );
}
