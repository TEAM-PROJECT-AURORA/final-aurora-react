import { useState } from 'react';
import meetingReportsCSS from './ApprovalModal.module.css'
// 에디터 컴포넌트, css스타일 
import { Editor } from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// EditorState 처리를 위한 draft-js
import { EditorState } from 'draft-js';

function MeetingReports() {
    /* 에디터 설정 */
    // EditorState 사용하기 위해 useState로 설정
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (newEditorState) => {
        setEditorState(newEditorState);
    };
    const docCode = undefined;
    // 작성하기 버튼 클릭하면 바뀜
    const [isEdit, setIsEdit] = useState(false);

    const backEvent = () => {
        window.history.back();
    }
    return (
        <div className={meetingReportsCSS.detailBox}>
            {!isEdit ? <div></div> : <div className={meetingReportsCSS.nextStep}>
                <button> 제출 </button>
                <button onClick={backEvent}>목록</button>
            </div>}
            <div className={meetingReportsCSS.detailView}>
                <div className={meetingReportsCSS.buttonBox}>
                </div>
                <table className={meetingReportsCSS.detailtable}>
                    <thead>
                        <tr>
                            <td className={meetingReportsCSS.detaildocName} colSpan="2">
                                <h1>회의보고서</h1>
                            </td>
                        </tr>
                    </thead>
                    <tbody className={meetingReportsCSS.detailBody}>
                        <tr>
                            <td className={meetingReportsCSS.detailTitle}>
                                제목
                            </td>
                            <td className={meetingReportsCSS.description}>
                            </td>
                        </tr>
                        <tr>
                            <td className={meetingReportsCSS.detailTitle}>
                                작성자
                            </td>
                            <td className={meetingReportsCSS.description}>
                            </td>
                        </tr>
                        <tr>
                            <td className={meetingReportsCSS.detailTitle}>
                                회의실
                            </td>
                            <td className={meetingReportsCSS.description}>

                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className={meetingReportsCSS.detailDescript}>
                                <Editor
                                    editorState={editorState}
                                    // 에디터와 상호작용할때마다 새로운 에디터 상태로 상태를 업데이트
                                    onEditorStateChange={onEditorStateChange}
                                    readOnly={!isEdit ? true : false}
                                    toolbar={{
                                        options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'remove', 'history'],
                                        inline: { inDropdown: true },
                                        list: { inDropdown: true },
                                        textAlign: { inDropdown: true },
                                        link: { inDropdown: true },
                                        history: { inDropdown: true },
                                    }}
                                />

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MeetingReports;