import { Editor } from "react-draft-wysiwyg";
import { EditorState,convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import { useState } from "react";

function TextEditor() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    }
    return (
        <div className='container'>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
            />
            <textarea rows="5" cols="50" disabled value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}>

            </textarea>
        </div>
    )
}

export default TextEditor;
