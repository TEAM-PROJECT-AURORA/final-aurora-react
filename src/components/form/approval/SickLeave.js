import { useState } from 'react';
import sickLeaveCSS from './ApprovalModal.module.css'

function SickLeave() {

    const docCode = undefined;
    // 작성하기 버튼 클릭하면 바뀜
    const [isEdit, setIsEdit] = useState(false);

    const backEvent = () => {
        window.history.back();
    }
    return (
        <div className={sickLeaveCSS.detailBox}>
            {!isEdit ? <div></div> : <div className={sickLeaveCSS.nextStep}>
                <button> 제출 </button>
                <button onClick={backEvent}>목록</button>
            </div>}
            <div className={sickLeaveCSS.detailView}>
                <div className={sickLeaveCSS.buttonBox}>
                </div>
                <table className={sickLeaveCSS.detailtable}>
                    <thead>
                        <tr>
                            <td className={sickLeaveCSS.detaildocName} colSpan="2">
                                <h1>병가휴직서</h1>
                            </td>
                        </tr>
                    </thead>
                    <tbody className={sickLeaveCSS.detailBody}>
                        <tr>
                            <td className={sickLeaveCSS.detailTitle}>
                                제목
                            </td>
                            <td className={sickLeaveCSS.description}>
                            </td>
                        </tr>
                        <tr>
                            <td className={sickLeaveCSS.detailTitle}>
                                작성자
                            </td>
                            <td className={sickLeaveCSS.description}>
                            </td>
                        </tr>
                        <tr>
                            <td className={sickLeaveCSS.detailTitle}>
                                기간
                            </td>
                            <td className={sickLeaveCSS.description}>
                                {!isEdit ? <input type="date" id="startDate" name='startDate' readOnly /> : <input type="date" id="startDate" name='startDate' />}~
                                {!isEdit ? <input type="date" id="endDate" name='endDate' readOnly /> : <input type="date" id="endDate" name='endDate' />}
                            </td>
                        </tr>
                        <tr>
                            <td className={sickLeaveCSS.detailTitle}>
                                병가 사유
                            </td>
                            <td className={sickLeaveCSS.description}>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>

    )
}

export default SickLeave;